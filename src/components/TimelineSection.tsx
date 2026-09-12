import React from 'react';
import { TIMELINE_MILESTONES } from '../data/playerData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
            <span className="font-label-sm text-[#00855d] uppercase tracking-widest font-bold text-xs">
              Section 04 // Career Milestones
            </span>
          </div>
          <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
            FOOTBALL JOURNEY &amp; PROGRESSION
          </h2>
          <p className="font-body-default text-[#64748B] text-sm sm:text-base leading-relaxed">
            Structured grassroots advancement from early Bangalore community football to regular state-level youth league competitions.
          </p>
        </div>

        {/* Modern Light Vertical Timeline */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:left-3 md:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E2E8F0]">
          {TIMELINE_MILESTONES.map((milestone) => {
            let markerBg = 'bg-[#10B981]';
            let dateColor = 'text-[#00855d]';
            let badgeBg = 'bg-[#F1F5F9] text-[#64748B]';

            if (milestone.markerColor === 'crimson') {
              markerBg = 'bg-[#E11D48]';
              dateColor = 'text-[#E11D48]';
            } else if (milestone.markerColor === 'primary') {
              markerBg = 'bg-[#00855d]';
              dateColor = 'text-[#00855d]';
              badgeBg = 'bg-[#10B981]/15 text-[#047857] font-bold';
            }

            if (milestone.id === 'm4') {
              badgeBg = 'bg-[#10B981]/15 text-[#047857] font-bold';
            }

            return (
              <div
                key={milestone.id}
                className="relative flex flex-col md:flex-row gap-4 items-start"
              >
                {/* Timeline node */}
                <div className="absolute -left-6 md:-left-10 mt-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-[#E2E8F0] shadow-md flex items-center justify-center">
                  <span
                    className={`w-3 h-3 rounded-full ${markerBg} ${
                      milestone.pulse ? 'animate-pulse' : ''
                    }`}
                  ></span>
                </div>

                {/* Milestone Card */}
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex-1 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <span className={`font-label-sm text-xs font-bold uppercase tracking-wider ${dateColor}`}>
                      {milestone.dateBadge}
                    </span>
                    <span className={`font-label-sm text-xs px-2.5 py-0.5 rounded border border-[#E2E8F0]/80 uppercase ${badgeBg}`}>
                      {milestone.locationBadge}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#0F172A] uppercase font-bold m-0">
                    {milestone.title}
                  </h3>
                  <p className="font-body-default text-[#64748B] text-sm mt-2 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
