// Support view: priority ticket form + live status + FAQ.
import { showToast } from '../ui.js';

export function renderSupportView(subMenu) {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 stagger-1">
      <!-- Ticket Form -->
      <div class="dash-card p-5 lg:col-span-7">
        <h2 class="text-base font-bold text-[#111c15] mb-1">Priority Telemetry & Sensor Support</h2>
        <p class="text-xs text-gray-500 mb-4">Direct engineering channel for factory IoT calibration & ESG audit assistance</p>

        <form onsubmit="event.preventDefault(); showToast('Support ticket #SUP-4921 dispatched to Environmental Engineering!'); this.reset();" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Affected Facility or Region</label>
            <select class="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold bg-white">
              <option>Europe — Germany Mechanical Plant #14</option>
              <option>Europe — Ukraine Atmospheric Sensor Node</option>
              <option>America — USA Recycling Hub #08</option>
              <option>Asia — Japan Energy Recovery Grid</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Issue Summary</label>
            <input type="text" required placeholder="e.g. Requesting recalibration for optical polymer sorter" class="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-emerald-600"/>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Detailed Diagnostic Notes</label>
            <textarea rows="3" required placeholder="Describe sensor readings or compliance query..." class="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-emerald-600"></textarea>
          </div>
          <button type="submit" class="px-5 py-2.5 rounded-xl bg-[#121d16] hover:bg-[#1f3125] text-white text-xs font-bold transition">
            Submit Priority Ticket
          </button>
        </form>
      </div>

      <!-- Live System Status & FAQ -->
      <div class="lg:col-span-5 space-y-4">
        <div class="tilted-pollution-card rounded-[20px] p-5 text-white">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-[#2cc965] uppercase tracking-wider">Global Mesh Status</span>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[#2cc965] text-[11px] font-bold">99.98% Online</span>
          </div>
          <div class="text-xl font-extrabold mt-2">All 1,383 Factory Nodes Operational</div>
          <p class="text-xs text-gray-400 mt-1">Last synchronized 14 seconds ago via satellite & fiber telemetry</p>
        </div>

        <div class="dash-card p-5 space-y-3">
          <h3 class="text-sm font-bold text-[#111c15]">Frequently Asked Questions</h3>
          <div class="p-3 rounded-xl bg-[#f7f9f7]">
            <div class="text-xs font-bold text-[#111c15]">How is the Climate Change Index (CCI) calculated?</div>
            <div class="text-[11px] text-gray-600 mt-1">CCI aggregates particulate μg/m³, regional recycling ratios, and verified CO₂ offsets across weekly intervals (W1–W7).</div>
          </div>
          <div class="p-3 rounded-xl bg-[#f7f9f7]">
            <div class="text-xs font-bold text-[#111c15]">Can we connect custom SCADA factory sensors?</div>
            <div class="text-[11px] text-gray-600 mt-1">Yes—navigate to Settings → API & Sensors to provision an encrypted MQTT/REST webhook token.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
