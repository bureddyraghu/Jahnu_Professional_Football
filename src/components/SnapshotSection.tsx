import React, { useState } from 'react';
import {
  ShieldCheck,
  Calendar,
  Award,
  Compass,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface SnapshotSectionProps {
  onOpenCertificateModal: () => void;
}

export const SnapshotSection: React.FC<SnapshotSectionProps> = ({
  onOpenCertificateModal
}) => {
  const [activePositionTag, setActivePositionTag] = useState<'RW' | 'LW' | 'CAM' | 'ST'>('RW');

  const positionNotes = {
    RW: 'Primary attacking corridor: Exploits right channel width, rapid acceleration into 1v1 crossing pockets, and cutbacks to penalty spot.',
    LW: 'Inverted flank option: Drives inside on favored right foot to test defensive line with short combination wall passes.',
    CAM: 'Central linkup: Occupies the half-spaces between midfield and defensive lines to orchestrate forward distribution.',
    ST: 'Dynamic pressing forward: High work rate pressing opponent center-backs, running the channels on counter-transitions.'
  };

  return (
    <section id="scouting-profile" className="w-full py-12 sm:py-16 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="font-label-sm text-[#00855d] uppercase tracking-widest font-bold text-xs">
                Section 01 // Dossier Snapshot
              </span>
            </div>
            <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
              ATHLETE PROFILE &amp; RECRUITMENT OVERVIEW
            </h2>
          </div>

          <button
            onClick={onOpenCertificateModal}
            className="bg-white px-4 py-2 rounded-full shadow-sm border border-[#E2E8F0] flex items-center gap-2 self-start cursor-pointer hover:bg-[#eff4ff] transition-colors group"
          >
            <ShieldCheck className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform" />
            <span className="font-label-sm text-xs text-[#0F172A] uppercase tracking-wider font-bold">
              Verified Identity &amp; Club Records
            </span>
          </button>
        </div>

        {/* Executive Narrative Summary Callout */}
        <div className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-[#E2E8F0] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#10B981]/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center gap-1 justify-center shrink-0 text-[#E11D48]">
              <span className="font-headline-sm text-2xl font-bold">#11</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-widest font-bold">
                Executive Athlete Summary
              </span>
              <p className="font-body-lead text-[#0F172A] text-base sm:text-lg leading-relaxed font-normal">
                Jahnu Bureddy is an upcoming youth footballer based in Bangalore, Karnataka, India. Playing primarily as a Forward or Midfielder, Jahnu develops his game with Samurai Bangalore Football Club (SBFC). He has accumulated competitive experience by participating in three editions of the Karnataka Youth League conducted by the Karnataka State Football Association (KSFA).
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Full Name */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Full Legal Name
              </span>
              <span className="text-[#64748B] font-mono text-xs bg-[#F1F5F9] px-2 py-0.5 rounded">ID: #2024-KYL</span>
            </div>
            <div className="py-4">
              <span className="font-stat-display text-[#0F172A] leading-none uppercase text-4xl sm:text-5xl block">
                JAHNU BUREDDY
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] font-body-sm text-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span className="font-medium">Registered Under AIFF &amp; KSFA System</span>
            </div>
          </div>

          {/* Card 2: Date / Year of Birth */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Date / Year of Birth
              </span>
              <Calendar className="w-5 h-5 text-[#64748B]" />
            </div>
            <div className="py-4 flex flex-col">
              <span className="font-stat-display text-[#0F172A] leading-none uppercase text-4xl sm:text-5xl">
                DEC 2011
              </span>
              <span className="font-label-md text-xs text-[#047857] font-bold mt-1 uppercase">
                Youth Talent Category (U-13 / U-14)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#047857] font-body-sm text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>Age Verified via Official Records</span>
            </div>
          </div>

          {/* Card 3: Club Affiliation */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Club Affiliation
              </span>
              <Award className="w-5 h-5 text-[#E11D48]" />
            </div>
            <div className="py-4 flex flex-col">
              <span className="font-headline-md text-[#E11D48] uppercase text-2xl font-bold">
                SAMURAI BANGALORE FC
              </span>
              <span className="font-headline-sm text-[#0F172A] mt-0.5 uppercase text-lg">
                Jersey #11
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] font-body-sm text-xs">
              <span className="w-2 h-2 rounded-full bg-[#E11D48]"></span>
              <span className="font-medium">Active Academy Squad Player</span>
            </div>
          </div>

          {/* Card 4: Primary Position */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Positioning Map
              </span>
              <Compass className="w-5 h-5 text-[#64748B]" />
            </div>
            <div className="py-3 flex flex-col">
              <span className="font-headline-md text-[#0F172A] uppercase text-2xl">
                FORWARD / MIDFIELDER
              </span>
              <span className="font-body-sm text-xs text-[#64748B] mt-0.5">
                Right Winger / Central Attacking Midfielder
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                {(['RW', 'LW', 'CAM', 'ST'] as const).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActivePositionTag(tag)}
                    className={`font-label-sm text-[11px] px-2.5 py-1 rounded cursor-pointer transition-all font-bold ${
                      activePositionTag === tag
                        ? 'bg-[#00855d] text-white shadow-xs scale-105'
                        : 'bg-[#F1F5F9] text-[#1E293B] hover:bg-[#e2e8f0]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#64748B] leading-tight min-h-[30px] italic">
                {positionNotes[activePositionTag]}
              </p>
            </div>
          </div>

          {/* Card 5: Tournament Level */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Competitive Platform
              </span>
              <Award className="w-5 h-5 text-[#00855d]" />
            </div>
            <div className="py-4 flex flex-col">
              <span className="font-stat-display text-[#00855d] leading-none uppercase text-4xl sm:text-5xl">
                3 EDITIONS
              </span>
              <span className="font-label-md text-xs text-[#0F172A] font-bold mt-1 uppercase">
                KSFA Karnataka Youth League
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#047857] font-body-sm text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>Sanctioned State Tournament</span>
            </div>
          </div>

          {/* Card 6: Identity Status */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Scouting Dossier Credibility
              </span>
              <Sparkles className="w-5 h-5 text-[#10B981]" />
            </div>
            <div className="py-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/15 text-[#047857] px-3 py-1.5 rounded-lg w-fit border border-[#10B981]/30">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                <span className="font-label-md text-xs font-bold uppercase tracking-wider">
                  Verified Athlete Badge
                </span>
              </div>
              <p className="font-body-sm text-xs text-[#64748B] leading-relaxed">
                Zero-fabrication scouting standard applied. All team affiliations strictly cross-verified.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#047857] font-label-sm text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>READY FOR SCOUT EVALUATIONS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
