// ==========================================================================
// TEMPLATE DATA — swap these datasets for your own domain data.
// Each export is consumed by a view module in assets/js/views/.
// ==========================================================================

// Climate Change Index: 42 vertical bars across W1-W7 in the dashboard chart.
export const CCI_BARS_BASE = [
  // W1 - W3 (Muted grey bars on left of reference chart)
  26, 18, 42, 34, 15, 31,
  88, 22, 36, 48, 27, 39,
  64, 19, 35, 44, 29, 51,
  25, 38, 53, 30,
  // W4 Peak Bar (#22 is black tall bar, #23 is green bar right next to it with 82.6 CCI badge)
  86, 78, 58, 43, 31, 24,
  // W5 - W7 (Vibrant green bars)
  69, 63, 45, 34, 21, 37,
  46, 22, 18, 54, 41, 61, 52, 47, 29
];

// Plastic Recycling by Region table (dashboard). `continent` feeds the filter.
export const REGIONS_DATA = [
  {
    country: 'USA',
    continent: 'America',
    factory: '253+',
    recycled: '35%',
    trend: 'up',
    sparkPoints: 'M2,22 C14,21 20,14 32,16 C44,18 52,9 66,11 C76,12 84,5 96,4',
    tech: 'Mechanical',
    totalTons: '4,167,987 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm" viewBox="0 0 36 36">
      <clipPath id="usaClip"><circle cx="18" cy="18" r="18"/></clipPath>
      <g clip-path="url(#usaClip)">
        <rect width="36" height="36" fill="#fff"/>
        <path d="M0 0h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0zm0 6h36v3H0z" fill="#d80027"/>
        <rect width="18" height="19" fill="#0052b4"/>
        <circle cx="5" cy="5" r="1.2" fill="#fff"/><circle cx="10" cy="5" r="1.2" fill="#fff"/><circle cx="15" cy="5" r="1.2" fill="#fff"/>
        <circle cx="7.5" cy="9.5" r="1.2" fill="#fff"/><circle cx="12.5" cy="9.5" r="1.2" fill="#fff"/>
        <circle cx="5" cy="14" r="1.2" fill="#fff"/><circle cx="10" cy="14" r="1.2" fill="#fff"/><circle cx="15" cy="14" r="1.2" fill="#fff"/>
      </g>
    </svg>`
  },
  {
    country: 'German',
    continent: 'Europe',
    factory: '211+',
    recycled: '60%',
    trend: 'down',
    sparkPoints: 'M2,7 C16,5 26,14 38,12 C52,10 62,19 76,18 C85,18 90,23 96,24',
    tech: 'Mechanical',
    totalTons: '2,571,193 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm" viewBox="0 0 36 36">
      <clipPath id="gerClip"><circle cx="18" cy="18" r="18"/></clipPath>
      <g clip-path="url(#gerClip)">
        <rect y="0" width="36" height="12" fill="#111"/>
        <rect y="12" width="36" height="12" fill="#d80027"/>
        <rect y="24" width="36" height="12" fill="#ffda44"/>
      </g>
    </svg>`
  },
  {
    country: 'Japan',
    continent: 'Asia',
    factory: '364+',
    recycled: '85%',
    trend: 'up',
    sparkPoints: 'M2,21 C15,10 25,8 38,16 C50,22 62,7 75,9 C86,10 91,5 96,4',
    tech: 'Energy recovery',
    totalTons: '1,864,275 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm border border-gray-100" viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="18" fill="#ffffff"/>
      <circle cx="18" cy="18" r="7.5" fill="#bc002d"/>
    </svg>`
  },
  {
    country: 'China',
    continent: 'Asia',
    factory: '555+',
    recycled: '25%',
    trend: 'down',
    sparkPoints: 'M2,19 C16,18 28,7 40,14 C52,20 64,11 76,17 C86,21 91,22 96,23',
    tech: 'Chemical',
    totalTons: '8,643,742 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm" viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="18" fill="#de2910"/>
      <polygon points="10,8 11.5,12.5 16,12.5 12.3,15.2 13.7,19.7 10,17 6.3,19.7 7.7,15.2 4,12.5 8.5,12.5" fill="#ffde00"/>
    </svg>`
  },
  {
    country: 'Indonesia',
    continent: 'Asia',
    factory: '198+',
    recycled: '48%',
    trend: 'up',
    sparkPoints: 'M2,23 C18,20 30,15 44,14 C58,13 70,9 82,7 C90,6 93,4 96,3',
    tech: 'Mechanical',
    totalTons: '1,420,890 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm border border-gray-100" viewBox="0 0 36 36">
      <clipPath id="idClip"><circle cx="18" cy="18" r="18"/></clipPath>
      <g clip-path="url(#idClip)">
        <rect y="0" width="36" height="18" fill="#e70011"/>
        <rect y="18" width="36" height="18" fill="#ffffff"/>
      </g>
    </svg>`
  },
  {
    country: 'Norway',
    continent: 'Europe',
    factory: '142+',
    recycled: '91%',
    trend: 'up',
    sparkPoints: 'M2,20 C16,17 28,12 42,11 C56,10 68,6 82,5 C90,4 93,4 96,3',
    tech: 'Energy recovery',
    totalTons: '982,410 tons',
    flagSvg: `<svg class="w-7 h-7 rounded-full flex-shrink-0 shadow-sm" viewBox="0 0 36 36">
      <clipPath id="noClip"><circle cx="18" cy="18" r="18"/></clipPath>
      <g clip-path="url(#noClip)">
        <rect width="36" height="36" fill="#ba0c2f"/>
        <rect x="10" y="0" width="6" height="36" fill="#fff"/>
        <rect x="0" y="15" width="36" height="6" fill="#fff"/>
        <rect x="11.5" y="0" width="3" height="36" fill="#00205b"/>
        <rect x="0" y="16.5" width="36" height="3" fill="#00205b"/>
      </g>
    </svg>`
  }
];

// Polymer class breakdown cards (Analytics view).
export const POLYMERS_DATA = [
  { code: 'PET (#1)', name: 'Polyethylene Terephthalate', collected: '4,820,000 t', recycledRate: 84, energySaved: '68%', color: '#2cc965' },
  { code: 'HDPE (#2)', name: 'High-Density Polyethylene', collected: '3,410,000 t', recycledRate: 76, energySaved: '61%', color: '#10b981' },
  { code: 'PP (#5)', name: 'Polypropylene Packaging', collected: '2,950,000 t', recycledRate: 58, energySaved: '49%', color: '#f59e0b' },
  { code: 'LDPE (#4)', name: 'Low-Density Film Plastics', collected: '1,890,000 t', recycledRate: 44, energySaved: '37%', color: '#3b82f6' },
  { code: 'PS (#6)', name: 'Polystyrene Chemical Feed', collected: '1,120,000 t', recycledRate: 39, energySaved: '52%', color: '#8b5cf6' },
  { code: 'Multi-Layer', name: 'Pyrolysis Mixed Polymers', collected: '940,000 t', recycledRate: 67, energySaved: '43%', color: '#ec4899' }
];

// Leadership directory (Team Structure view). `dept` maps to sub-menu ids.
export const TEAM_MEMBERS = [
  { name: 'Alex Williamson', role: 'VP of Global Sustainability', dept: 'rnd', loc: 'Zurich, CH', score: 98, status: 'Online', avatarBg: '#1b4332' },
  { name: 'Dr. Elena Rostova', role: 'Lead Polymer Chemist', dept: 'rnd', loc: 'Munich, DE', score: 95, status: 'In Lab', avatarBg: '#1e3a8a' },
  { name: 'Kenji Takahashi', role: 'Automated Sorting Architect', dept: 'operations', loc: 'Osaka, JP', score: 92, status: 'Online', avatarBg: '#065f46' },
  { name: 'Marcus Vance', role: 'Director of Field Logistics', dept: 'operations', loc: 'Austin, US', score: 89, status: 'Online', avatarBg: '#7c2d12' },
  { name: 'Dewi Kartika', role: 'APAC Marine Recovery Lead', dept: 'operations', loc: 'Jakarta, ID', score: 94, status: 'Field Ops', avatarBg: '#14532d' },
  { name: 'Sofia Lindqvist', role: 'Principal ESG Data Scientist', dept: 'datasci', loc: 'Oslo, NO', score: 97, status: 'Online', avatarBg: '#312e81' },
  { name: 'Liam O’Connor', role: 'IoT Telemetry Engineer', dept: 'datasci', loc: 'Dublin, IE', score: 91, status: 'Online', avatarBg: '#134e4a' },
  { name: 'Chen Wei', role: 'Chemical Pyrolysis Specialist', dept: 'rnd', loc: 'Shanghai, CN', score: 90, status: 'In Lab', avatarBg: '#3b0764' },
  { name: 'Amara Okafor', role: 'Carbon Credit Strategist', dept: 'datasci', loc: 'London, UK', score: 93, status: 'Online', avatarBg: '#1e293b' }
];

// Report repository (Reports view). `cat` maps to sub-menu ids.
export const REPORTS_DATA = [
  { id: 'REP-2026-08', title: 'Q4 Global Plastic Recycling & Carbon Offset Audit', cat: 'esg', date: 'Nov 08, 2026', size: '4.2 MB PDF', status: 'Published' },
  { id: 'REP-2026-07', title: 'European Union Packaging Directive Compliance Dossier', cat: 'compliance', date: 'Nov 04, 2026', size: '6.8 MB PDF', status: 'Published' },
  { id: 'REP-2026-06', title: 'Clean Tech Capital Allocation & ROI Yield ($967,570)', cat: 'financial', date: 'Oct 29, 2026', size: '2.9 MB XLSX', status: 'Published' },
  { id: 'REP-2026-05', title: 'Ukraine & Eastern Europe Atmospheric Particulate Study', cat: 'esg', date: 'Oct 21, 2026', size: '5.1 MB PDF', status: 'Published' },
  { id: 'REP-2026-04', title: 'Mechanical vs. Chemical Depolymerization Lifecycle', cat: 'esg', date: 'Oct 15, 2026', size: '8.4 MB PDF', status: 'Published' },
  { id: 'REP-2026-03', title: 'APAC Factory Network ISO-14001 Certification Log', cat: 'compliance', date: 'Oct 09, 2026', size: '3.7 MB PDF', status: 'Pending Review' },
  { id: 'REP-2026-02', title: 'Green Bond Tranche III Utilization Statement', cat: 'financial', date: 'Sep 30, 2026', size: '1.9 MB PDF', status: 'Published' },
  { id: 'REP-2026-01', title: 'Annual 99,681m Tons CO2 Abatement Verification', cat: 'esg', date: 'Sep 18, 2026', size: '11.2 MB PDF', status: 'Published' }
];
