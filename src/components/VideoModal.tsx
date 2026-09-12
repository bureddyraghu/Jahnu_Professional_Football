import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Shield, Lock } from 'lucide-react';
import { HIGHLIGHT_CLIPS, PLAYER_IMAGES } from '../data/playerData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClipId?: string;
  onRequestAccess: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  selectedClipId,
  onRequestAccess
}) => {
  const [activeClipId, setActiveClipId] = useState(
    selectedClipId || HIGHLIGHT_CLIPS[0].id
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(25);
  const [cameraMode, setCameraMode] = useState<'broadcast' | 'tactical' | 'radar'>('broadcast');

  useEffect(() => {
    if (selectedClipId) {
      setActiveClipId(selectedClipId);
    }
  }, [selectedClipId]);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!isOpen) return null;

  const currentClip =
    HIGHLIGHT_CLIPS.find((c) => c.id === activeClipId) || HIGHLIGHT_CLIPS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#0b1c30] text-white w-full max-w-4xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-pulse"></span>
            <h3 className="font-headline-sm text-lg uppercase tracking-wide">
              Tactical Scouting Video Player
            </h3>
            <span className="bg-white/10 text-xs px-2 py-0.5 rounded font-mono text-[#10B981]">
              1080p 60fps Feeds
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video bg-[#050f1a] overflow-hidden flex items-center justify-center group">
          {/* Background Poster Image with Tactical Overlay */}
          <img
            src={PLAYER_IMAGES.matchAction}
            alt="Match Footage Frame"
            className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-700"
          />

          {/* Watermark */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono flex items-center gap-2 border border-white/10">
            <Shield className="w-3.5 h-3.5 text-[#10B981]" />
            <span>KSFA YOUTH LEAGUE · SAMURAI BANGALORE FC #11</span>
          </div>

          {/* Camera View Switcher */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/10 text-[11px]">
            {(['broadcast', 'tactical', 'radar'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setCameraMode(mode)}
                className={`px-2 py-1 rounded capitalize font-medium transition-colors ${
                  cameraMode === mode
                    ? 'bg-[#00855d] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Tactical Augmented Reality Graphics Overlay */}
          {cameraMode === 'tactical' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Tactical Box around Player */}
                <div className="absolute top-[42%] left-[45%] w-24 h-40 border-2 border-[#10B981] rounded-lg shadow-[0_0_15px_#10B981]">
                  <span className="absolute -top-5 left-0 bg-[#10B981] text-black text-[10px] font-bold px-1.5 rounded uppercase">
                    Jahnu #11 (RW)
                  </span>
                  <span className="absolute -bottom-5 left-0 bg-black/80 text-[10px] text-white px-1 rounded font-mono">
                    28.4 km/h burst
                  </span>
                </div>
                {/* Direction arrow line */}
                <div className="absolute top-[55%] left-[55%] w-32 h-0.5 bg-[#E11D48] transform rotate-[-25deg] shadow-[0_0_8px_#E11D48]"></div>
              </div>
            </div>
          )}

          {/* Big Play Button Overlay */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute w-16 h-16 rounded-full bg-[#E11D48]/90 hover:bg-[#E11D48] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all cursor-pointer"
            >
              <Play className="w-8 h-8 fill-white translate-x-0.5" />
            </button>
          )}

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
            {/* Scrubber */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress(Math.round((clickX / rect.width) * 100));
              }}
              className="w-full bg-white/20 h-1.5 rounded-full cursor-pointer overflow-hidden relative"
            >
              <div
                className="bg-[#10B981] h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#10B981] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setProgress(0)}
                  className="hover:text-[#10B981] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="font-mono text-[11px] text-gray-300">
                  {Math.floor((progress / 100) * 165)}s / {currentClip.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-gray-400" />
                <span className="font-label-sm text-[10px] text-gray-400 uppercase">
                  Hudl Video Engine v4.2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clip Selector & Coach Tactical Notes */}
        <div className="p-5 bg-[#0b1c30] flex flex-col md:flex-row gap-6 border-t border-white/10">
          <div className="flex-1 flex flex-col gap-3">
            <span className="text-xs uppercase font-bold text-[#10B981] tracking-wider">
              Selected Analysis Package
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {HIGHLIGHT_CLIPS.map((clip) => (
                <button
                  key={clip.id}
                  onClick={() => {
                    setActiveClipId(clip.id);
                    setProgress(15);
                  }}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    activeClipId === clip.id
                      ? 'bg-white/10 border-[#10B981] text-white shadow-sm'
                      : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/8'
                  }`}
                >
                  <span className="font-headline-sm text-xs uppercase font-bold">
                    {clip.title}
                  </span>
                  <div className="flex justify-between items-center text-[10px] text-gray-400 mt-2">
                    <span>{clip.duration}</span>
                    <span className="text-[#10B981] font-semibold">{clip.tag}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3 bg-white/5 rounded-lg border border-white/10 mt-1">
              <span className="text-[11px] text-gray-400 uppercase font-bold block mb-1">
                Scout Tactical Observation:
              </span>
              <p className="text-xs text-gray-200 leading-relaxed">
                {currentClip.tacticalNote}
              </p>
            </div>
          </div>

          <div className="w-full md:w-64 bg-[#081626] p-4 rounded-xl border border-white/10 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-xs text-[#E11D48] font-bold uppercase">
                <Lock className="w-3.5 h-3.5" /> Full Match Replays
              </span>
              <p className="text-xs text-gray-300">
                Uncut 90-minute Wyscout footage available for verified academy directors.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestAccess();
              }}
              className="w-full bg-[#00855d] hover:bg-[#006948] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
