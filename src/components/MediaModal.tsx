import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaType: 'image' | 'video';
  src: string;
  title: string;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  src,
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal overlay"
      ></div>

      <div className="relative z-10 w-full max-w-4xl bg-[#14181f] rounded-2xl border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-white/10 flex items-center justify-between bg-[#1a202c]">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e84d58] flex-shrink-0"></span>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              title="Open raw asset in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Media Body */}
        <div className="p-2 sm:p-4 overflow-auto flex-1 flex items-center justify-center bg-black/60">
          <img
            src={src}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-4 py-2 border-t border-white/5 bg-[#12161f] text-center">
          <p className="text-[10px] sm:text-[11px] text-gray-400">
            أصل معتمد محلياً من ملفات المشروع | Verified Local Project Asset
          </p>
        </div>
      </div>
    </div>
  );
};
