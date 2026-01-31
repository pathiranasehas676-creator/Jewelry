'use client';

import dynamic from 'next/dynamic';
import Modal from './Modal';

const ThreeDViewer = dynamic(() => import('./ThreeDViewer'), {
  ssr: false,
  loading: () => <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Loading 3D Viewer…</p>
});

interface ThreeDViewerModalProps {
  open: boolean;
  onClose: () => void;
  modelUrl: string;
}

export default function ThreeDViewerModal({ open, onClose, modelUrl }: ThreeDViewerModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="View in 3D">
      <ThreeDViewer modelUrl={modelUrl} />
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/50">
        Tip: Drag to rotate. Scroll to zoom. Use metal and lighting toggles for styling.
      </p>
    </Modal>
  );
}
