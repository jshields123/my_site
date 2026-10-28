import { describe, expect, it } from 'vitest';
import { CASES, CERTS, PERSON, ROLES, TOOLKIT, TRACKS } from '../../content/profile';

describe('content', () => {
  it('frames every role for both tracks', () => {
    for (const r of ROLES) {
      expect(r.summary.engineer.length).toBeGreaterThan(20);
      expect(r.summary.security.length).toBeGreaterThan(20);
    }
  });

  it('has a toolkit and three-line headline for each track', () => {
    for (const t of Object.keys(TRACKS) as (keyof typeof TRACKS)[]) {
      expect(TOOLKIT[t].length).toBeGreaterThan(0);
      expect(TRACKS[t].headline).toHaveLength(3);
    }
  });

  it('uses https links and a valid email', () => {
    expect(PERSON.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
    for (const url of Object.values(PERSON.links)) expect(url).toMatch(/^https:\/\//);
  });

  it('has unique case and cert identifiers', () => {
    expect(new Set(CASES.map((c) => c.title)).size).toBe(CASES.length);
    expect(new Set(CERTS.map((c) => c.badge)).size).toBe(CERTS.length);
  });
});
