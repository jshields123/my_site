// Single source of truth for both tracks. Facts are shared; only framing differs.

export type Track = 'engineer' | 'security';

export interface Framed {
  engineer: string;
  security: string;
}

export interface Role {
  dates: string;
  title: string;
  company: string;
  summary: Framed;
  tags: string[];
}

export interface CaseStudy {
  title: string;
  metric?: string;
  built: string;
  hardenedTitle: string;
  hardened: string;
}

export interface Credential {
  badge: string;
  title: string;
  issuer: string;
}

export const PERSON = {
  name: 'Jack Shields',
  email: 'jackcyberpro30@gmail.com',
  location: 'London · Remote',
  siteUrl: 'https://jackshields.pro',
  domain: 'jackshields.pro',
  links: {
    github: 'https://github.com/jshields123',
    linkedin: 'https://www.linkedin.com/in/jackshields123/',
    tryhackme: 'https://tryhackme.com/p/jackyboi',
  },
} as const;

export const TRACKS: Record<Track, {
  path: string;
  label: string;
  role: string;
  headline: [string, string, string];
  lede: string;
  // Short line under the split hero, and the copy on the hub's track cards.
  short: string;
  cardKicker: string;
  cardTitle: string;
  cardBody: string;
  about: string[];
  metaTitle: string;
  metaDescription: string;
  crossLink: string;
}> = {
  engineer: {
    path: '/engineer',
    label: 'Build',
    role: 'Senior Software Engineer',
    headline: ['Engineer who', 'ships the whole', 'stack.'],
    lede:
      'Senior full-stack engineer and sole developer across a multi-brand platform for blue-chip consumer brands. Infrastructure, APIs and front end, all of it, built with a tester’s eye on every release.',
    about: [
      'I own products end to end: CI/CD, API design, front-end delivery and the server audit, often all in the same week.',
      'My background spans product engineering at scale, early-stage startups and commercial consulting. I’m eWPT and eJPT certified, so security is part of how I build, not something added later.',
    ],
    metaTitle: 'Senior Software Engineer',
    metaDescription:
      'Senior full-stack software engineer building with security in mind. Infrastructure, APIs and front-end delivery, end to end.',
    crossLink: 'I also test for security',
    short: 'Senior full-stack engineer and sole developer across a multi-brand platform for blue-chip consumer brands.',
    cardKicker: 'For engineering teams',
    cardTitle: 'The engineer',
    cardBody: 'Full-stack delivery: infra, APIs and front end, five years in production.',
  },
  security: {
    path: '/security',
    label: 'Break',
    role: 'Penetration Tester',
    headline: ['Built the web.', 'Now I break', 'it, properly.'],
    lede:
      'eWPT and eJPT certified, with five years shipping production web apps. I know where developers cut corners because I’ve been the one under deadline.',
    about: [
      'I’m a developer moving into penetration testing. I read source code, understand the frameworks underneath and write findings that a development team can act on.',
      'I have a degree in criminology and psychology, so I’m as interested in why systems get attacked as in how.',
    ],
    metaTitle: 'Penetration Tester',
    metaDescription:
      'eWPT and eJPT certified penetration tester with five years as a production full-stack engineer. Web application testing, recon and developer-friendly reporting.',
    crossLink: 'I’ve shipped production apps for five years',
    short: 'eWPT · eJPT. I test web apps with five years of build experience behind me.',
    cardKicker: 'For security teams',
    cardTitle: 'The pen tester',
    cardBody: 'eWPT, eJPT and web app testing, from someone who has built what you’re testing.',
  },
};

