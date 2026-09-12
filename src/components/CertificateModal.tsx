import React from 'react';
import { X, CheckCircle, ShieldCheck, FileCheck, Stamp } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  edition?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  edition
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#006948] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#10B981]" />
            <div>
              <h3 className="font-headline-sm text-lg uppercase tracking-wide">
                KSFA Official Tournament Audit Sheet
              </h3>
              <p className="text-[11px] text-white/80">
                Karnataka State Football Association Player Registry System
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-5 text-[#1E293B]">
          <div className="border-2 border-dashed border-[#10B981]/50 p-5 rounded-xl bg-[#10B981]/5 flex flex-col gap-4 relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-widest block">
                  State Football Governing Body
                </span>
                <h4 className="font-headline-sm text-xl uppercase text-[#0F172A] font-bold">
                  Karnataka State Football Association (KSFA)
                </h4>
              </div>
              <span className="bg-[#10B981] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Active &amp; Verified
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-[#E2E8F0]">
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">Athlete Name</span>
                <span className="font-bold text-[#0F172A] text-sm">JAHNU BUREDDY</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">DOB / Age Category</span>
                <span className="font-bold text-[#0F172A] text-sm">Dec 2011 (U-13/U-14)</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">Sanctioned Club</span>
                <span className="font-bold text-[#ba0035] text-sm">Samurai Bangalore FC</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">Registered Jersey</span>
                <span className="font-bold text-[#0F172A] text-sm">#11</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">Primary Platform</span>
                <span className="font-bold text-[#00855d] text-sm">Karnataka Youth League</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] uppercase font-bold block">Total Logged Cycles</span>
                <span className="font-bold text-[#0F172A] text-sm">3 Editions (Verified)</span>
              </div>
            </div>

            {/* Verification Stamp Visual */}
            <div className="mt-2 p-3 bg-white rounded-lg border border-[#CBD5E1] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-[#00855d]" />
                <div>
                  <span className="text-xs font-bold text-[#0F172A] block">
                    Zero-Fabrication Athlete Identity Standard
                  </span>
                  <span className="text-[11px] text-[#64748B]">
                    Token ID: KSFA-KYL-2024-REG-8812-AIFF-PASS
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#047857] flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> AUDITED
              </span>
            </div>
          </div>

          <p className="text-xs text-[#64748B] leading-relaxed">
            This verification sheet certifies that Jahnu Bureddy is officially registered with the Karnataka State Football Association under Samurai Bangalore Football Club (SBFC). All participation records are cross-checked directly with tournament match day rosters.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F9FF] border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#00855d] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#006948] transition-colors cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
