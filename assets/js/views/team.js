// Team Structure view: department summary + leadership directory.
import { TEAM_MEMBERS } from '../data.js';
import { showToast } from '../ui.js';

export function renderTeamView(subMenu) {
  const filtered = subMenu === 'all_depts'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.dept === subMenu);

  return `
    <!-- Department Summary Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 stagger-1">
      <div class="tilted-pollution-card rounded-[20px] p-5 text-white">
        <div class="text-xs text-[#8fa395]">Environmental R&D Lab</div>
        <div class="text-2xl font-extrabold mt-1">16 Specialists</div>
        <div class="text-[11px] text-[#2cc965] font-semibold mt-2">12 Active Patents in Depolymerization</div>
      </div>
      <div class="dash-card p-5">
        <div class="text-xs text-gray-500">Global Field Operations</div>
        <div class="text-2xl font-extrabold text-[#111c15] mt-1">18 Leads</div>
        <div class="text-[11px] text-emerald-600 font-semibold mt-2">Managing 1,383+ Partner Factories</div>
      </div>
      <div class="sage-card p-5">
        <div class="text-xs text-[#4b6052] font-semibold">Data Science & AI Telemetry</div>
        <div class="text-2xl font-extrabold text-[#111c15] mt-1">8 Engineers</div>
        <div class="text-[11px] text-[#1e7e41] font-semibold mt-2">99.98% Sensor Uptime SLA</div>
      </div>
    </div>

    <!-- Team Member Cards Grid (Scrollable) -->
    <div class="dash-card p-5 mb-4 stagger-2">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-base font-bold text-[#111c15]">Active Sustainability Leadership Directory</h2>
          <p class="text-xs text-gray-500">Click any specialist card to inspect current OKR deliverables</p>
        </div>
        <button onclick="showToast('Invitation link copied to clipboard!')" class="px-3.5 py-2 rounded-xl bg-[#121d16] text-white text-xs font-semibold hover:bg-[#1f3226] transition">
          + Invite Member
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        ${filtered.map(person => {
          const initials = person.name.split(' ').map(n => n[0]).join('').slice(0,2);
          return `
            <div onclick="showToast('${person.name} — ${person.role} (${person.loc})')" class="p-4 rounded-2xl bg-[#f7f9f7] hover:bg-white border border-black/[0.05] hover:shadow-md transition cursor-pointer flex flex-col justify-between">
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full text-white font-bold text-xs flex items-center justify-center flex-shrink-0" style="background:${person.avatarBg}">
                    ${initials}
                  </div>
                  <div>
                    <div class="text-sm font-bold text-[#111c15]">${person.name}</div>
                    <div class="text-[11px] text-gray-500">${person.role}</div>
                  </div>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">${person.status}</span>
              </div>

              <div class="mt-4 pt-3 border-t border-gray-200/70">
                <div class="flex justify-between text-[11px] text-gray-500 mb-1">
                  <span>Hub: <strong class="text-gray-800">${person.loc}</strong></span>
                  <span>KPI Index: <strong class="text-emerald-700">${person.score}%</strong></span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                  <div class="h-full bg-[#2cc965] rounded-full" style="width:${person.score}%"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
