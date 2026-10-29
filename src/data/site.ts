// All page copy lives here so content edits don't touch markup.
// Anything marked PLACEHOLDER is waiting on final content or assets.

export const site = {
  name: 'Dilsav',
  title: 'Dilsav — Enterprise technology partner',
  description:
    'Cloud, security, software and IoT. Dilsav helps organizations modernize, protect and scale with technology that delivers.',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Enterprise technology partner',
  headline: ['Technology', 'built to move', 'you forward.'],
  subhead: 'Cloud, Security, Software, IoT.',
  cta: { label: 'Start a conversation', href: '#contact' },
  pillars: ['Ideas', 'Infrastructure', 'Outcomes'],
};

export const approach = {
  eyebrow: 'Our approach',
  headline: 'Real-world outcomes through connected capabilities.',
  body: 'From global infrastructure to intelligent systems, we help organizations modernize, protect and scale with technology that delivers.',
  video: {
    label: "Watch how we build what's next",
    duration: '01:28',
    // PLACEHOLDER: set to the hosted MP4 URL (e.g. on CloudFront) once the video exists.
    src: '',
  },
};

export type CapabilityId = 'cloud' | 'security' | 'software' | 'iot';

// `area` is where each glass card sits inside approach.jpg, as percentages of the
// image. Re-measure if that image changes (the card crops in assets/images/capabilities
// are cut from the same spots).
export const capabilities: {
  id: CapabilityId;
  title: string;
  tagline: string;
  area: { left: number; top: number; width: number; height: number };
}[] = [
  {
    id: 'cloud',
    title: 'Cloud',
    tagline: 'Scale without limits',
    area: { left: 32.0, top: 18.28, width: 13.28, height: 53.77 },
  },
  {
    id: 'security',
    title: 'Security',
    tagline: 'Confidence in a complex world',
    area: { left: 46.95, top: 20.72, width: 11.96, height: 51.54 },
  },
  {
    id: 'software',
    title: 'Software',
    tagline: 'Ideas into real solutions',
    area: { left: 60.29, top: 20.72, width: 12.08, height: 51.75 },
  },
  {
    id: 'iot',
    title: 'IoT',
    tagline: 'Connected for a smarter tomorrow',
    area: { left: 74.04, top: 21.25, width: 9.99, height: 51.01 },
  },
];

// PLACEHOLDER: replace with real case studies.
export const work = {
  eyebrow: 'Selected work',
  headline: 'Built for organizations that can’t stand still.',
  items: [
    { tag: 'Cloud', title: 'Case study title', summary: 'One or two lines on the challenge and the measurable outcome.' },
    { tag: 'Security', title: 'Case study title', summary: 'One or two lines on the challenge and the measurable outcome.' },
    { tag: 'IoT', title: 'Case study title', summary: 'One or two lines on the challenge and the measurable outcome.' },
  ],
};

// PLACEHOLDER: replace with final company copy.
export const about = {
  eyebrow: 'About Dilsav',
  headline: 'A technology partner from first idea to lasting outcome.',
  body: 'Short paragraph about who Dilsav is, how the team works and what clients can expect. Two or three sentences is enough here.',
  principles: [
    { title: 'Ideas', text: 'We start from the problem, not the technology, and shape a plan worth building.' },
    { title: 'Infrastructure', text: 'We design and run the foundations that keep systems secure, fast and resilient.' },
    { title: 'Outcomes', text: 'We measure success by what changes for the business, not by what ships.' },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  headline: 'Start a conversation.',
  body: 'Tell us what you’re working on. We’ll get back to you within one business day.',
};
