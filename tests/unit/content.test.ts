import { describe, expect, it } from 'vitest';
import { CASES, CASE_ORDER, CERTS, PERSON, ROLES, TOOLKIT, TRACKS } from '../../content/profile';

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

  it('only orders case studies that exist, and gives every security panel a title', () => {
    const ids = new Set(CASES.map((c) => c.id));
    for (const list of Object.values(CASE_ORDER)) for (const id of list) expect(ids.has(id), id).toBe(true);
    for (const c of CASES) expect(Boolean(c.hardened)).toBe(Boolean(c.hardenedTitle));
  });

  it('has unique case and cert identifiers', () => {
    expect(new Set(CASES.map((c) => c.id)).size).toBe(CASES.length);
    expect(new Set(CERTS.map((c) => c.badge)).size).toBe(CERTS.length);
  });
});
