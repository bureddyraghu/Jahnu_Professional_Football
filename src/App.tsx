/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SnapshotSection } from './components/SnapshotSection';
import { ScoutingAttributesSection } from './components/ScoutingAttributesSection';
import { MatchCentreSection } from './components/MatchCentreSection';
import { TimelineSection } from './components/TimelineSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScoutCvModal } from './components/ScoutCvModal';
import { VideoModal } from './components/VideoModal';
import { CertificateModal } from './components/CertificateModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedClipId, setSelectedClipId] = useState<string | undefined>(undefined);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<string | undefined>(undefined);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: ''
  });

  // Handle navigation scroll
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll listener for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'scouting-profile',
        'match-centre',
        'timeline',
        'highlights',
        'contact-scouting-enquiry'
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#1E293B] antialiased flex flex-col selection:bg-[#10B981]/20 selection:text-[#006948]">
      {/* Fixed Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#f8f9ff] flex-1">
        <div className="flex flex-col w-full">
          {/* Hero Bento Stage */}
          <HeroSection
            onOpenCvModal={() => setIsCvModalOpen(true)}
            onOpenVideoModal={(clipId) => {
              setSelectedClipId(clipId);
              setIsVideoModalOpen(true);
            }}
            onScrollTo={handleNavigate}
            onSelectPhoto={(url, title) =>
              setLightboxState({ isOpen: true, url, title })
            }
          />

          {/* Section 01: Dossier Snapshot */}
          <SnapshotSection
            onOpenCertificateModal={() => {
              setSelectedEdition(undefined);
              setIsCertificateModalOpen(true);
            }}
          />

          {/* Section 02: Qualitative Analytics & Attributes */}
          <ScoutingAttributesSection />

          {/* Section 03: Match Centre & KSFA Audit Record */}
          <MatchCentreSection
            onOpenCertificateModal={(edition) => {
              setSelectedEdition(edition);
              setIsCertificateModalOpen(true);
            }}
          />

          {/* Section 04: Career Milestones Timeline */}
          <TimelineSection />

          {/* Section 05: Video Highlights Portfolio */}
          <HighlightsSection
            onOpenVideoModal={(clipId) => {
              setSelectedClipId(clipId);
              setIsVideoModalOpen(true);
            }}
            onScrollToContact={() => handleNavigate('contact-scouting-enquiry')}
          />

          {/* Section 06: Recruitment Channel & Safeguarding Portal */}
          <ContactSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleNavigate}
        onOpenCertificateModal={() => {
          setSelectedEdition(undefined);
          setIsCertificateModalOpen(true);
        }}
      />

      {/* Interactive Modals */}
      <ScoutCvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        selectedClipId={selectedClipId}
        onRequestAccess={() => handleNavigate('contact-scouting-enquiry')}
      />

      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        edition={selectedEdition}
      />

      <PhotoLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() =>
          setLightboxState({ isOpen: false, url: '', title: '' })
        }
        imageUrl={lightboxState.url}
        title={lightboxState.title}
      />
    </div>
  );
}
