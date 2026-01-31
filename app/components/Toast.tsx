'use client';

import { useEffect } from 'react';
import classNames from 'classnames';

interface ToastProps {
  message: string;
  show: boolean;
  onHide: () => void;
}

export default function Toast({ message, show, onHide }: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onHide, 3000);
    return () => clearTimeout(timer);
  }, [show, onHide]);

  return (
    <div
      className={classNames(
        'fixed bottom-6 right-6 rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-ivory shadow-lg transition',
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      {message}
    </div>
  );
}
