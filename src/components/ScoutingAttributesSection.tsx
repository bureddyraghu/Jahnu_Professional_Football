import React, { useState } from 'react';
import {
  TECHNICAL_ATTRIBUTES,
  PHYSICAL_ATTRIBUTES,
  TACTICAL_ATTRIBUTES,
  DEVELOPMENT_METRICS
} from '../data/playerData';
import {
  Activity,
  Zap,
  Brain,
  FileCheck,
  Eye,
  Sliders
} from 'lucide-react';

export const ScoutingAttributesSection: React.FC = () => {
  const [showPitchDiagram, setShowPitchDiagram] = useState(false);

  return (
    <section id="scouting" className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header with Zero Fabrication Notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></span>
              <span className="font-label-sm text-[#E11D48] uppercase tracking-widest font-bold text-xs">
                Section 02 // Qualitative Analytics
              </span>
            </div>
            <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
              SCOUTING PROFILE &amp; TECHNICAL ATTRIBUTES
            </h2>
          </div>

          {/* Zero Fabrication Banner */}
          <div className="bg-white p-3.5 rounded-xl shadow-sm border border-[#E2E8F0] flex items-center gap-3 max-w-md">
            <FileCheck className="w-6 h-6 text-[#10B981] shrink-0" />
            <p className="font-body-sm text-xs text-[#64748B] leading-normal m-0">
              <strong className="text-[#0F172A] font-semibold">Standard Notice:</strong>{' '}
              Qualitative coach assessment currently in progress. Zero-Fabrication Standard strictly applied; no speculative stat scores.
            </p>
          </div>
        </div>

        {/* View Toggle Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPitchDiagram(false)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-label-md uppercase tracking-wider transition-all cursor-pointer ${
                !showPitchDiagram
                  ? 'bg-[#00855d] text-white shadow-sm'
                  : 'bg-white text-[#3d4a42] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Attribute Matrices
              </span>
            </button>
            <button
              onClick={() => setShowPitchDiagram(true)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-label-md uppercase tracking-wider transition-all cursor-pointer ${
                showPitchDiagram
                  ? 'bg-[#00855d] text-white shadow-sm'
                  : 'bg-white text-[#3d4a42] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Tactical Pitch Zone Map
              </span>
            </button>
          </div>

          <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
            Evaluated according to AIFF &amp; KSFA Grassroots Core Matrices
          </span>
        </div>

        {/* Attributes Categorized Bento Grid */}
        {!showPitchDiagram ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Category 1: Technical Attributes */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 bg-[#F1F5F9] -mx-6 -mt-6 p-4 rounded-t-xl border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#006948]">
                  <Activity className="w-5 h-5 text-[#00855d]" />
                  <span className="font-headline-sm text-[#0F172A] uppercase text-lg">
                    TECHNICAL ABILITY
                  </span>
                </div>
                <span className="font-label-sm text-[10px] text-[#006948] font-bold uppercase bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  Core
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {TECHNICAL_ATTRIBUTES.map((trait) => (
                  <div key={trait.id} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-label-md font-bold text-[#0F172A]">
                        {trait.name}
                      </span>
                      <span className="font-label-sm text-[#047857] font-semibold uppercase">
                        {trait.status}
                      </span>
                    </div>
                    <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden border border-[#E2E8F0]/40">
                      <div
                        className="bg-[#10B981] h-full rounded-full transition-all duration-700"
                        style={{ width: `${trait.percentage}%` }}
                      ></div>
                    </div>
                    <p className="font-body-sm text-xs text-[#64748B] leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Physical & Athletic Attributes */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 bg-[#F1F5F9] -mx-6 -mt-6 p-4 rounded-t-xl border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#E11D48]">
                  <Zap className="w-5 h-5 text-[#E11D48]" />
                  <span className="font-headline-sm text-[#0F172A] uppercase text-lg">
                    PHYSICAL &amp; ATHLETIC
                  </span>
                </div>
                <span className="font-label-sm text-[10px] text-[#E11D48] font-bold uppercase bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  Conditioning
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {PHYSICAL_ATTRIBUTES.map((trait) => (
                  <div key={trait.id} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-label-md font-bold text-[#0F172A]">
                        {trait.name}
                      </span>
                      <span
                        className={`font-label-sm font-semibold uppercase ${
                          trait.status === 'High Commitment'
                            ? 'text-[#047857]'
                            : 'text-[#64748B]'
                        }`}
                      >
                        {trait.status}
                      </span>
                    </div>
                    <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden border border-[#E2E8F0]/40">
                      <div
                        className="bg-[#E11D48] h-full rounded-full transition-all duration-700"
                        style={{ width: `${trait.percentage}%` }}
                      ></div>
                    </div>
                    <p className="font-body-sm text-xs text-[#64748B] leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Tactical Intelligence */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 bg-[#F1F5F9] -mx-6 -mt-6 p-4 rounded-t-xl border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#006948]">
                  <Brain className="w-5 h-5 text-[#00855d]" />
                  <span className="font-headline-sm text-[#0F172A] uppercase text-lg">
                    TACTICAL INTELLIGENCE
                  </span>
                </div>
                <span className="font-label-sm text-[10px] text-[#006948] font-bold uppercase bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  Cognition
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {TACTICAL_ATTRIBUTES.map((trait) => (
                  <div key={trait.id} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-label-md font-bold text-[#0F172A]">
                        {trait.name}
                      </span>
                      <span className="font-label-sm text-[#047857] font-semibold uppercase">
                        {trait.status}
                      </span>
                    </div>
                    <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden border border-[#E2E8F0]/40">
                      <div
                        className="bg-[#00855d] h-full rounded-full transition-all duration-700"
                        style={{ width: `${trait.percentage}%` }}
                      ></div>
                    </div>
                    <p className="font-body-sm text-xs text-[#64748B] leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Pitch Tactical Map */
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-lg uppercase text-[#0F172A]">
                  Tactical Deployment &amp; Attacking Heat Zones
                </h3>
                <p className="text-xs text-[#64748B]">
                  Preferred corridors for Jahnu Bureddy #11 (Samurai Bangalore FC)
                </p>
              </div>
              <span className="bg-[#10B981]/15 text-[#047857] text-xs font-bold px-3 py-1 rounded-full uppercase">
                Right Winger / Inverted Flank Forward
              </span>
            </div>

            <div className="relative w-full aspect-[2/1] max-h-[360px] bg-[#0b3b24] rounded-xl overflow-hidden border-2 border-[#10B981]/40 flex items-center justify-center p-4">
              {/* Football Pitch SVG Lines */}
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full stroke-white/40 fill-none"
                strokeWidth="2"
              >
                {/* Outer pitch boundary */}
                <rect x="20" y="20" width="760" height="410" rx="4" />
                {/* Halfway line */}
                <line x1="400" y1="20" x2="400" y2="430" />
                {/* Center circle */}
                <circle cx="400" cy="225" r="55" />
                <circle cx="400" cy="225" r="3" className="fill-white" />
                {/* Left penalty box */}
                <rect x="20" y="110" width="120" height="230" />
                <rect x="20" y="160" width="45" height="130" />
                <circle cx="100" cy="225" r="2.5" className="fill-white" />
                {/* Right penalty box */}
                <rect x="660" y="110" width="120" height="230" />
                <rect x="735" y="160" width="45" height="130" />
                <circle cx="700" cy="225" r="2.5" className="fill-white" />

                {/* Jahnu Primary Zone: Right Flank / Attacking Half (x: 420-750, y: 20-180) */}
                <path
                  d="M 460 30 Q 600 25 740 60 L 730 200 Q 580 160 480 120 Z"
                  className="fill-[#10B981]/30 stroke-[#10B981] stroke-dashed"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Cut-in trajectory vector */}
                <path
                  d="M 640 80 Q 690 140 720 190"
                  className="stroke-[#E11D48] fill-none"
                  strokeWidth="3"
                  markerEnd="url(#arrow)"
                />

                {/* Primary Player Marker */}
                <g transform="translate(620, 95)">
                  <circle r="16" className="fill-[#E11D48] stroke-white" strokeWidth="2" />
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    className="fill-white font-bold text-[11px] font-sans"
                  >
                    #11
                  </text>
                </g>

                {/* Pressing Trigger indicator */}
                <g transform="translate(530, 70)">
                  <circle r="8" className="fill-[#10B981] animate-ping opacity-60" />
                  <circle r="5" className="fill-[#10B981]" />
                </g>
              </svg>

              {/* Pitch Legend */}
              <div className="absolute bottom-3 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-white flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></span>
                  <span>Jahnu Bureddy #11</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded bg-[#10B981]/60 border border-[#10B981]"></span>
                  <span>High-Action Wing Zone</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#E11D48]"></span>
                  <span>Diagonal Cut-In Vector</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Interactive Scout Radar Simulation / Athletic Attribute Metrics Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 pb-3 bg-[#F1F5F9] -mx-6 -mt-6 p-4 rounded-t-xl border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#10B981]" />
              <span className="font-headline-sm text-[#0F172A] uppercase text-lg">
                COMPREHENSIVE DEVELOPMENT INDEX
              </span>
            </div>
            <span className="font-label-sm text-xs text-[#64748B] uppercase font-semibold">
              Framework: AIFF Grassroots &amp; Elite Youth Matrix
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {DEVELOPMENT_METRICS.map((metric, idx) => {
              let badgeColor = 'text-[#10B981]';
              if (metric.colorType === 'crimson') badgeColor = 'text-[#E11D48]';
              if (metric.colorType === 'primary') badgeColor = 'text-[#047857]';

              return (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] flex flex-col items-center hover:bg-[#e2e8f0]/60 transition-colors"
                >
                  <span className="font-label-sm text-[10px] text-[#64748B] uppercase tracking-wider font-bold">
                    {metric.label}
                  </span>
                  <span className="font-headline-md text-2xl text-[#0F172A] mt-1 font-bold">
                    {metric.value}
                  </span>
                  <span className={`font-label-sm text-[11px] uppercase font-bold mt-0.5 ${badgeColor}`}>
                    {metric.subLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
