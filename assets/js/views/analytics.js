// Analytics view: KPI summary, multi-line trend chart, polymer matrix.
import { POLYMERS_DATA } from '../data.js';
import { showToast } from '../ui.js';

export function renderAnalyticsView(subMenu) {
  const subTitles = {
    emissions: 'Global Carbon & Greenhouse Emission Trends',
    polymers: 'Polymer Lifecycle & Circular Recovery Funnel',
    efficiency: 'Plant Energy Efficiency & Grid Optimization',
    forecasting: 'AI Predictive Sustainability Forecasting (2026–2030)'
  };

  return `
    <!-- Sub-menu Hero Summary -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 stagger-1">
      <div class="tilted-pollution-card rounded-[20px] p-5 text-white">
        <div class="text-xs text-[#8fa395]">Net Carbon Intensity</div>
        <div class="text-2xl font-extrabold mt-1">18.4 kgCO₂/t</div>
        <div class="text-[11px] text-[#2cc965] font-bold mt-2">↘ 14.2% vs Q3 benchmark</div>
      </div>
      <div class="dash-card p-5">
        <div class="text-xs text-gray-500">Circular Polymer Yield</div>
        <div class="text-2xl font-extrabold text-[#111c15] mt-1">86.4%</div>
        <div class="text-[11px] text-[#2cc965] font-bold mt-2">↗ +6.8% YoY improvement</div>
      </div>
      <div class="dash-card p-5">
        <div class="text-xs text-gray-500">Renewable Kilowatt Share</div>
        <div class="text-2xl font-extrabold text-[#111c15] mt-1">91.2%</div>
        <div class="text-[11px] text-[#2cc965] font-bold mt-2">↗ Solar + Hydro powered</div>
      </div>
      <div class="sage-card p-5">
        <div class="text-xs text-[#4b6052] font-semibold">AI Forecast Accuracy</div>
        <div class="text-2xl font-extrabold text-[#111c15] mt-1">98.7%</div>
        <div class="text-[11px] text-[#1e7e41] font-bold mt-2">Model v4.8 Active</div>
      </div>
    </div>

    <!-- Multi-line SVG Analytics Chart -->
    <div class="dash-card p-5 mb-4 stagger-2">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h2 class="text-base font-bold text-[#111c15]">${subTitles[subMenu] || subTitles.emissions}</h2>
          <p class="text-xs text-gray-500">Comparing Mechanical Depolymerization vs. Virgin Fossil Baseline across 12 months</p>
        </div>
        <div class="flex items-center gap-4 text-xs font-semibold">
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#2cc965]"></span>Recycled Output</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#111c15]"></span>CO₂ Abatement</span>
        </div>
      </div>

      <div class="w-full overflow-x-auto">
        <svg class="w-full h-56 min-w-[600px]" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="anaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#2cc965" stop-opacity="0.32"/>
              <stop offset="100%" stop-color="#2cc965" stop-opacity="0.0"/>
            </linearGradient>
          </defs>
          <!-- Grid lines -->
          <line x1="40" y1="30" x2="780" y2="30" stroke="#f0f2f0" stroke-width="1"/>
          <line x1="40" y1="80" x2="780" y2="80" stroke="#f0f2f0" stroke-width="1"/>
          <line x1="40" y1="130" x2="780" y2="130" stroke="#f0f2f0" stroke-width="1"/>
          <line x1="40" y1="175" x2="780" y2="175" stroke="#e5e7eb" stroke-width="1"/>

          <!-- Area & Curve 1 -->
          <path d="M40,150 C110,140 160,105 230,110 C300,115 350,65 420,72 C490,78 550,40 620,45 C690,50 730,22 780,18 L780,175 L40,175 Z" fill="url(#anaGrad)"/>
          <path d="M40,150 C110,140 160,105 230,110 C300,115 350,65 420,72 C490,78 550,40 620,45 C690,50 730,22 780,18" fill="none" stroke="#2cc965" stroke-width="3.2" stroke-linecap="round"/>

          <!-- Curve 2 -->
          <path d="M40,162 C120,155 180,130 250,134 C330,138 390,98 460,95 C540,92 600,72 670,64 C720,58 750,48 780,44" fill="none" stroke="#111c15" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>

          <!-- Interactive Data Points -->
          <circle cx="230" cy="110" r="5" fill="#2cc965" stroke="#fff" stroke-width="2"/>
          <circle cx="420" cy="72" r="5" fill="#2cc965" stroke="#fff" stroke-width="2"/>
          <circle cx="620" cy="45" r="5" fill="#2cc965" stroke="#fff" stroke-width="2"/>
          <circle cx="780" cy="18" r="6" fill="#111c15" stroke="#2cc965" stroke-width="2.5"/>
        </svg>
      </div>
    </div>

    <!-- Scrollable Polymer Lifecycle Matrix -->
    <div class="dash-card p-5 mb-4 stagger-3">
      <h3 class="text-base font-bold text-[#111c15] mb-3">Polymer Class Recovery & Energy Savings Breakdown</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        ${POLYMERS_DATA.map(p => `
          <div onclick="showToast('${p.code}: ${p.collected} collected at ${p.recycledRate}% recovery')" class="p-4 rounded-2xl bg-[#f7f9f7] hover:bg-emerald-50/50 border border-black/[0.04] transition cursor-pointer">
            <div class="flex items-center justify-between mb-1.5">
              <div>
                <span class="text-xs font-extrabold px-2 py-0.5 rounded-md bg-[#121d16] text-white mr-1.5">${p.code}</span>
                <span class="text-xs font-bold text-[#111c15]">${p.name}</span>
              </div>
              <span class="text-xs font-extrabold text-emerald-700">${p.recycledRate}% Recycled</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 overflow-hidden my-2">
              <div class="h-full rounded-full" style="width: ${p.recycledRate}%; background:${p.color}"></div>
            </div>
            <div class="flex justify-between text-[11px] text-gray-500 font-medium">
              <span>Volume: <strong class="text-gray-800">${p.collected}</strong></span>
              <span>Energy Saved vs Virgin: <strong class="text-emerald-700">${p.energySaved}</strong></span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
