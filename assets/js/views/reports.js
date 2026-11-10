// Reports view: 8-badge repository with interactive download actions.
import { REPORTS_DATA } from '../data.js';
import { showToast } from '../ui.js';

export function renderReportsView(subMenu) {
  const filtered = subMenu === 'all_reports'
    ? REPORTS_DATA
    : REPORTS_DATA.filter(r => r.cat === subMenu);

  return `
    <div class="dash-card p-5 mb-4 stagger-1">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h2 class="text-base font-bold text-[#111c15]">Verified Sustainability & ESG Audit Repository</h2>
          <p class="text-xs text-gray-500">All 8 regulatory & executive reports synchronized with blockchain carbon registry</p>
        </div>
        <button onclick="showToast('Generating consolidated ZIP archive of all 8 reports...')" class="px-4 py-2 rounded-xl bg-[#121d16] text-white text-xs font-semibold hover:bg-[#1f3125] transition">
          Download All (8)
        </button>
      </div>

      <div class="space-y-2.5">
        ${filtered.map(r => `
          <div class="p-4 rounded-2xl bg-[#f7f9f7] hover:bg-white border border-black/[0.05] transition flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-[#122117] text-[#2cc965] flex items-center justify-center font-bold text-xs flex-shrink-0">
                PDF
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-[11px] font-bold text-emerald-700">${r.id}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${r.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${r.status}</span>
                </div>
                <div class="text-sm font-bold text-[#111c15] mt-0.5">${r.title}</div>
                <div class="text-[11px] text-gray-500">${r.date} • ${r.size}</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="showToast('Exporting ${r.id}: ${r.title}')" class="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#121d16] hover:text-white border border-gray-200 text-xs font-semibold transition">
                Download Report
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
