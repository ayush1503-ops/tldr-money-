import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[var(--color-bg-base)] rounded-[36px] shadow-[var(--shadow-neo-base)] p-8 z-10 border border-white/40"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-inset)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[var(--color-fg-primary)] mb-2">
                Join the TLDR Money waitlist
              </h2>
              <p className="text-sm text-[var(--color-fg-muted)]">
                Get early beta access to automatic transaction tracking & net-worth dashboard.
              </p>
            </div>

            <WaitlistForm id="modal-waitlist" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
