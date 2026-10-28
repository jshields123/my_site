'use client';

import { useEffect, useRef } from 'react';
import { TRACKS } from '@/content/profile';
import styles from './SplitHero.module.css';

const REST = 50;

export function SplitHero() {
  const root = useRef<HTMLElement>(null);
  const slider = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = root.current;
    const input = slider.current;
    if (!el || !input) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let target = REST;
    let current = REST;
    let dragging = false;
    let frame = 0;

    // Set via CSSOM (not a style attribute) so the strict CSP never needs 'unsafe-inline'.
    const paint = () => {
      current += (target - current) * (reduce ? 1 : 0.1);
      el.style.setProperty('--split', `${current.toFixed(2)}%`);
      if (Math.abs(target - current) > 0.05) frame = requestAnimationFrame(paint);
      else frame = 0;
    };
    const go = (value: number) => {
      target = Math.max(4, Math.min(96, value));
      input.value = String(Math.round(target));
      const lead = target >= REST ? 'build' : 'break';
      el.dataset.lead = lead;
      input.setAttribute('aria-valuetext', `${lead === 'build' ? 'Builder' : 'Breaker'} leads, ${Math.round(target)}%`);
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const fromPointer = (e: PointerEvent) => {
      const box = el.getBoundingClientRect();
      go(((e.clientX - box.left) / box.width) * 100);
    };

    const onMove = (e: PointerEvent) => { if (e.pointerType === 'mouse' || dragging) fromPointer(e); };
    const onDown = (e: PointerEvent) => { dragging = true; fromPointer(e); };
    const onUp = () => { dragging = false; };
    const onLeave = (e: PointerEvent) => { if (e.pointerType === 'mouse') go(REST); };
    const onInput = () => go(Number(input.value));

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    input.addEventListener('input', onInput);
    go(REST);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      input.removeEventListener('input', onInput);
    };
  }, []);

  return (
    <section ref={root} className={styles.hero} data-lead="build">
      <h1 className="sr-only">Jack Shields: I build the web, and I break it.</h1>

      <div className={`${styles.side} ${styles.build}`} aria-hidden="true">
        <div className={styles.top}><span>{TRACKS.engineer.role}</span></div>
        <p className={styles.title}>I <em>build</em><br />the web</p>
        <div className={styles.foot}><p>{TRACKS.engineer.short}</p><span>( 01 / Builder )</span></div>
      </div>

      <div className={`${styles.side} ${styles.break}`} aria-hidden="true">
        <div className={styles.scan} />
        <div className={`${styles.top} ${styles.topRight}`}><span>{TRACKS.security.role}</span></div>
        <p className={styles.title}>I <em>break</em><br />the web</p>
        <div className={styles.foot}><span>( 02 / Breaker )</span><p>{TRACKS.security.short}</p></div>
      </div>

      <div className={styles.handle} aria-hidden="true"><span>⟷</span></div>
      <label className={styles.range}>
        <span className="sr-only">Balance between builder and breaker</span>
        <input ref={slider} type="range" min={4} max={96} defaultValue={REST} aria-valuetext="Builder leads, 50%" />
      </label>
      <p className={styles.hint} aria-hidden="true">drag · or move your cursor</p>
    </section>
  );
}
