import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, currentIndex, onClose, onNext, onPrev }) {
  const image = images?.[currentIndex];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center z-50"
          aria-label="Close lightbox"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl max-h-[85vh] w-full"
        >
          <img
            src={image.src}
            alt={image.alt || 'Gallery image'}
            className="w-full h-full object-contain max-h-[80vh] rounded shadow-2xl"
            loading="eager"
          />
          {image.caption && (
            <p className="text-center text-white/70 font-sans text-sm mt-3">
              {image.caption}
            </p>
          )}
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center z-50"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-sans text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
