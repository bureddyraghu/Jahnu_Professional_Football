import React from 'react';
import { X, Shield } from 'lucide-react';

interface PhotoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#0F172A] text-white w-full max-w-3xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#10B981]" />
            <span className="font-headline-sm text-sm uppercase tracking-wider text-gray-200">
              Verified Photography Archive
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 max-h-[75vh]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-4 bg-[#0b1c30] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <span className="text-xs text-[#10B981] font-mono">
              KSFA Karnataka Youth League · Samurai Bangalore FC #11
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer self-end sm:self-auto"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
