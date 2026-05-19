export interface Credential {
  badge: string;
  title: string;
  issuer: string;
}

export const CERTS: Credential[] = [
  { badge: 'eWPT', title: 'Web Application Penetration Tester', issuer: 'INE Security' },
  { badge: 'eJPT', title: 'Junior Penetration Tester', issuer: 'INE Security' },
  { badge: 'CS50', title: 'Introduction to Cybersecurity', issuer: 'Harvard / edX' },
];

export const EDUCATION: Credential[] = [
  { badge: 'BSc', title: 'Criminology & Psychology (Hons, 2:1)', issuer: 'Sheffield Hallam University' },
  { badge: 'FS', title: 'Full-Stack Developer Bootcamp', issuer: 'Makers Academy, 2021' },
  { badge: 'PM', title: 'Project Management for Beginners', issuer: 'PMI, 2020' },
];
