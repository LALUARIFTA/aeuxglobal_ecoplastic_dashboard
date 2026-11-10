// ==========================================================================
// TEMPLATE CONFIG — single place to rebrand this dashboard for your own org.
// Edit the values below; no other file needs to change for basic rebranding.
// ==========================================================================

export const BRAND = {
  name: 'AeuxGlobal',
  title: 'AeuxGlobal — EcoPlastic Sustainability Platform',
  user: { name: 'Alex Williamson', handle: '#alexw-1924' },
};

// Team workspace switcher (sidebar). `multiplier` scales KPI numbers per workspace.
export const WORKSPACES = [
  { name: 'EcoPlastic',   color: '#2cc965', multiplier: 1.0,  tag: 'Active'  },
  { name: 'SolarGrid AI', color: '#f59e0b', multiplier: 1.18, tag: 'EU-West' },
  { name: 'OceanClean Bio', color: '#38bdf8', multiplier: 0.86, tag: 'APAC' },
];

// Sidebar menus & their sub-menu tabs. Keep ids unique; each id needs a
// matching render function in assets/js/views/.
export const MENU_CONFIG = {
  dashboard: {
    title: 'Dashboard',
    subMenus: [
      { id: 'overview', label: 'Overview' },
      { id: 'telemetry', label: 'Live Telemetry' },
      { id: 'regional', label: 'Regional Breakdown' }
    ]
  },
  analytics: {
    title: 'Analytics',
    subMenus: [
      { id: 'emissions', label: 'Emission Trends' },
      { id: 'polymers', label: 'Polymer Lifecycle' },
      { id: 'efficiency', label: 'Energy Efficiency' },
      { id: 'forecasting', label: 'AI Forecasting' }
    ]
  },
  team: {
    title: 'Team Structure',
    subMenus: [
      { id: 'all_depts', label: 'All Departments (42)' },
      { id: 'rnd', label: 'Environmental R&D' },
      { id: 'operations', label: 'Field Operations' },
      { id: 'datasci', label: 'Data Science' }
    ]
  },
  reports: {
    title: 'Reports',
    subMenus: [
      { id: 'all_reports', label: 'All Reports (8)' },
      { id: 'esg', label: 'ESG Audits' },
      { id: 'financial', label: 'Financial Impact' },
      { id: 'compliance', label: 'Regulatory Compliance' }
    ]
  },
  support: {
    title: 'Support',
    subMenus: [
      { id: 'tickets', label: 'Help Center & Tickets' },
      { id: 'status', label: 'System Status' },
      { id: 'docs', label: 'Documentation' }
    ]
  },
  settings: {
    title: 'Settings',
    subMenus: [
      { id: 'general', label: 'Workspace General' },
      { id: 'sensors', label: 'API & Sensors' },
      { id: 'notifications', label: 'Notifications' },
      { id: 'security', label: 'Security & Billing' }
    ]
  }
};

// Entries for the ⌘+F quick search modal.
export const SEARCH_ITEMS = [
  { label: 'Dashboard — Overview (KPIs, Climate Change Index, Map)', menu: 'dashboard', sub: 'overview' },
  { label: 'Dashboard — Live Telemetry Stream', menu: 'dashboard', sub: 'telemetry' },
  { label: 'Dashboard — Regional Plastic Recycling Breakdown', menu: 'dashboard', sub: 'regional' },
  { label: 'Analytics — Emission Trends & Carbon Intensity', menu: 'analytics', sub: 'emissions' },
  { label: 'Analytics — Polymer Lifecycle (PET, HDPE, PP)', menu: 'analytics', sub: 'polymers' },
  { label: 'Team Structure — Environmental R&D Specialists', menu: 'team', sub: 'rnd' },
  { label: 'Team Structure — Field Operations Directory', menu: 'team', sub: 'operations' },
  { label: 'Reports — All 8 Verified ESG & Financial Audits', menu: 'reports', sub: 'all_reports' },
  { label: 'Support — Submit Priority Sensor Ticket', menu: 'support', sub: 'tickets' },
  { label: 'Settings — API Keys & Alert Thresholds', menu: 'settings', sub: 'general' }
];
