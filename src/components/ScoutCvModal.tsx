import React from 'react';
import { X, Printer, Download, CheckCircle, Shield } from 'lucide-react';
import { PLAYER_IMAGES, TOURNAMENT_RECORDS } from '../data/playerData';

interface ScoutCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScoutCvModal: React.FC<ScoutCvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Action Bar (Hidden on print) */}
        <div className="no-print bg-[#0F172A] text-white px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-lg uppercase tracking-wider">
              Scouting CV Dossier (PDF Preview)
            </span>
            <span className="bg-[#10B981] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#00855d] hover:bg-[#006948] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Scout CV Content */}
        <div id="printable-scout-cv" className="overflow-y-auto p-6 sm:p-10 flex flex-col gap-6 text-[#1E293B]">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b-2 border-[#0F172A] gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest font-bold">
                WYSCOUT &amp; HUDL PROTOCOL · OFFICIAL PLAYER DOSSIER
              </span>
              <h1 className="font-headline-xl text-4xl sm:text-5xl text-[#0F172A] uppercase tracking-tight m-0">
                JAHNU BUREDDY
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="bg-[#ba0035] text-white text-xs font-bold px-2.5 py-0.5 rounded uppercase">
                  SAMURAI BANGALORE FC #11
                </span>
                <span className="bg-[#10B981]/15 text-[#047857] text-xs font-bold px-2.5 py-0.5 rounded uppercase">
                  FORWARD / WINGER
                </span>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-[#E2E8F0] sm:pl-6">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">
                Verification Registration
              </span>
              <span className="font-mono text-xs font-bold text-[#0F172A] block">
                KSFA #2024-KYL-8812
              </span>
              <span className="text-[11px] text-[#00855d] font-bold mt-1 inline-flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> AIFF Youth System
              </span>
            </div>
          </div>

          {/* Biometrics & Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 flex flex-col gap-3">
              <div className="relative aspect-[3/4] bg-[#F1F5F9] rounded-xl overflow-hidden border border-[#CBD5E1]">
                <img
                  src={PLAYER_IMAGES.registrationPassport}
                  alt="Jahnu Bureddy Official Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs text-white p-2 rounded text-[11px] flex justify-between items-center">
                  <span>DOB: Dec 2011</span>
                  <span className="text-[#10B981] font-bold">Verified</span>
                </div>
              </div>

              <div className="p-3 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Category:</span>
                  <span className="font-bold text-[#0F172A]">U-13 / U-14 Youth</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Location:</span>
                  <span className="font-bold text-[#0F172A]">Bangalore, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">State Affiliation:</span>
                  <span className="font-bold text-[#0F172A]">Karnataka (KSFA)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-4">
              <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff]">
                <h3 className="font-headline-sm text-base uppercase text-[#0F172A] font-bold">
                  Executive Athlete Profile
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] mt-1.5 leading-relaxed">
                  Jahnu Bureddy is a youth attacking prospect playing as Forward / Midfielder for Samurai Bangalore Football Club (SBFC). He has competed across three consecutive editions of the Karnataka Youth League sanctioned by the Karnataka State Football Association (KSFA). Characterized by high agility, rapid channel acceleration, press resistance, and selfless coachability.
                </p>
              </div>

              {/* Position Matrix */}
              <div>
                <h4 className="font-headline-sm text-sm uppercase text-[#0F172A] font-bold mb-2">
                  Positional Versatility
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-white p-2.5 rounded border-2 border-[#10B981] font-bold text-[#0F172A]">
                    <span className="block text-sm text-[#00855d]">RW</span>
                    <span className="text-[10px] text-[#64748B]">Primary Role</span>
                  </div>
                  <div className="bg-[#F1F5F9] p-2.5 rounded border border-[#E2E8F0] font-bold text-[#0F172A]">
                    <span className="block text-sm">LW</span>
                    <span className="text-[10px] text-[#64748B]">Inverted Flank</span>
                  </div>
                  <div className="bg-[#F1F5F9] p-2.5 rounded border border-[#E2E8F0] font-bold text-[#0F172A]">
                    <span className="block text-sm">CAM</span>
                    <span className="text-[10px] text-[#64748B]">Channel Linkup</span>
                  </div>
                  <div className="bg-[#F1F5F9] p-2.5 rounded border border-[#E2E8F0] font-bold text-[#0F172A]">
                    <span className="block text-sm">ST</span>
                    <span className="text-[10px] text-[#64748B]">Pressing 9</span>
                  </div>
                </div>
              </div>

              {/* Core Qualitative Attributes */}
              <div>
                <h4 className="font-headline-sm text-sm uppercase text-[#0F172A] font-bold mb-2">
                  Qualitative Skill Indexes
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-[#F1F5F9] rounded border border-[#E2E8F0]">
                    <div className="flex justify-between font-bold text-[#0F172A]">
                      <span>Ball Control &amp; First Touch</span>
                      <span className="text-[#047857]">75%</span>
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-0.5">Clean directional cushioning under pressure</span>
                  </div>
                  <div className="p-2.5 bg-[#F1F5F9] rounded border border-[#E2E8F0]">
                    <div className="flex justify-between font-bold text-[#0F172A]">
                      <span>Work Rate &amp; Stamina</span>
                      <span className="text-[#047857]">85%</span>
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-0.5">High counter-pressing dedication</span>
                  </div>
                  <div className="p-2.5 bg-[#F1F5F9] rounded border border-[#E2E8F0]">
                    <div className="flex justify-between font-bold text-[#0F172A]">
                      <span>Short Burst Acceleration</span>
                      <span className="text-[#047857]">80%</span>
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-0.5">Explosive initial 5m separation</span>
                  </div>
                  <div className="p-2.5 bg-[#F1F5F9] rounded border border-[#E2E8F0]">
                    <div className="flex justify-between font-bold text-[#0F172A]">
                      <span>Tactical Space Awareness</span>
                      <span className="text-[#047857]">80%</span>
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-0.5">Scans blindside channels proactively</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Log */}
          <div>
            <h4 className="font-headline-sm text-sm uppercase text-[#0F172A] font-bold mb-2">
              Official KSFA Tournament Participations (Verified Record)
            </h4>
            <div className="border border-[#E2E8F0] rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#F1F5F9] text-[#64748B] uppercase text-[10px]">
                  <tr>
                    <th className="p-2.5">Tournament</th>
                    <th className="p-2.5">Governing Body</th>
                    <th className="p-2.5">Representing Club</th>
                    <th className="p-2.5">Edition</th>
                    <th className="p-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {TOURNAMENT_RECORDS.map((t) => (
                    <tr key={t.id}>
                      <td className="p-2.5 font-bold text-[#0F172A]">{t.tournament}</td>
                      <td className="p-2.5 text-[#64748B]">{t.governingBody}</td>
                      <td className="p-2.5 font-semibold text-[#ba0035]">{t.club}</td>
                      <td className="p-2.5 font-bold">{t.edition}</td>
                      <td className="p-2.5 text-[#047857] font-bold">
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Safeguarding & Verification Footer */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#10B981]" />
              <span>FIFA &amp; AIFF Youth Safeguarding Compliant · Direct Enquiries to Samurai Bangalore FC Desk</span>
            </div>
            <span className="font-mono text-[10px]">Doc Hash: KYL-2024-JB11-AUDIT-OK</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="no-print p-4 bg-[#F8F9FF] border-t border-[#E2E8F0] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-[#0F172A] hover:bg-[#E2E8F0] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-[#00855d] hover:bg-[#006948] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
};
