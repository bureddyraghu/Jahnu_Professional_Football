import React, { useState } from 'react';
import { Download, Menu, X, CheckCircle } from 'lucide-react';
import { PLAYER_IMAGES } from '../data/playerData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenCvModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'scouting-profile', label: 'Scouting Profile' },
    { id: 'match-centre', label: 'Match Centre' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact-scouting-enquiry', label: 'Contact / Scouting Enquiry' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#E2E8F0]/60">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand & Club Badge */}
        <div className="flex items-center gap-4">
          <button
            id="brand-header-link"
            onClick={() => handleLinkClick('overview')}
            className="flex items-center gap-2 text-left group"
          >
            <span className="font-headline-sm text-xl sm:text-2xl tracking-wide text-[#0F172A] uppercase group-hover:text-[#00855d] transition-colors">
              JAHNU BUREDDY
            </span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#F1F5F9] px-2.5 py-1 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <span className="bg-[#ba0035] text-white font-label-sm text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">
              SAMURAI BANGALORE FC
            </span>
            <span className="bg-[#00855d] text-white font-label-sm text-[10px] px-2 py-0.5 rounded font-bold">
              #11
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-1.5 transition-all font-label-md text-xs cursor-pointer rounded-lg ${
                  isActive
                    ? 'bg-[#00855d] text-white font-semibold shadow-sm'
                    : 'text-[#3d4a42] hover:text-[#0b1c30] hover:bg-[#e5eeff]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-3">
          <button
            id="header-download-cv-btn"
            onClick={onOpenCvModal}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#00855d] hover:bg-[#006948] text-white px-3.5 py-2 rounded-lg font-label-md text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer font-bold"
          >
            <Download className="w-4 h-4" />
            <span>Download Scout CV (PDF)</span>
          </button>

          {/* Profile Avatar with Verified Badge */}
          <div className="relative flex items-center pl-1">
            <img
              alt="Jahnu Bureddy Verified Profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-[#00855d]/30"
              src={PLAYER_IMAGES.navAvatar}
              onError={(e) => {
                // Fallback to registration image if needed
                (e.target as HTMLImageElement).src = PLAYER_IMAGES.registrationPassport;
              }}
            />
            <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm text-[#00855d]">
              <CheckCircle className="w-3.5 h-3.5 fill-[#00855d] text-white" />
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E2E8F0] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#E2E8F0] sm:hidden">
            <span className="bg-[#ba0035] text-white font-label-sm text-[10px] px-2 py-0.5 rounded uppercase font-bold">
              SAMURAI BANGALORE FC
            </span>
            <span className="bg-[#00855d] text-white font-label-sm text-[10px] px-2 py-0.5 rounded font-bold">
              #11
            </span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[#00855d] text-white'
                  : 'text-[#1E293B] hover:bg-[#F1F5F9]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00855d] text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              <span>Download Scout CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
