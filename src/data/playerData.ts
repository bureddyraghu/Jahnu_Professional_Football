import {
  AttributeItem,
  DevelopmentMetric,
  CompetitionStat,
  TournamentRow,
  TimelineMilestone,
  HighlightClip
} from '../types';

export const PLAYER_IMAGES = {
  matchAction: '/hero-image.jpg',
  registrationPassport:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDemzh1cLNJBVE_Z2EbPAC98RlaaX9p7z3jgYF6oHqAwJyfhn8kaLBu9X4jqfpkdkRPB1UH6eq39FDlCDbYxEIoKfUL0M-ivZ-y9TsITtaQqA3nX2EEsn1H6uPRVmxUKSQ6vX7qMk1OTQ1zPPgmZldQfoeC1iE9HdOo6Hu_bJza-Hbjl_ayZ41gN4xNe4HlpaVQMLgO0xazmBvYxtBTks55ABek1Eod_WtvOd0rNoIdkolY2y9WyDprPpWesPEMyvcg4w',
  navAvatar:
    'https://lh3.googleusercontent.com/aida/AEtjO1WT1javfda_qrTU5CJdNYjC7TIqOuxTrWNp4gOnzXYuWx_N5ycbfqpPKVNGQHZZU-axowVRGlHiW8m3Yg6EI3K3xEFMg0p5YBzESkGJKRp0ZkhiDp4IJUoEKPxusHMo5UEMCAO-BZyXBuz26QF1yk10RPPb3z2d6mcZ2J3mjQ2d9050rGsyPeoW8muetKTf9vBWRgXhO3kxHTaOSFiKIaDKDQtJCYctAiS1aa3v36H_toWtafYVHWHcrcdGCR2gGcFPR-hm9i6OzA',
};

export const TECHNICAL_ATTRIBUTES: AttributeItem[] = [
  {
    id: 'tech-1',
    name: 'Ball Control & First Touch',
    status: 'In Development',
    percentage: 75,
    description: 'Demonstrates clean aerial control and instinctive first-touch directional cushioning under match pressure.',
    category: 'technical'
  },
  {
    id: 'tech-2',
    name: 'Dribbling & Ball Carrying',
    status: 'In Development',
    percentage: 67,
    description: 'Comfortable driving forward in wide channels; utilizes body feints to unbalance fullbacks.',
    category: 'technical'
  },
  {
    id: 'tech-3',
    name: 'Passing & Finishing',
    status: 'Coach Assessment',
    percentage: 60,
    description: 'Progressive short-range combinations in final third; working on weak-foot striking consistency.',
    category: 'technical'
  }
];

export const PHYSICAL_ATTRIBUTES: AttributeItem[] = [
  {
    id: 'phys-1',
    name: 'Acceleration & Short Burst Pace',
    status: 'Assessment Pending',
    percentage: 80,
    description: 'Sharp first 5-meter acceleration creating separation in 1v1 situations along the flanks.',
    category: 'physical'
  },
  {
    id: 'phys-2',
    name: 'Agility & Rapid Deceleration',
    status: 'Assessment Pending',
    percentage: 75,
    description: 'Low center of gravity enables quick changes of direction during attacking transitions.',
    category: 'physical'
  },
  {
    id: 'phys-3',
    name: 'Work Rate & Match Stamina',
    status: 'High Commitment',
    percentage: 85,
    description: 'Continuous counter-pressing commitment; willingly tracks opposing fullbacks defensively.',
    category: 'physical'
  }
];

export const TACTICAL_ATTRIBUTES: AttributeItem[] = [
  {
    id: 'tact-1',
    name: 'Positioning & Blindside Movement',
    status: 'Active Learning',
    percentage: 75,
    description: 'Reads defensive line gaps to make penetrating diagonal runs behind opposing fullbacks.',
    category: 'tactical'
  },
  {
    id: 'tact-2',
    name: 'Decision Making in Final Third',
    status: 'In Development',
    percentage: 67,
    description: 'Evolving understanding of when to recycle possession versus taking speculative shots.',
    category: 'tactical'
  },
  {
    id: 'tact-3',
    name: 'Space Awareness & Press Resistance',
    status: 'Good Baseline',
    percentage: 80,
    description: 'Constantly scans field before receiving pass; avoids congested central traps.',
    category: 'tactical'
  }
];

export const DEVELOPMENT_METRICS: DevelopmentMetric[] = [
  {
    label: 'Dribble Success',
    value: 'PROG',
    subLabel: 'Active Tracker',
    colorType: 'emerald'
  },
  {
    label: 'Shot Accuracy',
    value: 'PROG',
    subLabel: 'Active Tracker',
    colorType: 'emerald'
  },
  {
    label: 'Pass Reception',
    value: 'HIGH',
    subLabel: 'Coach Verified',
    colorType: 'primary'
  },
  {
    label: 'Pressing Intensity',
    value: 'TOP 15%',
    subLabel: 'Team High',
    colorType: 'crimson'
  },
  {
    label: 'Sprint Recovery',
    value: 'STRONG',
    subLabel: 'Conditioning OK',
    colorType: 'emerald'
  },
  {
    label: 'Coachability',
    value: 'ELITE',
    subLabel: 'Consistently High',
    colorType: 'primary'
  }
];

