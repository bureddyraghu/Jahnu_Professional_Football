import React from 'react';
import { HIGHLIGHT_CLIPS } from '../data/playerData';
import { PlayCircle, Video, Lock, Unlock, Film } from 'lucide-react';

interface HighlightsSectionProps {
  onOpenVideoModal: (clipId?: string) => void;
  onScrollToContact: () => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  onOpenVideoModal,
  onScrollToContact
}) => {
  return (
    <section id="highlights" className="w-full py-12 sm:py-16 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></span>
              <span className="font-label-sm text-[#E11D48] uppercase tracking-widest font-bold text-xs">
                Section 05 // Video Scouting Footage
              </span>
            </div>
            <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
              MEDIA PORTFOLIO &amp; REELS
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#E2E8F0] text-[#64748B] font-label-sm text-xs self-start">
            <Video className="w-4 h-4 text-[#E11D48]" />
            <span className="font-bold text-[#0F172A]">Broadcast High-Definition Feeds</span>
          </div>
        </div>

        {/* Clean Highlight Card */}
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <button
            onClick={() => onOpenVideoModal(HIGHLIGHT_CLIPS[0].id)}
            className="w-20 h-20 rounded-full bg-[#E11D48]/10 hover:bg-[#E11D48]/20 flex items-center justify-center mb-4 text-[#E11D48] transition-all transform hover:scale-105 cursor-pointer group"
            aria-label="Play video footage preview"
          >
            <PlayCircle className="w-12 h-12 fill-[#E11D48] text-white group-hover:scale-110 transition-transform" />
          </button>

          <span className="font-label-sm text-xs text-[#E11D48] uppercase tracking-widest font-bold">
            Verification &amp; Ingestion Underway
          </span>

          <h3 className="font-headline-md text-2xl sm:text-3xl text-[#0F172A] uppercase mt-2 max-w-xl font-bold">
            Match Footage &amp; Skill Reels Being Processed
          </h3>

          <p className="font-body-default text-sm sm:text-base text-[#64748B] max-w-lg mt-2 leading-relaxed">
            Authorized tournament clips, dribbling reels, tactical camera angles, and video assessment packages will be streamed upon direct club verification and guardian approval.
          </p>

          {/* Interactive Clip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-3xl mt-8">
            {HIGHLIGHT_CLIPS.map((clip) => (
              <div
                key={clip.id}
                onClick={() => onOpenVideoModal(clip.id)}
                className="bg-[#F1F5F9] hover:bg-[#e2e8f0] p-4 rounded-xl border border-[#E2E8F0] flex flex-col items-start text-left cursor-pointer transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-[#64748B] border border-[#CBD5E1]">
                    {clip.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[#E11D48] font-bold uppercase">
                    <Lock className="w-3 h-3" /> Protected
                  </span>
                </div>
                <h4 className="font-headline-sm text-sm uppercase text-[#0F172A] font-bold">
                  {clip.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  {clip.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#00855d]">
                  <Film className="w-3.5 h-3.5" />
                  <span>Preview Tactical Breakdown</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={onScrollToContact}
              className="inline-flex items-center gap-2 bg-[#00855d] hover:bg-[#006948] text-white px-6 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-wider transition-all shadow-sm font-bold cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>Request Verified Video Access</span>
            </button>
            <button
              onClick={() => onOpenVideoModal()}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F1F5F9] text-[#0F172A] px-5 py-2.5 rounded-lg font-label-md text-xs uppercase tracking-wider transition-all border border-[#E2E8F0] font-bold cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-[#E11D48]" />
              <span>Launch Tactical Viewer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
