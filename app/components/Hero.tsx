'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll('[data-float]');
    const tl = gsap.timeline({ defaults: { ease: 'sine.inOut', duration: 8, repeat: -1, yoyo: true } });
    elements.forEach((el, index) => {
      tl.to(el, { y: -12 - index * 4, x: index % 2 === 0 ? 8 : -8 }, 0);
    });

    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 12;
      const y = (event.clientY / innerHeight - 0.5) * 12;
      gsap.to(elements, { x, y, duration: 1.6, overwrite: 'auto' });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,166,106,0.18),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">AURA GEMS 2026</p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Gravity-defying brilliance for the modern collector.
          </h1>
          <p className="text-base text-ivory/80">
            Discover sculpted heirlooms crafted in ethical gold, luminous stones, and purposeful design. Every piece
            arrives certified, insured, and ready to shine.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="focus-ring rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Shop Now
            </Link>
            <Link href="/about" className="focus-ring rounded-full border border-ivory/40 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              Our Craft
            </Link>
          </div>
        </div>
        <div className="relative mx-auto h-[320px] w-full max-w-md">
          {['/images/hero-ring.png', '/images/hero-necklace.png', '/images/hero-earring.png'].map((src, index) => (
            <div
              key={src}
              data-float
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/10 bg-ivory/5 shadow-glow backdrop-blur"
              style={{ transform: `translate(-50%, -50%) translateY(${index * -14}px) translateX(${index * 18}px)` }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-ivory/70">{['Ring', 'Necklace', 'Earring'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
