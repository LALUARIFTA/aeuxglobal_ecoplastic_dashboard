// Dashboard view: KPI cards, Climate Change Index chart, region table, map.
import { state } from '../store.js';
import { CCI_BARS_BASE, REGIONS_DATA } from '../data.js';
import { showToast } from '../ui.js';

export function renderDashboardView(subMenu) {
  const m = state.multiplier;
  const airVal = (35.05 * m).toFixed(2);
  const eqiVal = Math.min(99.9, (75.50 * m)).toFixed(2);
  const invVal = Math.round(967570 * m).toLocaleString();
  const co2Tons = Math.round(99681 * m).toLocaleString();

  // Filter regions for table
  const filteredRegions = state.regionFilter === 'All regions'
    ? REGIONS_DATA
    : REGIONS_DATA.filter(r => r.continent === state.regionFilter);

  // Sub-menu contextual banner if user switches to Live Telemetry or Regional Breakdown
  const subHeaderBanner = subMenu !== 'overview' ? `
    <div class="mb-4 px-4 py-3 rounded-2xl bg-[#122117] text-white flex flex-wrap items-center justify-between gap-2 stagger-1">
      <div class="flex items-center gap-2.5">
        <span class="w-2.5 h-2.5 rounded-full bg-[#2cc965] animate-ping"></span>
        <span class="text-xs font-bold uppercase tracking-wider text-[#2cc965]">${subMenu === 'telemetry' ? 'Live IoT Sensor Stream' : 'Deep Regional Breakdown'}</span>
        <span class="text-xs text-gray-300">— Showing real-time synchronized metrics for <strong>${state.workspace}</strong></span>
      </div>
      <button onclick="switchSubMenu('overview')" class="text-xs text-emerald-400 hover:underline font-semibold">Back to Standard Overview →</button>
    </div>
  ` : '';

  return `
    ${subHeaderBanner}

    <!-- ROW 1: 3 TOP KPI CARDS (Exact Match to Reference Image) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 stagger-1">

      <!-- Card 1: Tilted Dark Air Pollution Level Card -->
      <div class="tilted-pollution-card rounded-[20px] p-5 text-white flex items-end justify-between relative">
        <div>
          <div class="text-[11.5px] font-medium text-[#8fa395] mb-1.5">Air Pollution Level</div>
          <div class="text-[28px] font-bold tracking-tight leading-none mb-2.5">
            <span class="counter-num" data-target="${airVal}">${airVal}</span> <span class="text-[20px] font-semibold">μg/m³</span>
          </div>
          <div class="flex items-center gap-1.5 text-[11px]">
            <span class="text-[#2cc965] font-bold flex items-center">↗ 2.3%</span>
            <span class="text-[#788a7e]">than last month</span>
          </div>
        </div>
        <!-- 4-bar mini green chart -->
        <div class="flex items-end gap-[7px] h-12 pb-0.5">
          <div class="w-[5px] h-10 bg-[#2cc965] rounded-full bar-anim"></div>
          <div class="w-[5px] h-6 bg-[#2cc965] rounded-full bar-anim" style="animation-delay:0.08s"></div>
          <div class="w-[5px] h-3.5 bg-[#2cc965] rounded-full bar-anim" style="animation-delay:0.16s"></div>
          <div class="w-[5px] h-8 bg-[#2cc965] rounded-full bar-anim" style="animation-delay:0.24s"></div>
        </div>
      </div>

      <!-- Card 2: Environmental Quality Index -->
      <div class="dash-card p-5 flex items-end justify-between">
        <div>
          <div class="text-[11.5px] font-medium text-[#8c9690] mb-1.5">Environmental Quality Index</div>
          <div class="text-[28px] font-bold tracking-tight text-[#111c15] leading-none mb-2.5">
            <span class="counter-num" data-target="${eqiVal}">${eqiVal}</span><span class="text-[#9aa39d] font-medium text-[22px]">/100%</span>
          </div>
          <div class="flex items-center gap-1.5 text-[11px]">
            <span class="text-[#dc4c41] font-bold flex items-center">↘ 3.4%</span>
            <span class="text-[#8c9690]">than last month</span>
          </div>
        </div>
        <!-- 4-bar mini red/grey chart -->
        <div class="flex items-end gap-[7px] h-12 pb-0.5">
          <div class="w-[5px] h-5 bg-[#c94a4a] rounded-full bar-anim"></div>
          <div class="w-[5px] h-8 bg-[#c94a4a] rounded-full bar-anim" style="animation-delay:0.08s"></div>
          <div class="w-[5px] h-11 bg-[#dcdfdd] rounded-full bar-anim" style="animation-delay:0.16s"></div>
          <div class="w-[5px] h-6 bg-[#c94a4a] rounded-full bar-anim" style="animation-delay:0.24s"></div>
        </div>
      </div>

      <!-- Card 3: Investments in Clean Technologies -->
      <div class="dash-card p-5 flex items-end justify-between">
        <div>
          <div class="text-[11.5px] font-medium text-[#8c9690] mb-1.5">Investments in Clean Technologies</div>
          <div class="text-[28px] font-bold tracking-tight text-[#111c15] leading-none mb-2.5">
            $${invVal}
          </div>
          <div class="flex items-center gap-1.5 text-[11px]">
            <span class="text-[#2cc965] font-bold flex items-center">↗ 5.7%</span>
            <span class="text-[#8c9690]">than last month</span>
          </div>
        </div>
        <!-- 4-bar mini green/grey chart -->
        <div class="flex items-end gap-[7px] h-12 pb-0.5">
          <div class="w-[5px] h-5 bg-[#2cc965] rounded-full bar-anim"></div>
          <div class="w-[5px] h-9 bg-[#dcdfdd] rounded-full bar-anim" style="animation-delay:0.08s"></div>
          <div class="w-[5px] h-3.5 bg-[#2cc965] rounded-full bar-anim" style="animation-delay:0.16s"></div>
          <div class="w-[5px] h-6 bg-[#2cc965] rounded-full bar-anim" style="animation-delay:0.24s"></div>
        </div>
      </div>

    </div>

    <!-- ROW 2: CLIMATE CHANGE INDEX (Left ~63%) + 99,681m TONS SAGE CARD (Right ~37%) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 stagger-2">

      <!-- Climate Change Index Card -->
      <div class="dash-card p-5 lg:col-span-8 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-[15.5px] font-bold text-[#111c15]">Climate Change Index</h2>
          <!-- Period Selector Pill -->
          <div class="relative">
            <select onchange="changeCciPeriod(this.value)" class="appearance-none bg-[#141f18] hover:bg-[#1f3025] text-white text-[11px] font-semibold pl-3 pr-7 py-1.5 rounded-full cursor-pointer focus:outline-none">
              <option value="2 month" ${state.cciPeriod === '2 month' ? 'selected' : ''}>2 month</option>
              <option value="6 month" ${state.cciPeriod === '6 month' ? 'selected' : ''}>6 month</option>
              <option value="1 year" ${state.cciPeriod === '1 year' ? 'selected' : ''}>1 year</option>
            </select>
            <svg class="w-3 h-3 text-white pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <!-- Interactive Bar Chart Container -->
        <div class="relative pt-3 pb-1">
          <div class="flex gap-3">
            <!-- Y-Axis Labels -->
            <div class="flex flex-col justify-between text-[10px] font-medium text-[#b0b8b3] h-[148px] pb-5 select-none">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            <!-- Plot Area -->
            <div class="flex-1 relative h-[148px] flex flex-col justify-end">
              <!-- Horizontal Grid Lines -->
              <div class="absolute inset-0 bottom-5 flex flex-col justify-between pointer-events-none">
                <div class="border-b border-gray-100 w-full"></div>
                <div class="border-b border-gray-100 w-full"></div>
                <div class="border-b border-gray-100 w-full"></div>
                <div class="border-b border-gray-100 w-full"></div>
                <div class="border-b border-gray-100 w-full"></div>
                <div class="border-b border-gray-100 w-full"></div>
              </div>

              <!-- Dashed Reference Line at ~74% height matching reference image -->
              <div class="absolute left-0 right-0 bottom-[106px] border-b border-dashed border-[#5c6b61]/60 z-10 pointer-events-none"></div>

              <!-- Floating Dark Pill Tooltip (82.6 CCI) -->
              <div id="cciFloatingBadge" class="absolute bottom-[112px] left-[53%] -translate-x-1/2 z-20 bg-[#121d16] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg pointer-events-none transition-all duration-200 whitespace-nowrap">
                <span id="cciTooltipText">82.6 CCI</span>
              </div>

              <!-- 42 Vertical Bars -->
              <div class="relative z-10 flex items-end justify-between h-[126px] px-1 gap-[3px]">
                ${CCI_BARS_BASE.map((val, idx) => {
                  const scaledVal = Math.min(98, Math.max(12, Math.round(val * (state.cciPeriod === '6 month' ? 0.92 : state.cciPeriod === '1 year' ? 1.08 : 1))));
                  // First 21 bars are light grey, bar #22 is dark black peak bar, bars #23+ are emerald green (matching reference photo)
                  let barColor = 'bg-[#dcdfdd] hover:bg-[#aeb8b1]';
                  if (idx === 21) {
                    barColor = 'bg-[#111c15]';
                  } else if (idx >= 22) {
                    barColor = 'bg-[#2cc965] hover:bg-[#1fa850]';
                  }
                  const cciScore = (scaledVal * 0.96).toFixed(1);
                  return `
                    <div
                      onmouseenter="updateCciTooltip(${idx}, '${cciScore}', ${CCI_BARS_BASE.length})"
                      onclick="updateCciTooltip(${idx}, '${cciScore}', ${CCI_BARS_BASE.length})"
                      class="flex-1 h-full flex items-end justify-center cursor-pointer group"
                    >
                      <div
                        class="w-[4.5px] rounded-full transition-all duration-300 bar-anim ${barColor}"
                        style="height: ${scaledVal}%; animation-delay: ${idx * 0.008}s"
                      ></div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- X-Axis Week Labels (W1 to W7) -->
              <div class="flex justify-between text-[10px] font-semibold text-[#9aa39d] pt-2 px-2">
                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>
                <span>W7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sage Card: 99,681m TONS -->
      <div class="sage-card p-5 lg:col-span-4 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline gap-1.5 flex-wrap">
            <span class="text-[36px] font-extrabold tracking-tight text-[#111c15] leading-none">${co2Tons}m</span>
            <span class="text-[14px] font-medium text-[#5c6e61] uppercase">TONS</span>
          </div>
          <div class="text-[12px] font-bold text-[#259c52] mt-1.5 flex items-center gap-1">
            <span>↗ 20%</span>
            <span class="text-[#2f4536] font-semibold">reduced CO2</span>
          </div>
        </div>

        <div class="space-y-3.5 mt-4 pt-3 border-t border-black/[0.06]">
          <!-- Mechanical Recycling Item -->
          <div onclick="showToast('Mechanical Recycling: 1,697 TONS processed this cycle')" class="flex items-center gap-3 cursor-pointer group">
            <div class="w-10 h-10 rounded-full bg-[#c2d6c5] group-hover:bg-[#2cc965] group-hover:text-white text-[#223829] flex items-center justify-center transition flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div>
              <div class="text-[13px] font-bold text-[#111c15]">Mechanical recycling</div>
              <div class="text-[11px] font-semibold text-[#6a7d70]">1,697 TONS</div>
            </div>
          </div>

          <!-- Chemical Recycling Item -->
          <div onclick="showToast('Chemical Recycling: 913 TONS depolymerized')" class="flex items-center gap-3 cursor-pointer group">
            <div class="w-10 h-10 rounded-full bg-[#c2d6c5] group-hover:bg-[#2cc965] group-hover:text-white text-[#223829] flex items-center justify-center transition flex-shrink-0">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="9" r="2.2"/>
                <circle cx="15.5" cy="11" r="1.6"/>
                <circle cx="11" cy="15.5" r="2"/>
              </svg>
            </div>
            <div>
              <div class="text-[13px] font-bold text-[#111c15]">Chemical recycling</div>
              <div class="text-[11px] font-semibold text-[#6a7d70]">913 TONS</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ROW 3: PLASTIC RECYCLING BY REGION (Left ~63%) + GLOBAL POLLUTION MAP (Right ~37%) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5 stagger-3">

      <!-- Left: Plastic Recycling by Region Table Card -->
      <div class="dash-card p-5 lg:col-span-8 flex flex-col justify-between overflow-x-auto">
        <div class="flex items-center justify-between mb-3 min-w-[540px]">
          <h2 class="text-[15.5px] font-bold text-[#111c15]">Plastic Recycling by Region</h2>
          <div class="relative">
            <select onchange="changeRegionFilter(this.value)" class="appearance-none bg-[#141f18] hover:bg-[#1f3025] text-white text-[11px] font-semibold pl-3 pr-7 py-1.5 rounded-full cursor-pointer focus:outline-none">
              <option value="All regions" ${state.regionFilter === 'All regions' ? 'selected' : ''}>All regions</option>
              <option value="America" ${state.regionFilter === 'America' ? 'selected' : ''}>America</option>
              <option value="Europe" ${state.regionFilter === 'Europe' ? 'selected' : ''}>Europe</option>
              <option value="Asia" ${state.regionFilter === 'Asia' ? 'selected' : ''}>Asia</option>
            </select>
            <svg class="w-3 h-3 text-white pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <table class="w-full text-left border-collapse min-w-[540px]">
          <thead>
            <tr class="text-[10.5px] font-semibold text-[#9aa39d] border-b border-gray-100">
              <th class="pb-2 font-medium">Region</th>
              <th class="pb-2 font-medium">Factory</th>
              <th class="pb-2 font-medium">Recycled</th>
              <th class="pb-2 font-medium">Dynamic</th>
              <th class="pb-2 font-medium">Main Technologies</th>
              <th class="pb-2 font-medium text-right pr-6">Total Value</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-[12.5px]">
            ${filteredRegions.map((item, idx) => {
              const strokeColor = item.trend === 'up' ? '#2cc965' : '#d9534f';
              const fillId = `sparkFill_${idx}`;
              return `
                <tr onclick="showToast('${item.country}: ${item.totalTons} (${item.recycled} recycled via ${item.tech})')" class="hover:bg-gray-50/90 transition cursor-pointer group">
                  <td class="py-2.5 pr-2">
                    <div class="flex items-center gap-2.5">
                      ${item.flagSvg}
                      <div>
                        <div class="font-bold text-[#111c15] leading-tight">${item.country}</div>
                        <div class="text-[10.5px] text-[#8c9690] leading-tight">${item.continent}</div>
                      </div>
                    </div>
                  </td>
                  <td class="py-2.5 font-semibold text-[#37423b]">${item.factory}</td>
                  <td class="py-2.5 font-semibold text-[#37423b]">${item.recycled}</td>
                  <td class="py-2.5 w-28">
                    <svg class="w-24 h-7 overflow-visible" viewBox="0 0 100 28">
                      <defs>
                        <linearGradient id="${fillId}" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="${strokeColor}" stop-opacity="0.28"/>
                          <stop offset="100%" stop-color="${strokeColor}" stop-opacity="0.0"/>
                        </linearGradient>
                      </defs>
                      <path d="${item.sparkPoints} L96,28 L2,28 Z" fill="url(#${fillId})"/>
                      <path d="${item.sparkPoints}" fill="none" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round"/>
                    </svg>
                  </td>
                  <td class="py-2.5">
                    <span class="inline-block px-3 py-1 rounded-lg bg-[#faefd9] text-[#5e4b2b] text-[11px] font-semibold">
                      ${item.tech}
                    </span>
                  </td>
                  <td class="py-2.5 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <span class="font-bold text-[#111c15] text-[12px]">${item.totalTons}</span>
                      <span class="text-gray-400 group-hover:text-gray-700 px-1 font-bold">⋮</span>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Right: Global Pollution Dark Map Card -->
      <div class="dark-map-card p-5 lg:col-span-4 flex flex-col justify-between min-h-[265px] text-white">
        <!-- Top Bar -->
        <div class="flex items-center justify-between relative z-20">
          <h2 class="text-[15.5px] font-bold text-white">Global pollution</h2>
          <div class="relative">
            <select onchange="changeMapRegion(this.value)" class="appearance-none bg-white text-[#111c15] text-[11px] font-bold pl-3 pr-6 py-1 rounded-full cursor-pointer shadow-sm focus:outline-none">
              <option value="Europe" ${state.mapContinent === 'Europe' ? 'selected' : ''}>Europe</option>
              <option value="Asia" ${state.mapContinent === 'Asia' ? 'selected' : ''}>Asia</option>
              <option value="America" ${state.mapContinent === 'America' ? 'selected' : ''}>America</option>
            </select>
            <svg class="w-3 h-3 text-[#111c15] pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <!-- Interactive Layered Emerald Map SVG -->
        <div class="relative my-auto py-1 flex items-center justify-center">
          <svg class="w-full h-[190px] overflow-visible" viewBox="0 0 300 210">
            <!-- Ambient dark landmass silhouettes -->
            <path d="M180,5 L295,5 L295,205 L195,205 L175,165 L190,120 L165,75 Z" fill="#16241b" opacity="0.7"/>
            <!-- Scandinavia -->
            <path onclick="selectMapCountry('Norway & Sweden', 'Low Level', '24%')" class="map-country" d="M128,12 L158,6 L172,28 L160,65 L142,72 L134,54 L118,58 L115,34 Z" fill="#1e4d2f" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Finland -->
            <path onclick="selectMapCountry('Finland', 'Low Level', '19%')" class="map-country" d="M164,18 L184,24 L188,58 L168,64 L160,46 Z" fill="#215e37" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Western Europe (France / Spain / Benelux) -->
            <path onclick="selectMapCountry('France', 'Moderate', '46%')" class="map-country" d="M62,118 L95,105 L114,118 L110,145 L84,156 L55,148 Z" fill="#1d5230" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Germany & Central Europe -->
            <path onclick="selectMapCountry('Germany', 'Moderate', '52%')" class="map-country" d="M106,88 L136,84 L142,114 L114,118 L102,104 Z" fill="#258546" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Poland -->
            <path onclick="selectMapCountry('Poland', 'Elevated', '68%')" class="map-country" d="M136,84 L168,82 L172,110 L142,114 Z" fill="#2eb85c" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Belarus & Baltics -->
            <path onclick="selectMapCountry('Baltic Region', 'Moderate', '57%')" class="map-country" d="M164,66 L194,68 L198,96 L168,94 Z" fill="#258044" stroke="#0d1711" stroke-width="1.2"/>
            <!-- UK -->
            <path onclick="selectMapCountry('United Kingdom', 'Low Level', '33%')" class="map-country" d="M68,74 L86,70 L92,96 L72,98 Z" fill="#1a4529" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Italy & Balkans -->
            <path onclick="selectMapCountry('Italy & Adriatic', 'Moderate', '49%')" class="map-country" d="M110,136 L146,132 L162,164 L148,186 L132,175 L118,154 Z" fill="#1e5733" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Romania / SE Europe -->
            <path onclick="selectMapCountry('Romania', 'High Level', '76%')" class="map-country" d="M156,124 L188,122 L196,148 L164,152 Z" fill="#29a352" stroke="#0d1711" stroke-width="1.2"/>
            <!-- Ukraine (Highlighted Bright Emerald matching reference image) -->
            <path onclick="selectMapCountry('Ukraine', 'High Level', '89%')" class="map-country" d="M168,95 L226,92 L242,116 L224,142 L188,136 L166,120 Z" fill="#3be374" stroke="#0d1711" stroke-width="1.5"/>
          </svg>

          <!-- Frosted Glass Overlay Card (Ukraine 89%) -->
          <div id="mapGlassCard" class="glass-map-badge rounded-2xl px-3.5 py-2.5 w-[170px] absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between transition-all duration-300">
            <div>
              <div id="mapCountryTitle" class="text-[12.5px] font-bold text-white leading-tight">${state.selectedCountry.name}</div>
              <div id="mapCountryLevel" class="text-[10px] text-gray-200/90 leading-tight mt-0.5">${state.selectedCountry.level}</div>
            </div>
            <div class="text-[13px] font-extrabold text-white flex items-center gap-0.5">
              <span id="mapCountryPercent">${state.selectedCountry.percent}</span>
              <span class="text-[11px] text-[#4ade80]">↗</span>
            </div>
          </div>
        </div>

        <!-- Bottom Left Help Button (?) -->
        <div class="flex items-center justify-between relative z-20">
          <button onclick="showToast('Click any highlighted country on the map to inspect real-time air & plastic pollution levels')" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold text-gray-300 transition">
            ?
          </button>
          <span class="text-[10px] text-emerald-400/80 font-medium">Click map regions to inspect</span>
        </div>
      </div>

    </div>

    <!-- ROW 4 (SCROLLABLE BELOW-THE-FOLD SECTION): LIVE SENSOR TELEMETRY & CUSTOM WIDGETS -->
    <div class="dash-card p-5 mb-4 stagger-4">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h3 class="text-[15px] font-bold text-[#111c15]">Global Circular Processing Facilities & Live Stream</h3>
          <p class="text-xs text-[#7c8780]">Real-time throughput across automated sorting & depolymerization hubs (Scrollable section)</p>
        </div>
        <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">14/14 Nodes Online</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-[#f7f9f7] border border-black/[0.04]">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-bold text-[#111c15]">Rotterdam Hydro-Cracker #02</span>
            <span class="text-[11px] font-bold text-emerald-600">96.4% Load</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
            <div class="h-full bg-[#2cc965] rounded-full" style="width: 96.4%"></div>
          </div>
          <div class="flex justify-between text-[11px] text-gray-500">
            <span>Output: 412 tons/day</span>
            <span>CO₂ Saved: -18.4%</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#f7f9f7] border border-black/[0.04]">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-bold text-[#111c15]">Osaka Optical Polymer Sorter</span>
            <span class="text-[11px] font-bold text-emerald-600">88.9% Load</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
            <div class="h-full bg-[#2cc965] rounded-full" style="width: 88.9%"></div>
          </div>
          <div class="flex justify-between text-[11px] text-gray-500">
            <span>Output: 690 tons/day</span>
            <span>Purity: 99.2% rPET</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#f7f9f7] border border-black/[0.04]">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-bold text-[#111c15]">Austin Bio-Enzyme Reactor</span>
            <span class="text-[11px] font-bold text-amber-600">74.2% Load</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
            <div class="h-full bg-amber-500 rounded-full" style="width: 74.2%"></div>
          </div>
          <div class="flex justify-between text-[11px] text-gray-500">
            <span>Output: 285 tons/day</span>
            <span>Zero-Solvent Cycle</span>
          </div>
        </div>
      </div>

      ${state.customWidgets.length > 0 ? `
        <div class="mt-4 pt-4 border-t border-gray-100">
          <div class="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">Custom User Widgets (${state.customWidgets.length})</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${state.customWidgets.map(w => `
              <div class="p-4 rounded-2xl bg-[#122117] text-white flex justify-between items-center">
                <div>
                  <div class="text-[11px] text-emerald-300 font-semibold">${w.tech}</div>
                  <div class="text-sm font-bold mt-0.5">${w.title}</div>
                  <div class="text-xl font-extrabold mt-1">${w.value} <span class="text-xs text-[#2cc965] font-semibold">${w.delta}</span></div>
                </div>
                <span class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#2cc965]">★</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
