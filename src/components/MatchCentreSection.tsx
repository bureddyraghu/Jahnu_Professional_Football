import React from 'react';
import { COMPETITION_STATS, TOURNAMENT_RECORDS } from '../data/playerData';
import { Shield, Clock, CheckCircle2, FileText } from 'lucide-react';

interface MatchCentreSectionProps {
  onOpenCertificateModal: (edition?: string) => void;
}

export const MatchCentreSection: React.FC<MatchCentreSectionProps> = ({
  onOpenCertificateModal
}) => {
  return (
    <section id="match-centre" className="w-full py-12 sm:py-16 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="font-label-sm text-[#00855d] uppercase tracking-widest font-bold text-xs">
                Section 03 // Official Competition Record
              </span>
            </div>
            <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
              MATCH CENTRE &amp; TOURNAMENT AUDIT
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#E2E8F0] self-start">
            <Shield className="w-4 h-4 text-[#E11D48]" />
            <span className="font-label-sm text-xs text-[#0F172A] uppercase tracking-wider font-bold">
              Karnataka State Football Association (KSFA)
            </span>
          </div>
        </div>

        {/* Factual Zero-Fabrication Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COMPETITION_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white p-5 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="font-label-sm text-[11px] text-[#64748B] uppercase tracking-wider font-bold">
                {stat.label}
              </span>
              <div className="py-2 flex flex-col">
                <span
                  className={`font-stat-display text-3xl sm:text-4xl leading-none font-bold ${
                    stat.highlightColor || 'text-[#0F172A]'
                  }`}
                >
                  {stat.value}
                </span>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[#64748B] font-body-sm text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{stat.auditNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Tournament Record Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden">
          <div className="p-4 sm:p-5 bg-[#F8F9FF] border-b border-[#E2E8F0] flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#10B981]" />
              <span className="font-headline-sm text-lg text-[#0F172A] uppercase font-bold tracking-wide">
                COMPETITIVE TOURNAMENT LOG
              </span>
            </div>
            <span className="font-label-sm text-xs text-[#047857] uppercase font-bold bg-[#10B981]/15 border border-[#10B981]/30 px-3.5 py-1 rounded-full w-fit">
              All Records Confirmed with Samurai Bangalore FC
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-default text-sm">
              <thead className="bg-[#F1F5F9] text-[#64748B] font-label-sm text-xs uppercase tracking-wider border-b border-[#E2E8F0]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Tournament</th>
                  <th className="py-3.5 px-4 sm:px-6">Governing Body</th>
                  <th className="py-3.5 px-4 sm:px-6">Representing Club</th>
                  <th className="py-3.5 px-4 sm:px-6">Tournament Edition</th>
                  <th className="py-3.5 px-4 sm:px-6">Participation Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="text-[#0F172A] divide-y divide-[#E2E8F0]">
                {TOURNAMENT_RECORDS.map((rec, i) => (
                  <tr
                    key={rec.id}
                    className={`hover:bg-[#F8F9FF] transition-colors cursor-pointer ${
                      i % 2 === 1 ? 'bg-[#F1F5F9]/30' : ''
                    }`}
                    onClick={() => onOpenCertificateModal(rec.edition)}
                  >
                    <td className="py-4 px-4 sm:px-6 font-semibold flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                      <span>{rec.tournament}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#64748B] text-xs sm:text-sm">
                      {rec.governingBody}
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="bg-[#ba0035]/10 text-[#ba0035] border border-[#ba0035]/20 px-2.5 py-0.5 rounded font-label-sm text-xs font-bold uppercase">
                        {rec.club}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-label-md text-xs font-bold text-[#0F172A]">
                      {rec.edition}
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1.5 bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30 px-3 py-1 rounded-full font-label-sm text-xs uppercase font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {rec.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenCertificateModal(rec.edition);
                        }}
                        className="inline-flex items-center gap-1 text-xs text-[#00855d] font-semibold hover:underline cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Audit Sheet</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
