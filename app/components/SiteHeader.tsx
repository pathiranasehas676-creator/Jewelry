'use client';

import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

const navLinks = [
  { href: '/shop', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/policies', label: 'Policies' }
];

const suggestions = ['Solstice Ring', 'Orbit Necklace', 'Bridal Sets'];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-serif tracking-[0.3em] text-ink">
          AURA GEMS
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring text-ink/80 hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 text-sm uppercase tracking-[0.2em] lg:flex">
          <div className="relative">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="rounded-full border border-ivory/40 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em]"
            />
            {query && filtered.length > 0 ? (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-ivory/40 bg-white p-2 text-[10px] uppercase tracking-[0.2em] shadow-lg">
                {filtered.map((item) => (
                  <button key={item} className="block w-full text-left px-2 py-1 hover:text-gold">
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/wishlist" className="focus-ring">Wishlist</Link>
          <Link href="/cart" className="focus-ring">Cart (2)</Link>
          <Link href="/account" className="focus-ring">Account</Link>
        </div>
        <button
          className="focus-ring rounded-full border border-ink/20 px-3 py-2 text-xs uppercase tracking-[0.2em] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>
      <div
        className={classNames(
          'lg:hidden',
          open ? 'max-h-[360px] opacity-100' : 'max-h-0 opacity-0',
          'overflow-hidden border-t border-ivory/20 bg-ivory/95 transition-all'
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-6 text-sm uppercase tracking-[0.2em]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="rounded-full border border-ivory/40 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em]"
          />
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/wishlist" className="focus-ring" onClick={() => setOpen(false)}>
            Wishlist
          </Link>
          <Link href="/cart" className="focus-ring" onClick={() => setOpen(false)}>
            Cart
          </Link>
          <Link href="/account" className="focus-ring" onClick={() => setOpen(false)}>
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
