import React from 'react';
import { Download, PlayCircle, ArrowDown, Shield, CheckCircle } from 'lucide-react';
import { PLAYER_IMAGES } from '../data/playerData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
  onOpenVideoModal: (clipId?: string) => void;
  onScrollTo: (id: string) => void;
  onSelectPhoto: (imageUrl: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCvModal,
  onOpenVideoModal,
  onScrollTo,
  onSelectPhoto,
}) => {
  return (
    <section id="overview" className="relative w-full overflow-hidden pb-12 sm:pb-16 pt-4">
      {/* Pitch ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E11D48]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Meta Breadcrumb / Protocol Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-6">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-[#E2E8F0]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="font-label-sm text-[#0F172A] tracking-widest uppercase font-bold text-[11px]">
              Official Scouting &amp; Player Portal
            </span>
            <span className="text-[#64748B] text-xs">·</span>
            <span className="font-label-sm text-[#00855d] uppercase font-bold text-[11px]">
              Wyscout / Hudl Protocol
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#eff4ff] px-3.5 py-1.5 rounded-full text-[#64748B] font-label-sm text-xs border border-[#dce9ff]">
            <CheckCircle className="w-4 h-4 text-[#047857]" />
            <span className="font-semibold text-[#0b1c30]">Verified Youth Dossier · KSFA #2024-KYL</span>
          </div>
        </div>

        {/* Main Hero 60/40 Bento Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left 7 Cols: Athlete Identity & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Club & Number Pill Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#ba0035] text-white font-label-md text-xs px-3 py-1 rounded-lg uppercase tracking-wider font-bold shadow-sm">
                SAMURAI BANGALORE FC
              </span>
              <span className="bg-[#e5eeff] text-[#0F172A] font-label-md text-xs px-3 py-1 rounded-lg font-bold border border-[#d3e4fe]">
                JERSEY #11
              </span>
              <span className="bg-[#10B981]/15 text-[#047857] font-label-md text-xs px-3 py-1 rounded-lg font-bold uppercase border border-[#10B981]/30">
                FORWARD / MIDFIELDER
              </span>
            </div>

            {/* Hero Display Name */}
            <div className="flex flex-col">
              <h1 className="font-headline-xl text-[#0F172A] uppercase tracking-tight m-0 select-none">
                JAHNU BUREDDY
              </h1>
              <p className="font-label-lg text-[#E11D48] tracking-wider uppercase mt-1 font-bold">
                SAMURAI BANGALORE FC · #11 · FORWARD / MIDFIELDER
              </p>
            </div>

            {/* Highlight Callout Box */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-1 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10B981]"></div>
              <div className="pl-2">
                <span className="font-headline-sm text-xl text-[#0F172A] uppercase tracking-wide">
                  THE JOURNEY IS JUST BEGINNING
                </span>
                <p className="font-label-md text-xs text-[#64748B] uppercase tracking-widest mt-0.5 font-bold">
                  PLAY · LEARN · COMPETE · EVOLVE
                </p>
              </div>
              <p className="font-body-default text-[#1E293B] mt-2 pl-2 text-sm sm:text-base leading-relaxed">
                Direct-entry attacking prospect with three seasons of competitive exposure in the prestigious Karnataka State Football Association (KSFA) Youth League. High coachability index, dual-flank dynamism, and natural spatial awareness.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-cv-btn"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 bg-[#00855d] hover:bg-[#006948] text-white px-5 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer font-bold"
              >
                <Download className="w-4 h-4" />
                <span>Download Scout CV (PDF)</span>
              </button>

              <button
                id="hero-watch-clips-btn"
                onClick={() => onOpenVideoModal()}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F1F5F9] text-[#0F172A] px-5 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-wider shadow-sm border border-[#E2E8F0] transition-all active:scale-95 cursor-pointer font-bold"
              >
                <PlayCircle className="w-5 h-5 text-[#E11D48]" />
                <span>Watch Match Clips</span>
              </button>

              <button
                id="hero-view-attributes-btn"
                onClick={() => onScrollTo('scouting-profile')}
                className="inline-flex items-center justify-center gap-1.5 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#1E293B] px-4 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold border border-[#d3e4fe]"
              >
                <span>View Attributes</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Visual Cards Mosaic */}
          <div className="lg:col-span-5 relative flex flex-col gap-4">
            {/* Primary Action Photo Card */}
            <div
              onClick={() =>
                onSelectPhoto(
                  PLAYER_IMAGES.matchAction,
                  'Jahnu Bureddy (#11) in official KSFA Karnataka Youth League match action'
                )
              }
              className="relative bg-white p-1 rounded-xl shadow-md border border-[#E2E8F0] overflow-hidden group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/11] sm:aspect-[3/2] rounded-lg overflow-hidden bg-[#F1F5F9]">
                <img
                  alt="Dynamic in-match sports photography of Jahnu Bureddy dribbling soccer ball in KSFA Youth League (Match file: DSC_5114)"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={PLAYER_IMAGES.matchAction}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Match Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]"></span>
                    <span className="font-label-sm text-[#0F172A] uppercase text-[11px] font-bold">
                      In Action: KSFA Karnataka Youth League
                    </span>
                  </div>
                  <span className="font-headline-sm text-white drop-shadow text-2xl">#11</span>
                </div>
              </div>
            </div>

            {/* Secondary Overlapping Identity Passport Card */}
            <div
              onClick={() =>
                onSelectPhoto(
                  PLAYER_IMAGES.registrationPassport,
                  'Official AIFF & KSFA Youth Player Registration Passport Card'
                )
              }
              className="bg-white p-3 rounded-xl shadow-md border border-[#E2E8F0] flex items-center gap-4 lg:-mt-8 lg:ml-6 relative z-10 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-[#F1F5F9] shrink-0 border border-[#CBD5E1]">
                <img
                  alt="Jahnu Bureddy Official Registration Portrait"
                  className="w-full h-full object-cover"
                  src={PLAYER_IMAGES.registrationPassport}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 text-[#047857]">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span className="font-label-sm text-[10px] text-[#047857] uppercase tracking-wider font-bold">
                    Official Player Registration
                  </span>
                </div>
                <p className="font-headline-sm text-[#0F172A] uppercase tracking-wide truncate text-xl mt-0.5">
                  JAHNU BUREDDY
                </p>
                <div className="flex items-center gap-2 text-[#64748B] font-body-sm text-xs mt-0.5">
                  <span className="font-semibold text-[#0F172A]">DOB: Dec 2011</span>
                  <span>•</span>
                  <span className="text-[#00855d] font-bold">AIFF Reg. Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Frequency Matchday Stats Strip */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-4 sm:p-5 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          <div className="flex flex-col gap-0.5">
            <span className="font-label-sm text-[11px] text-[#64748B] uppercase tracking-wider font-bold">
              Born / DOB
            </span>
            <span className="font-headline-sm text-[#0F172A] uppercase text-xl">
              DECEMBER 2011
            </span>
            <span className="font-body-sm text-xs text-[#10B981] font-semibold">
              Youth Category (U-13/U-14)
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-label-sm text-[11px] text-[#64748B] uppercase tracking-wider font-bold">
              Current Club
            </span>
            <span className="font-headline-sm text-[#E11D48] uppercase text-xl">
              SAMURAI BANGALORE FC
            </span>
            <span className="font-body-sm text-xs text-[#64748B]">
              Squad Number #11
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-label-sm text-[11px] text-[#64748B] uppercase tracking-wider font-bold">
              Primary Role
            </span>
            <span className="font-headline-sm text-[#0F172A] uppercase text-xl">
              FORWARD / WINGER
            </span>
            <span className="font-body-sm text-xs text-[#64748B]">
              Attacking Midfield Option
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-label-sm text-[11px] text-[#64748B] uppercase tracking-wider font-bold">
              Base City
            </span>
            <span className="font-headline-sm text-[#0F172A] uppercase text-xl">
              BANGALORE, INDIA
            </span>
            <span className="font-body-sm text-xs text-[#64748B]">
              Karnataka State
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-0.5 bg-[#F1F5F9] p-3 rounded-lg border border-[#E2E8F0]">
            <span className="font-label-sm text-[10px] text-[#047857] uppercase tracking-wider flex items-center gap-1 font-bold">
              <Shield className="w-3.5 h-3.5 text-[#10B981]" /> KSFA League
            </span>
            <span className="font-headline-sm text-[#0F172A] uppercase text-xl">
              3 EDITIONS
            </span>
            <span className="font-body-sm text-xs text-[#64748B]">
              State Youth Record
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
