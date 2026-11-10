// Settings view: workspace preferences, telemetry controls, API credentials.
import { BRAND } from '../config.js';
import { showToast } from '../ui.js';

export function renderSettingsView(subMenu) {
  return `
    <div class="dash-card p-6 mb-4 stagger-1">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100">
        <div>
          <h2 class="text-base font-bold text-[#111c15]">Workspace & Telemetry Configuration (${state.workspace})</h2>
          <p class="text-xs text-gray-500">Manage environmental alert thresholds, API keys, and account security for ${BRAND.user.name} (${BRAND.user.handle})</p>
        </div>
        <button onclick="showToast('Workspace configuration saved!')" class="px-4 py-2 rounded-xl bg-[#2cc965] text-[#0b170f] text-xs font-extrabold hover:brightness-105 transition">
          Save Changes
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div class="space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-gray-400">Automated Telemetry Controls</h3>

          <label class="flex items-center justify-between p-3.5 rounded-2xl bg-[#f7f9f7] cursor-pointer">
            <div>
              <div class="text-xs font-bold text-[#111c15]">Real-Time Pollution Spike Alerts</div>
              <div class="text-[11px] text-gray-500">Notify immediately when regional index exceeds 80%</div>
            </div>
            <input type="checkbox" checked onchange="showToast('Pollution Spike Alert setting updated')" class="w-4 h-4 accent-[#2cc965]" />
          </label>

          <label class="flex items-center justify-between p-3.5 rounded-2xl bg-[#f7f9f7] cursor-pointer">
            <div>
              <div class="text-xs font-bold text-[#111c15]">Automated Weekly ESG Ledger Backup</div>
              <div class="text-[11px] text-gray-500">Archive verified CO₂ tonnage every Sunday 00:00 UTC</div>
            </div>
            <input type="checkbox" checked onchange="showToast('Weekly ESG backup toggled')" class="w-4 h-4 accent-[#2cc965]" />
          </label>

          <label class="flex items-center justify-between p-3.5 rounded-2xl bg-[#f7f9f7] cursor-pointer">
            <div>
              <div class="text-xs font-bold text-[#111c15]">High-Contrast Chart Animations</div>
              <div class="text-[11px] text-gray-500">Smooth cubic-bezier transitions when switching menus</div>
            </div>
            <input type="checkbox" checked class="w-4 h-4 accent-[#2cc965]" />
          </label>
        </div>

        <div class="space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-gray-400">API Credentials & Profile</h3>
          <div class="p-4 rounded-2xl bg-[#122117] text-white">
            <div class="text-[11px] text-emerald-400 font-semibold">Production Telemetry Endpoint</div>
            <div class="text-xs font-mono bg-black/30 p-2.5 rounded-xl mt-2 border border-white/10 select-all">
              wss://stream.aeuxglobal.io/v4/ecoplastic-live
            </div>
            <div class="flex items-center justify-between mt-3">
              <span class="text-[11px] text-gray-400">Key: <code class="text-gray-200">aeux_live_99681m_x8f2</code></span>
              <button onclick="showToast('API Key rotated and copied!')" class="text-xs font-bold text-[#2cc965] hover:underline">Rotate Token</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