export const ROLES: Role[] = [
  {
    dates: '2023 — Now',
    title: 'Sole Developer',
    company: 'Multi-brand studio, London',
    summary: {
      engineer:
        'Rebuilt the customer ordering portal from Svelte to Next.js with a fresh Directus CMS. Automated fulfilment end to end through the DPD courier API, set up GitHub Actions CI/CD from scratch and recovered about 50% of server capacity through a full infrastructure audit.',
      security:
        'Sole owner of the whole attack surface: ordering flows, CMS, courier API integrations and the servers they run on. My infrastructure audit covered hardening as well as capacity.',
    },
    tags: ['Next.js', 'TypeScript', 'Directus', 'Docker', 'GitHub Actions', 'AWS'],
  },
  {
    dates: '2022 — 2023',
    title: 'Software Engineer',
    company: 'AreMedia, Sydney',
    summary: {
      engineer:
        'Built a Next.js magazine marketplace, a Keystone.js CMS and a React component library. Shipped an email capture app embedded across 13 sites via GTM, which grew collected emails by 86% in three months.',
      security:
        'Worked across a 13-site publishing estate with GTM-injected scripts, third-party ad tooling and a WordPress multisite migration, which is a realistic and wide supply-chain surface.',
    },
    tags: ['Next.js', 'Keystone.js', 'Vite', 'AWS', 'WordPress'],
  },
  {
    dates: '2021 — 2022',
    title: 'First Engineering Hire',
    company: 'RecycleSmart, Sydney',
    summary: {
      engineer:
        'Shipped across Rails, Flutter and React from day one. Led the migration to a cross-platform Flutter codebase and redesigned sign-up and booking for new product streams.',
      security:
        'Built sign-up and booking on web and mobile. Those are the auth and access-control edges where most real-world vulnerabilities live.',
    },
    tags: ['Rails', 'Flutter', 'React', 'PostgreSQL'],
  },
  {
    dates: '2021 — 2022',
    title: 'Contractor',
    company: 'Various, Sydney',
    summary: {
      engineer: 'Delivered the Match Days app and customised a Shopify storefront in Liquid.',
      security: 'Worked with e-commerce platforms and the risk that comes with their plugin ecosystems.',
    },
    tags: ['React Native', 'Shopify', 'Liquid'],
  },
];

export const CASES: CaseStudy[] = [
  {
    title: 'Ordering portal rebuild',
    built: 'Moved from Svelte to Next.js with a fresh Directus CMS and merged the shop pathways into one flow.',
    hardenedTitle: 'auth + order flows',
    hardened: 'Reviewed auth boundaries and CMS roles, and treated every endpoint as hostile input.',
  },
  {
    title: 'Infrastructure audit',
    metric: '~50%',
    built: 'Recovered about half the server capacity through a full infrastructure audit.',
    hardenedTitle: 'smaller attack surface',
    hardened: 'Removed unused services and standardised deploys behind GitHub Actions CI/CD.',
  },
  {
    title: 'Email capture, 13 sites',
    metric: '+86%',
    built: 'Built a Vite app on AWS and embedded it via GTM across AreMedia’s estate.',
    hardenedTitle: 'third-party script risk',
    hardened: 'When one script runs on 13 sites, a single mistake reaches all of them. I learned supply-chain risk on real traffic.',
  },
];

export const TOOLKIT: Record<Track, { group: string; items: string[] }[]> = {
  engineer: [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Ruby', 'PHP', 'Dart'] },
    { group: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Vue', 'Svelte', 'Rails', 'Flutter', 'React Native'] },
    { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'] },
    { group: 'Infra', items: ['Docker', 'GitHub Actions', 'AWS', 'Nginx', 'Directus', 'Keystone.js'] },
  ],
  security: [
    { group: 'Web testing', items: ['Burp Suite', 'OWASP ZAP', 'Sqlmap', 'WPScan'] },
    { group: 'Recon & network', items: ['Nmap', 'Wireshark', 'Metasploit', 'Kali Linux'] },
    { group: 'Credentials', items: ['Hashcat', 'John the Ripper'] },
    { group: 'Developer edge', items: ['Source review', 'TypeScript', 'Next.js', 'Rails', 'CI/CD'] },
  ],
};

export const METHOD = [
  { step: '01', title: 'Map it', label: 'Recon', body: 'Enumerate the attack surface: subdomains, endpoints, auth flows and the tech stack behind them.' },
  { step: '02', title: 'Prove it', label: 'Exploit', body: 'Manual testing aligned to the OWASP Top 10, run through Burp Suite. I chain issues together and don’t stop at scanner output.' },
  { step: '03', title: 'Fix it', label: 'Report', body: 'Write findings a developer can act on, with severity, reproduction steps and remediation in their own stack.' },
];

export const CERTS: Credential[] = [
  { badge: 'eWPT', title: 'Web Application Penetration Tester', issuer: 'INE Security' },
  { badge: 'eJPT', title: 'Junior Penetration Tester', issuer: 'INE Security' },
  { badge: 'CS50', title: 'Introduction to Cybersecurity', issuer: 'Harvard / edX' },
];

export const EDUCATION: Credential[] = [
  { badge: 'BSc', title: 'Criminology & Psychology (Hons, 2:1)', issuer: 'Sheffield Hallam University' },
  { badge: 'FS', title: 'Full-Stack Developer Bootcamp', issuer: 'Makers Academy, 2021' },
];
