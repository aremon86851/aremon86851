export const site = {
  meta: {
    title: 'Abdur Rahman Emon - Full-Stack Software Engineer',
    description:
      'Full-stack TypeScript engineer. React, Next.js, Node.js, PostgreSQL.',
    ogTitle: 'Abdur Rahman Emon - Full-Stack Software Engineer',
    ogDescription:
      'Full-stack TypeScript engineer building production SaaS end to end.',
  },

  nav: {
    logo: 'emon.dev',
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    status: 'Currently: Software Engineer @ CodeRower',
    meta: 'Abdur Rahman Emon - Full-Stack Software Engineer · Gazipur, BD',
    sub: 'Full-stack TypeScript engineer. React, Next.js, Node.js, PostgreSQL.',
    cta: {
      primary: { label: 'Work with me →', href: 'mailto:aremon86851@gmail.com' },
      secondary: { label: 'Download CV', tag: 'PDF', href: '/resume_aremon.pdf' },
    },
    location: 'Gazipur, BD · GMT+6',
    photo: '/images/profile-picture.png',
  },

  work: {
    sectionLabel: '01 - Built, shipped, and run by me',
    projects: [
      {
        id: 'scanalyzr',
        category: 'QR code analytics SaaS',
        name: 'Scanalyzr',
        links: [{ label: 'scanalyzr.com ↗', href: 'https://scanalyzr.com' }],
        problem:
          'Once a QR code is printed, there is no signal on who scanned it, where, or when.',
        built:
          'A multi-tenant SaaS with real-time scan tracking and a dashboard that breaks scans down by location, device and time.',
        stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
        frameUrl: 'scanalyzr.com/dashboard',
        screenshot: '/images/scanalyzr-dasboard.png',
        phoneScreenshot: null,
      },
      {
        id: 'satheiro',
        category: 'Local services marketplace · BD',
        name: 'Satheiro',
        links: [
          { label: 'satheiro.com ↗', href: 'https://satheiro.com' },
          { label: 'Google Play ↗', href: 'https://play.google.com/store/apps/details?id=com.satheiro.app&pcampaignid=web_share', external: true },
        ],
        problem:
          'Finding a trustworthy local service provider in Bangladesh still runs on word of mouth.',
        built:
          'Map-based discovery of verified providers - a React Native app on Google Play, a web app, and an admin panel with listing approval and search-gap analytics.',
        stack: ['React Native', 'Expo', 'Next.js', 'Node.js', 'PostgreSQL'],
        frameUrl: 'satheiro.com',
        screenshot: '/images/satheiro-desktop-daskboard.png',
        phoneScreenshot: '/images/satheiro-mobile-home.jpeg',
      },
    ],
  },

  experience: {
    sectionLabel: '02 - ~4 years',
    items: [
      {
        dates: 'Jan 2023 - Present',
        role: 'Software Engineer · CodeRower Software Pvt. Ltd.',
        meta: 'Gurugram, India · Remote',
        bullets: [
          {
            text: 'Built and maintained client-facing web applications using React.js and Next.js, shipping features across multiple production projects.',
            placeholder: false,
          },
          {
            text: 'Integrated third-party and internal REST APIs into frontend applications, coordinating closely with the backend team for smooth data flow.',
            placeholder: false,
          },
          {
            text: 'Promoted from Frontend Developer to Software Engineer within 7 months, recognized for consistent delivery across the product.',
            placeholder: false,
          },
          {
            text: 'Implemented performance optimizations and responsive design patterns, improving page load times and mobile UX across projects.',
            placeholder: false,
          },
        ],
      },
      {
        dates: 'Oct 2021 - Dec 2022',
        role: 'Freelance Web Developer · Self-Employed',
        meta: 'Bangladesh (Local & International)',
        bullets: [
          {
            text: 'Delivered custom websites and e-commerce stores for SME clients also complete multiple projects using WordPress, WooCommerce, and Elementor.',
            placeholder: false,
          },
          {
            text: 'Handled full project lifecycle - requirements, design, development, testing, and client handoff - including SSLCommerz/bKash payment integration.',
            placeholder: false,
          },
          {
            text: 'Maintained direct communication with international clients (US/UK), building long-term professional relationships.',
            placeholder: false,
          },
        ],
      },
    ],
  },

  stack: {
    sectionLabel: '03 - What the products run on',
    categories: [
      { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'MongoDB'] },
      { label: 'Mobile', items: ['React Native', 'Expo'] },
      { label: 'Payments', items: ['SSLCommerz', 'bKash', 'Stripe'] },
    ],
  },

  contact: {
    sectionLabel: '04 - Contact',
    headline: "Have a product to ship? Let's talk.",
    email: 'aremon86851@gmail.com',
    displayEmail: 'aremon86851@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aremon8685/', icon: '↗' },
      { label: 'GitHub', href: 'https://github.com/aremon86851', icon: '↗' },
      { label: 'YouTube · DevWithEmon', href: 'https://www.youtube.com/@DevWithEmon', icon: '↗' },
    ],
  },

  footer: {
    copy: '© 2026 Abdur Rahman Emon',
    location: 'Gazipur, Bangladesh · GMT+6',
  },
};
