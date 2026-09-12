import React from 'react';
import { Shield, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenCertificateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollTo,
  onOpenCertificateModal
}) => {
  return (
    <footer className="w-full bg-[#eff4ff] border-t border-[#E2E8F0] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-headline-sm text-2xl tracking-wide text-[#0F172A] uppercase font-bold">
                JAHNU BUREDDY
              </span>
              <span className="font-label-sm text-[11px] bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30 px-3 py-0.5 rounded-full uppercase tracking-wider font-bold">
                KSFA Registered Youth Player
              </span>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-[#64748B] max-w-xl">
              Official player performance dossier and scouting record verified for club academy recruitment, technical directors, and federations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCertificateModal}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-xs border border-[#E2E8F0] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#00855d]" />
              <span className="font-label-sm text-xs text-[#0b1c30] uppercase font-bold">
                KSFA Certified
              </span>
            </button>

            <button
              onClick={() => onScrollTo('contact-scouting-enquiry')}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-xs border border-[#E2E8F0] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              <Shield className="w-4 h-4 text-[#ba0035]" />
              <span className="font-label-sm text-xs text-[#0b1c30] uppercase font-bold">
                AIFF Safeguarding
              </span>
            </button>

            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-xs border border-[#E2E8F0]">
              <span className="font-bold text-[#ba0035] text-xs">#11</span>
              <span className="font-label-sm text-xs text-[#0b1c30] uppercase font-bold">
                Samurai Bangalore FC
              </span>
            </div>
          </div>
        </div>

        {/* Safeguarding Legal Box */}
        <div className="bg-[#d3e4fe]/40 border border-[#d3e4fe] p-4 rounded-lg flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <div className="flex items-start gap-2.5">
            <HeartHandshake className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
            <p className="font-body-sm text-xs text-[#3d4a42] leading-relaxed">
              Safeguarding &amp; Fair Representation Notice: Player records, physical diagnostics, and developmental metrics comply with FIFA and AIFF Youth Player Protection Protocols. Authorized scouting inquiries only.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#64748B] font-body-sm text-xs border-t border-[#E2E8F0] pt-6">
          <p>© 2024 Jahnu Bureddy Portfolio. Represented by Samurai Bangalore FC. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <button
              onClick={() => onScrollTo('scouting-profile')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Scouting Policy
            </button>
            <button
              onClick={() => onScrollTo('contact-scouting-enquiry')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Agent &amp; Guardian Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
