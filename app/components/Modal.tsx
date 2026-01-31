'use client';

import { ReactNode } from 'react';
import classNames from 'classnames';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  return (
    <div className={classNames('fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-6 transition', open ? 'opacity-100' : 'pointer-events-none opacity-0')}>
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl">{title}</h3>
          <button className="focus-ring text-xs uppercase tracking-[0.2em]" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
