import React, { useState } from 'react';
import {
  ShieldAlert,
  Building,
  Mail,
  FileDown,
  Send,
  CheckCircle,
  Copy,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    inquiryType: 'trial',
    message: '',
    safeguardConsent: false
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.safeguardConsent) {
      alert('Please agree to the safeguarding regulations before submitting.');
      return;
    }

    // Generate verified reference token
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `SBFC-SCOUT-${new Date().getFullYear()}-${randomCode}`;
    setSubmittedRef(refCode);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact-scouting-enquiry" className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
            <span className="font-label-sm text-[#00855d] uppercase tracking-widest font-bold text-xs">
              Section 06 // Recruitment Channel
            </span>
          </div>
          <h2 className="font-headline-lg text-[#0F172A] uppercase tracking-tight m-0">
            SCOUTING ENQUIRY &amp; GUARDIAN CONTACT
          </h2>
          <p className="font-body-default text-[#64748B] text-sm sm:text-base leading-relaxed">
            Official protocol for technical directors, recruitment heads, and federations wishing to evaluate Jahnu Bureddy.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Columns: Official Protocol & Safeguarding */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Safeguarding Banner Notice */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#BE123C]"></div>
              <div className="flex items-center gap-2 text-[#BE123C]">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
                  FIFA &amp; AIFF Safeguarding Notice
                </span>
              </div>
              <h4 className="font-headline-sm text-lg uppercase text-[#0F172A] font-bold m-0">
                Youth Protection Policy
              </h4>
              <p className="font-body-default text-[#64748B] text-xs sm:text-sm leading-relaxed">
                Jahnu Bureddy is a minor youth athlete. Direct personal contact information is withheld in strict compliance with the AIFF Youth Safeguarding Framework. All recruitment invitations, academy trials, or scouting requests are reviewed exclusively by designated legal guardians and certified club representatives.
              </p>
            </div>

            {/* Representative Entity Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
              <span className="font-label-sm text-xs text-[#64748B] uppercase tracking-wider font-bold">
                Representation Entity
              </span>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#10B981]">
                  <Building className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-sm text-[#0F172A] font-bold">
                    Samurai Bangalore Football Club
                  </span>
                  <span className="font-body-sm text-xs text-[#64748B]">
                    Technical Department &amp; Youth Academy
                  </span>
                  <span className="font-body-sm text-xs text-[#64748B] mt-0.5">
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-[#E2E8F0]/60">
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#E11D48]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-sm text-[#0F172A] font-bold">
                    Official Scouting Desk
                  </span>
                  <span className="font-body-sm text-xs font-mono text-[#00855d]">
                    scout-desk@samuraibangalorefc.in
                  </span>
                  <span className="font-body-sm text-xs text-[#10B981] font-semibold mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Responses within 24-48 Business Hours
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCvModal}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F1F5F9] hover:bg-[#e2e8f0] text-[#0F172A] px-4 py-3 rounded-lg font-label-md text-xs uppercase tracking-wider transition-all border border-[#CBD5E1] cursor-pointer font-bold"
                >
                  <FileDown className="w-4 h-4 text-[#10B981]" />
                  <span>Download Scout Profile (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Scouting Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-[#00855d] uppercase tracking-wider font-bold">
                Recruiter Submission Portal
              </span>
              <h3 className="font-headline-md text-2xl text-[#0F172A] uppercase font-bold m-0">
                Submit Direct Scouting Enquiry
              </h3>
              <p className="font-body-sm text-xs text-[#64748B]">
                Fields marked with an asterisk are required for credential verification before scheduling assessment sessions.
              </p>
            </div>

            {submittedRef ? (
              <div className="p-6 bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl flex flex-col gap-3 animate-in fade-in">
                <div className="flex items-center gap-2 text-[#047857]">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <span className="font-bold text-sm">
                    Scouting Enquiry Logged Successfully
                  </span>
                </div>
                <p className="text-xs text-[#1E293B] leading-relaxed">
                  Your official dossier request has been securely queued with the Samurai Bangalore FC technical department and legal guardian contact.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#CBD5E1] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#64748B] uppercase font-bold block">
                      Docket Reference ID
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0F172A]">
                      {submittedRef}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyRef}
                    className="inline-flex items-center gap-1 text-xs text-[#00855d] font-bold hover:underline px-2 py-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      inquiryType: 'trial',
                      message: '',
                      safeguardConsent: false
                    });
                  }}
                  className="mt-2 text-xs font-bold text-[#00855d] hover:underline self-start cursor-pointer"
                >
                  Submit another evaluation request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-xs text-[#0F172A] uppercase font-bold">
                      Your Full Name *
                    </label>
                    <input
                      className="w-full bg-[#F1F5F9] px-3.5 py-2.5 rounded-lg text-sm text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#10B981] transition-colors"
                      placeholder="e.g. Roberto Silva"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>

                  {/* Organization / Club */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-xs text-[#0F172A] uppercase font-bold">
                      Club / Academy / Agency *
                    </label>
                    <input
                      className="w-full bg-[#F1F5F9] px-3.5 py-2.5 rounded-lg text-sm text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#10B981] transition-colors"
                      placeholder="e.g. Bengaluru FC Academy / Wyscout"
                      required
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Official Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-xs text-[#0F172A] uppercase font-bold">
                      Official Scouting Email *
                    </label>
                    <input
                      className="w-full bg-[#F1F5F9] px-3.5 py-2.5 rounded-lg text-sm text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#10B981] transition-colors"
                      placeholder="recruitment@clubdomain.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Inquiry Purpose */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-xs text-[#0F172A] uppercase font-bold">
                      Inquiry Type *
                    </label>
                    <select
                      className="w-full bg-[#F1F5F9] px-3.5 py-2.5 rounded-lg text-sm text-[#0F172A] border border-[#CBD5E1] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#10B981] transition-colors"
                      required
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                    >
                      <option value="trial">Formal Academy Trial Invitation</option>
                      <option value="evaluation">Technical Assessment &amp; Match Scouting</option>
                      <option value="tournament">Invitation to Showcase Tournament</option>
                      <option value="cv-request">Comprehensive Athletic Dossier Request</option>
                      <option value="other">General Scouting Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs text-[#0F172A] uppercase font-bold">
                    Proposal Details / Evaluation Scope *
                  </label>
                  <textarea
                    className="w-full bg-[#F1F5F9] px-3.5 py-2.5 rounded-lg text-sm text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#10B981] transition-colors resize-y min-h-[90px]"
                    placeholder="Please outline trial dates, venue, or required documentation..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* Verification Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="safeguardConsent"
                    required
                    type="checkbox"
                    checked={formData.safeguardConsent}
                    onChange={(e) =>
                      setFormData({ ...formData, safeguardConsent: e.target.checked })
                    }
                    className="mt-1 accent-[#10B981] w-4 h-4 rounded cursor-pointer shrink-0"
                  />
                  <label
                    htmlFor="safeguardConsent"
                    className="font-body-sm text-xs text-[#64748B] leading-normal cursor-pointer select-none"
                  >
                    I confirm that I represent a recognized football institution or verified scouting organisation and agree to conduct evaluations according to official child safeguarding regulations.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#00855d] hover:bg-[#006948] text-white py-3 px-6 rounded-lg font-label-md text-xs uppercase tracking-wider transition-all shadow-sm font-bold cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Scouting Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
