export interface AttributeItem {
  id: string;
  name: string;
  status: string;
  percentage: number;
  description: string;
  category: 'technical' | 'physical' | 'tactical';
}

export interface DevelopmentMetric {
  label: string;
  value: string;
  subLabel: string;
  colorType: 'emerald' | 'crimson' | 'primary' | 'muted';
}

export interface CompetitionStat {
  label: string;
  value: string;
  auditNote: string;
  icon: string;
  highlightColor?: string;
}

export interface TournamentRow {
  id: string;
  tournament: string;
  governingBody: string;
  club: string;
  edition: string;
  status: string;
  verified: boolean;
}

export interface TimelineMilestone {
  id: string;
  dateBadge: string;
  locationBadge: string;
  title: string;
  description: string;
  markerColor: 'emerald' | 'crimson' | 'primary';
  pulse?: boolean;
}

export interface HighlightClip {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  tag: string;
  tacticalNote: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  inquiryType: string;
  message: string;
  createdAt: string;
}
