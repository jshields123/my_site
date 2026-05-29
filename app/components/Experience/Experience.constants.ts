export interface Role {
  role: string;
  company: string;
  dates: string;
  description: string;
  tags?: string[];
}

export const EXPERIENCE: Role[] = [
  {
    role: 'Software Engineer · Sole Developer',
    company: 'London',
    dates: '2023 — Present',
    description:
      'Sole developer across the full technology stack for a multi-brand studio. Built a fully automated fulfilment pipeline integrating internal PM tooling with the DPD courier API. Rebuilt the customer ordering portal from Svelte to Next.js with a fresh Directus CMS and consolidated shop pathways. Designed a business-logic API layer for workflow automation, delivered a branded city guide product with a non-technical city management system, stood up GitHub Actions CI/CD from scratch across all projects, and recovered ~50% of server capacity through a full infrastructure audit.',
    tags: ['Next.js', 'TypeScript', 'Directus', 'Docker', 'GitHub Actions', 'AWS'],
  },
  {
    role: 'Software Engineer',
    company: 'AreMedia, Sydney',
    dates: 'Sep 2022 — Nov 2023',
    description:
      'Built a Next.js magazine marketplace and implemented a Keystone.js CMS plus a React component library across a three-month delivery cycle. Shipped an email data capture app via Vite.js on AWS, embedded across 13 sites through GTM — drove an 86% increase in collected emails in the first three months. Integrated third-party ad revenue tools and led WordPress multisite infrastructure migration.',
    tags: ['Next.js', 'Keystone.js', 'Vite', 'AWS', 'PHP', 'Vue'],
  },
  {
    role: 'Software Engineer',
    company: 'RecycleSmart, Sydney',
    dates: 'Sep 2021 — Sep 2022',
    description:
      'First full-time engineering hire. Onboarded into Ruby on Rails, Flutter, React, and Slim, shipping across the full stack from day one. Led the migration of the web front end to a Flutter cross-platform codebase and redesigned the sign-up and booking flow to accommodate new product streams.',
    tags: ['Rails', 'Flutter', 'React', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer · Contractor',
    company: 'Various, Sydney',
    dates: 'Apr 2021 — Sep 2022',
    description:
      'Delivered the Match Days application and collaborated with a sports-tech startup connecting local businesses with sports teams. Customised Canvas Bar\'s Shopify storefront, building proficiency in Liquid templating and the wider Shopify ecosystem.',
    tags: ['React Native', 'Shopify', 'Liquid'],
  },
];