export const COMPETITION_STATS: CompetitionStat[] = [
  {
    label: 'Appearances',
    value: 'PENDING',
    auditNote: 'Official Sheet Audit',
    icon: 'pending'
  },
  {
    label: 'Lineup Starts',
    value: 'PENDING',
    auditNote: 'Official Sheet Audit',
    icon: 'pending'
  },
  {
    label: 'Goals Scored',
    value: 'PENDING',
    auditNote: 'Club Record Audit',
    icon: 'pending',
    highlightColor: 'text-kit-crimson'
  },
  {
    label: 'Assists',
    value: 'PENDING',
    auditNote: 'Club Record Audit',
    icon: 'pending',
    highlightColor: 'text-pitch-emerald'
  },
  {
    label: 'Minutes Played',
    value: 'PENDING',
    auditNote: 'Official Sheet Audit',
    icon: 'pending'
  }
];

export const TOURNAMENT_RECORDS: TournamentRow[] = [
  {
    id: 'ksfa-ed-1',
    tournament: 'Karnataka Youth League',
    governingBody: 'KSFA (Karnataka State Football Association)',
    club: 'Samurai Bangalore FC',
    edition: 'Edition 1',
    status: 'Participated (Verified)',
    verified: true
  },
  {
    id: 'ksfa-ed-2',
    tournament: 'Karnataka Youth League',
    governingBody: 'KSFA (Karnataka State Football Association)',
    club: 'Samurai Bangalore FC',
    edition: 'Edition 2',
    status: 'Participated (Verified)',
    verified: true
  },
  {
    id: 'ksfa-ed-3',
    tournament: 'Karnataka Youth League',
    governingBody: 'KSFA (Karnataka State Football Association)',
    club: 'Samurai Bangalore FC',
    edition: 'Edition 3',
    status: 'Participated (Verified)',
    verified: true
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'm1',
    dateBadge: 'December 2011 · Genesis',
    locationBadge: 'Bangalore, India',
    title: 'Born in India — Early Grassroots Passion',
    description:
      'Began kicking footballs at early childhood in Bangalore, displaying early intuitive agility, hand-eye-foot coordination, and passion for attacking movement.',
    markerColor: 'emerald'
  },
  {
    id: 'm2',
    dateBadge: 'Academy Foundation',
    locationBadge: 'Squad Jersey #11',
    title: 'Enrolled with Samurai Bangalore Football Club (SBFC)',
    description:
      'Integrated into the structured youth development curriculum at Samurai Bangalore FC. Coached in fundamental passing patterns, dual-wing positioning, positional rotations, and athletic stamina building.',
    markerColor: 'crimson'
  },
  {
    id: 'm3',
    dateBadge: 'Competitive Expansion',
    locationBadge: '3 Editions Logged',
    title: 'KSFA Karnataka Youth League Participation',
    description:
      'Tested against premier Karnataka youth academies and academies in the official state football association youth championship across three competitive editions. Honed composure and tactical adaptability against varied defensive systems.',
    markerColor: 'primary'
  },
  {
    id: 'm4',
    dateBadge: 'Present & Scouting Cycle',
    locationBadge: 'Trial Ready',
    title: 'High-Performance Progression & Academy Trials',
    description:
      'Continuing intensive daily technical drills, match preparation, and athletic conditioning. Open for technical evaluations, national academy trials, and verified elite camp recruitment scouts.',
    markerColor: 'emerald',
    pulse: true
  }
];

export const HIGHLIGHT_CLIPS: HighlightClip[] = [
  {
    id: 'clip-1',
    title: 'KSFA League Match Highlights',
    category: 'Match Action',
    duration: '02:45',
    description: 'Full-pace channel breaks, 1v1 offensive duels, and counter-pressing triggers against state youth academy opponents.',
    tag: 'KSFA State League',
    tacticalNote: 'Notice rapid decision-making upon offensive turnover and immediate diagonal attacking run.'
  },
  {
    id: 'clip-2',
    title: '1v1 Attacking Compilation',
    category: 'Technical Skills',
    duration: '01:50',
    description: 'Isolated sequences showing low center of gravity, body swerves, burst acceleration, and dual-wing crossing delivery.',
    tag: 'Attacking Duels',
    tacticalNote: 'Demonstrates right-footed cutbacks and quick combination passes in high-pressure corridors.'
  },
  {
    id: 'clip-3',
    title: 'Passing Matrix & Set Pieces',
    category: 'Tactical Play',
    duration: '02:15',
    description: 'Progressive wall passes, third-man combination movements, and direct corner-kick deliveries into the six-yard box.',
    tag: 'Playmaking & Linkup',
    tacticalNote: 'Shows active scanning before receiving and high weight accuracy on through-balls.'
  }
];
