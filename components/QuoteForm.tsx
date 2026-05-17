'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Check, Home, Building2, Wrench, Wand2 } from 'lucide-react';
import clsx from 'clsx';
import { trackLeadConversion } from './Analytics';

/**
 * Multi-step quote funnel.
 *
 * Used in two places:
 *   - <QuoteForm variant="full" />     → /quote dedicated page
 *   - <QuoteForm variant="embedded" /> → landing-page hero section
 *
 * Submits to /api/quote. Tracks Google Ads + Meta Pixel conversion on success.
 */

type Variant = 'full' | 'embedded';

type FormState = {
  // Step 1
  projectType: '' | 'residential' | 'commercial';
  // Step 2
  material: '' | 'wood' | 'glass' | 'metal' | 'mixed' | 'not-sure';
  railingType: '' | 'deck' | 'staircase' | 'balcony' | 'fence' | 'other';
  // Step 3
  linearFeet: string;
  timeline: '' | 'asap' | '1-3m' | '3-6m' | 'planning';
  budget: '' | 'under-5k' | '5-10k' | '10-25k' | '25k+' | 'not-sure';
  // Step 4
  city: string;
  postalCode: string;
  notes: string;
  // Step 5
  name: string;
  phone: string;
  email: string;
  source: string;
  consent: boolean;
};

const initial: FormState = {
  projectType: '',
  material: '',
  railingType: '',
  linearFeet: '',
  timeline: '',
  budget: '',
  city: '',
  postalCode: '',
  notes: '',
  name: '',
  phone: '',
  email: '',
  source: '',
  consent: false
};

const TOTAL_STEPS = 5;

