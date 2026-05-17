// Placeholder testimonials — replace with real Google reviews before launch.
export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: 5;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jaspreet K.',
    location: 'South Surrey, BC',
    quote:
      'Sarb and his team built the frameless glass railing on our deck and I cannot believe how clean the finish is. They cared more about the details than we did. Would absolutely hire again.',
    rating: 5,
    project: 'Frameless glass deck railing'
  },
  {
    name: 'Mike & Sarah T.',
    location: 'Langley, BC',
    quote:
      'We had three contractors quote our custom home staircase. All Kinds Railings was the only one that understood exactly what we wanted. Beautiful wood spindles with iron balusters — exactly the heritage feel we asked for.',
    rating: 5,
    project: 'Interior wood-and-iron staircase'
  },
  {
    name: 'GreenLeaf Builders',
    location: 'Abbotsford, BC',
    quote:
      'We use All Kinds Railings on every custom home we build in the Fraser Valley. On time, on budget, and they handle the inspection paperwork. Best railing crew in the region.',
    rating: 5,
    project: 'Multi-home spec builder contract'
  },
  {
    name: 'Priya S.',
    location: 'Coquitlam, BC',
    quote:
      'Replaced our old wood deck railing with frameless glass. The view from our living room is unreal now. Crew was respectful, clean, and finished in 2 days.',
    rating: 5,
    project: 'Deck glass replacement'
  }
];