export function QuoteForm({ variant = 'full' }: { variant?: Variant }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm(f => ({ ...f, [key]: value }));

  const canAdvance = () => {
    if (step === 1) return Boolean(form.projectType);
    if (step === 2) return Boolean(form.material) && Boolean(form.railingType);
    if (step === 3) return Boolean(form.timeline); // linearFeet + budget optional
    if (step === 4) return Boolean(form.city);
    if (step === 5) return (
      Boolean(form.name) && Boolean(form.phone) && Boolean(form.email) && form.consent
    );
    return false;
  };

  const next = () => {
    setError(null);
    if (!canAdvance()) {
      setError('Please complete the highlighted fields.');
      return;
    }
    if (step < TOTAL_STEPS) setStep(s => s + 1);
  };
  const back = () => setStep(s => Math.max(1, s - 1));

  const submit = async () => {
    if (!canAdvance()) {
      setError('Please complete the highlighted fields.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Request failed');
      trackLeadConversion(500); // estimated lead value (CAD) for ad bidding
      router.push('/thank-you');
    } catch (e) {
      setError('Something went wrong. Please call us directly or try again.');
      setSubmitting(false);
    }
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div
      className={clsx(
        'card-classy p-6 sm:p-8',
        variant === 'embedded' ? 'shadow-soft' : 'shadow-xl'
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="heading-md text-brand-ink">
            {variant === 'embedded' ? 'Start Your Free Quote' : 'Get Your Free Custom Quote'}
          </h3>
          <span className="text-sm text-gray-500">Step {step} of {TOTAL_STEPS}</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-red to-brand-brown transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="min-h-[280px]">
        {step === 1 && (
          <Step title="What kind of project is this?" subtitle="Helps us route to the right crew.">
            <div className="grid grid-cols-2 gap-3">
              <Choice
                selected={form.projectType === 'residential'}
                onClick={() => update('projectType', 'residential')}
                icon={<Home className="h-5 w-5" />}
                label="Residential"
                sub="Home, deck, staircase"
              />
              <Choice
                selected={form.projectType === 'commercial'}
                onClick={() => update('projectType', 'commercial')}
                icon={<Building2 className="h-5 w-5" />}
                label="Commercial"
                sub="Townhouse, retail, office"
              />
            </div>
          </Step>
        )}

        {step === 2 && (
          <Step title="What style are you considering?" subtitle="Pick the closest fit — we'll refine on the call.">
            <label className="label-field">Material</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {(['wood', 'glass', 'metal', 'mixed', 'not-sure'] as const).map(m => (
                <Pill key={m} active={form.material === m} onClick={() => update('material', m)}>
                  {label(m)}
                </Pill>
              ))}
            </div>
            <label className="label-field">Railing type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(['deck', 'staircase', 'balcony', 'fence', 'other'] as const).map(t => (
                <Pill key={t} active={form.railingType === t} onClick={() => update('railingType', t)}>
                  {label(t)}
                </Pill>
              ))}
            </div>
          </Step>
        )}

        {step === 3 && (
          <Step title="Project size & timing" subtitle="Rough estimates are fine — we'll confirm on site.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="linearFeet" className="label-field">Approx. linear feet</label>
                <input
                  id="linearFeet"
                  className="input-field"
                  placeholder="e.g. 60"
                  inputMode="numeric"
                  value={form.linearFeet}
                  onChange={e => update('linearFeet', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="budget" className="label-field">Budget range (optional)</label>
                <select
                  id="budget"
                  className="input-field"
                  value={form.budget}
                  onChange={e => update('budget', e.target.value as FormState['budget'])}
                >
                  <option value="">Not sure yet</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5-10k">$5,000 – $10,000</option>
                  <option value="10-25k">$10,000 – $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="label-field">When do you want it done?</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['asap', '1-3m', '3-6m', 'planning'] as const).map(t => (
                  <Pill key={t} active={form.timeline === t} onClick={() => update('timeline', t)}>
                    {label(t)}
                  </Pill>
                ))}
              </div>
            </div>
          </Step>
        )}

        {step === 4 && (
          <Step title="Where is the project located?" subtitle="So we can confirm service area and arrive prepared.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="label-field">City</label>
                <input
                  id="city"
                  className="input-field"
                  placeholder="Surrey, Langley, Coquitlam..."
                  value={form.city}
                  onChange={e => update('city', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="label-field">Postal code (optional)</label>
                <input
                  id="postalCode"
                  className="input-field"
                  placeholder="V3S 0M1"
                  value={form.postalCode}
                  onChange={e => update('postalCode', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="notes" className="label-field">Tell us about the project (optional)</label>
              <textarea
                id="notes"
                rows={4}
                className="input-field resize-none"
                placeholder="e.g. Replacing old wood railing on back deck with frameless glass, ~40 linear feet, ocean view."
                value={form.notes}
                onChange={e => update('notes', e.target.value)}
              />
            </div>
          </Step>
        )}

        {step === 5 && (
          <Step title="Where should we send your quote?" subtitle="We respond within 24 hours, often same day.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="label-field">Full name *</label>
                <input
                  id="name"
                  className="input-field"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="label-field">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  className="input-field"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label-field">Email *</label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="source" className="label-field">How did you hear about us? (optional)</label>
                <select
                  id="source"
                  className="input-field"
                  value={form.source}
                  onChange={e => update('source', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="google">Google search</option>
                  <option value="google-ads">Google Ad</option>
                  <option value="facebook">Facebook / Instagram</option>
                  <option value="referral">Friend or family referral</option>
                  <option value="contractor">Contractor / builder referral</option>
                  <option value="drive-by">Saw your work in the neighbourhood</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <label className="sm:col-span-2 flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={e => update('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                />
                <span>
                  I agree to be contacted by All Kinds Railings about my quote. We never share your info.
                </span>
              </label>
            </div>
          </Step>
        )}
      </div>

      {error && (
        <div className="mt-4 rounded-md bg-red-50 border border-red-200 text-sm text-brand-red-dark px-4 py-3">
          {error}
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button type="button" onClick={back} className="btn-ghost text-sm">
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="btn-primary"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canAdvance() || submitting}
            className="btn-primary"
          >
            {submitting ? 'Sending...' : 'Get My Free Quote'}
            {!submitting && <Check className="h-4 w-4" />}
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center">
        No obligation · Response within 24 hours · 30+ years of craftsmanship
      </p>
    </div>
  );
}

/* ---- helpers ---- */

function Step({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-in">
      <h4 className="text-xl font-display text-brand-ink">{title}</h4>
      {subtitle && <p className="mt-1 text-sm text-gray-500 mb-5">{subtitle}</p>}
      {children}
    </div>
  );
}

function Choice({
  selected,
  onClick,
  icon,
  label,
  sub
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'p-5 rounded-xl border-2 text-left transition-all',
        selected
          ? 'border-brand-red bg-brand-red-soft/40 shadow-soft'
          : 'border-gray-200 hover:border-brand-brown'
      )}
    >
      <span className={clsx('inline-flex h-9 w-9 items-center justify-center rounded-lg mb-3', selected ? 'bg-brand-red text-white' : 'bg-brand-cream text-brand-red')}>
        {icon}
      </span>
      <div className="font-semibold text-brand-ink">{label}</div>
      <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
    </button>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'px-3 py-2.5 rounded-md border-2 text-sm font-medium transition-all',
        active
          ? 'border-brand-red bg-brand-red text-white'
          : 'border-gray-200 text-brand-ink hover:border-brand-brown'
      )}
    >
      {children}
    </button>
  );
}

function label(v: string): string {
  const map: Record<string, string> = {
    wood: 'Wood',
    glass: 'Glass',
    metal: 'Metal',
    mixed: 'Mixed',
    'not-sure': 'Not sure',
    deck: 'Deck',
    staircase: 'Staircase',
    balcony: 'Balcony',
    fence: 'Fence',
    other: 'Other',
    asap: 'ASAP',
    '1-3m': '1–3 months',
    '3-6m': '3–6 months',
    planning: 'Just planning'
  };
  return map[v] ?? v;
}
