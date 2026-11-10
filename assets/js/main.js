// App bootstrap: router, state transitions, modal/search orchestration.
// Inline onclick handlers in templates reference window.* functions
// exported here (ES modules are not global by default).
import { state } from './store.js';
import { BRAND, MENU_CONFIG, WORKSPACES, SEARCH_ITEMS } from './config.js';
import { showToast, animateNumericCounters, updateCciTooltip, scrollToBottomSmooth } from './ui.js';
import { renderDashboardView } from './views/dashboard.js';
import { renderAnalyticsView } from './views/analytics.js';
import { renderTeamView } from './views/team.js';
import { renderReportsView } from './views/reports.js';
import { renderSupportView } from './views/support.js';
import { renderSettingsView } from './views/settings.js';

// --- Core Navigation & Sub-Menu Switching ---
function switchMenu(menuKey, optionalSubMenuKey = null) {
  if (!MENU_CONFIG[menuKey]) return;

  state.currentMenu = menuKey;
  const config = MENU_CONFIG[menuKey];
  state.currentSubMenu = optionalSubMenuKey || config.subMenus[0].id;

  // Update Sidebar Active Button
  document.querySelectorAll('#sidebarNav .nav-btn, aside .nav-btn').forEach(btn => {
    if (btn.getAttribute('data-menu') === menuKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Top Header Title
  document.getElementById('mainHeaderTitle').textContent = config.title;

  // Render Sub-Menu Tabs
  renderSubMenuTabs();

  // Scroll viewport container back to top smoothly and trigger page transition
  const scrollBox = document.getElementById('viewportScrollContainer');
  scrollBox.scrollTo({ top: 0, behavior: 'smooth' });

  renderCurrentView();
}

function switchSubMenu(subMenuId) {
  state.currentSubMenu = subMenuId;
  renderSubMenuTabs();
  const scrollBox = document.getElementById('viewportScrollContainer');
  scrollBox.scrollTo({ top: 0, behavior: 'smooth' });
  renderCurrentView();
}

function renderSubMenuTabs() {
  const config = MENU_CONFIG[state.currentMenu];
  const container = document.getElementById('subMenuTabsContainer');
  container.innerHTML = config.subMenus.map(sub => {
    const isActive = sub.id === state.currentSubMenu;
    return `
      <button onclick="switchSubMenu('${sub.id}')" class="submenu-tab ${isActive ? 'active' : ''}">
        ${sub.label}
      </button>
    `;
  }).join('');
}

// --- Main View Router ---
function renderCurrentView() {
  const container = document.getElementById('menuViewContent');
  // Retrigger smooth page enter animation
  container.classList.remove('animate-page-enter');
  void container.offsetWidth;
  container.classList.add('animate-page-enter');

  const { currentMenu, currentSubMenu } = state;

  if (currentMenu === 'dashboard') {
    container.innerHTML = renderDashboardView(currentSubMenu);
  } else if (currentMenu === 'analytics') {
    container.innerHTML = renderAnalyticsView(currentSubMenu);
  } else if (currentMenu === 'team') {
    container.innerHTML = renderTeamView(currentSubMenu);
  } else if (currentMenu === 'reports') {
    container.innerHTML = renderReportsView(currentSubMenu);
  } else if (currentMenu === 'support') {
    container.innerHTML = renderSupportView(currentSubMenu);
  } else if (currentMenu === 'settings') {
    container.innerHTML = renderSettingsView(currentSubMenu);
  }

  // Run animated numeric counters
  animateNumericCounters();
}

// --- Chart / Filter / Map Interactions ---
function changeCciPeriod(period) {
  state.cciPeriod = period;
  renderCurrentView();
  showToast(`Climate Change Index updated to ${period} window`);
}

function changeRegionFilter(region) {
  state.regionFilter = region;
  renderCurrentView();
  showToast(`Filtered table by: ${region}`);
}

function changeMapRegion(continent) {
  state.mapContinent = continent;
  if (continent === 'Europe') {
    selectMapCountry('Ukraine', 'High Level', '89%');
  } else if (continent === 'Asia') {
    selectMapCountry('East Asia Hub', 'Elevated', '74%');
  } else {
    selectMapCountry('North America', 'Moderate', '51%');
  }
}

function selectMapCountry(name, level, percent) {
  state.selectedCountry = { name, level, percent };
  const titleEl = document.getElementById('mapCountryTitle');
  const levelEl = document.getElementById('mapCountryLevel');
  const pctEl = document.getElementById('mapCountryPercent');
  const cardEl = document.getElementById('mapGlassCard');

  if (titleEl && levelEl && pctEl && cardEl) {
    cardEl.classList.add('scale-95', 'opacity-80');
    setTimeout(() => {
      titleEl.textContent = name;
      levelEl.textContent = level;
      pctEl.textContent = percent;
      cardEl.classList.remove('scale-95', 'opacity-80');
    }, 120);
  }
  showToast(`Selected Map Region: ${name} (${level} — ${percent})`);
}

// --- Workspace Switcher (rendered from config.WORKSPACES) ---
function toggleWorkspaceDropdown() {
  const dd = document.getElementById('workspaceDropdown');
  const chev = document.getElementById('workspaceChevron');
  dd.classList.toggle('hidden');
  chev.classList.toggle('rotate-180');
}

function renderWorkspaceDropdown() {
  const dd = document.getElementById('workspaceDropdown');
  dd.innerHTML = WORKSPACES.map((w, i) => `
    <button onclick="selectWorkspace('${w.name}', '${w.color}', ${w.multiplier})" class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium ${w.name === state.workspace ? 'text-white' : 'text-gray-300'} hover:bg-white/10 transition">
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full" style="background:${w.color}"></span>${w.name}</span>
      <span class="text-[10px] ${i === 0 ? 'text-emerald-400' : 'text-gray-400'}">${w.tag}</span>
    </button>
  `).join('');
}

function selectWorkspace(name, color, mult) {
  state.workspace = name;
  state.multiplier = mult;
  document.getElementById('currentWorkspaceName').textContent = name;
  document.getElementById('workspaceDropdown').classList.add('hidden');
  document.getElementById('workspaceChevron').classList.remove('rotate-180');
  renderWorkspaceDropdown();
  renderCurrentView();
  showToast(`Switched workspace to ${name}`);
}

// --- Notification Popover ---
function toggleNotificationPopover() {
  document.getElementById('notifPopover').classList.toggle('hidden');
}

function clearNotifications() {
  document.getElementById('notifDot').classList.add('hidden');
  document.getElementById('notifPopover').classList.add('hidden');
  showToast('All telemetry notifications marked as read');
}

// --- Add Custom Widget Modal ---
function openWidgetModal() {
  document.getElementById('widgetModal').classList.remove('hidden');
}

function closeWidgetModal() {
  document.getElementById('widgetModal').classList.add('hidden');
}

function handleCreateWidget(e) {
  e.preventDefault();
  const title = document.getElementById('newWidgetTitle').value.trim();
  const value = document.getElementById('newWidgetValue').value.trim();
  const delta = document.getElementById('newWidgetDelta').value.trim();
  const tech = document.getElementById('newWidgetTech').value;

  state.customWidgets.push({ title, value, delta, tech });
  closeWidgetModal();
  switchMenu('dashboard', 'overview');
  setTimeout(() => {
    scrollToBottomSmooth();
    showToast(`Added custom widget "${title}" to Dashboard`);
  }, 250);
}

// --- Quick Search Modal (Cmd/Ctrl + F) ---
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  modal.classList.remove('hidden');
  const input = document.getElementById('quickSearchInput');
  input.value = '';
  filterQuickSearch('');
  setTimeout(() => input.focus(), 60);
}

function closeSearchModal() {
  document.getElementById('searchModal').classList.add('hidden');
}

function filterQuickSearch(query) {
  const q = query.toLowerCase().trim();
  const results = SEARCH_ITEMS.filter(item => item.label.toLowerCase().includes(q));
  const box = document.getElementById('quickSearchResults');
  box.innerHTML = results.map(r => `
    <button onclick="switchMenu('${r.menu}', '${r.sub}'); closeSearchModal();" class="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition flex items-center justify-between text-xs">
      <span class="font-medium text-gray-200">${r.label}</span>
      <span class="text-[10px] text-[#2cc965] font-bold">Jump →</span>
    </button>
  `).join('') || `<div class="text-xs text-gray-400 py-4 text-center">No matching modules found</div>`;
}

// --- Keyboard shortcut Cmd/Ctrl+F or Escape ---
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
    e.preventDefault();
    openSearchModal();
  } else if (e.key === 'Escape') {
    closeSearchModal();
    closeWidgetModal();
  }
});

// --- Initialize Application on Load ---
window.addEventListener('DOMContentLoaded', () => {
  // Template rebranding from config.js
  document.title = BRAND.title;
  document.getElementById('brandName').textContent = BRAND.name;
  document.getElementById('profileName').textContent = BRAND.user.name;
  document.getElementById('profileHandle').textContent = BRAND.user.handle;
  const ws = WORKSPACES[0];
  state.workspace = ws.name;
  state.multiplier = ws.multiplier;
  document.getElementById('currentWorkspaceName').textContent = ws.name;
  renderWorkspaceDropdown();

  renderSubMenuTabs();
  renderCurrentView();
});

// Expose handlers used by inline onclick in the shell & view templates.
Object.assign(window, {
  switchMenu, switchSubMenu, renderSubMenuTabs, renderCurrentView,
  changeCciPeriod, changeRegionFilter, changeMapRegion, selectMapCountry,
  toggleWorkspaceDropdown, selectWorkspace,
  toggleNotificationPopover, clearNotifications,
  openWidgetModal, closeWidgetModal, handleCreateWidget,
  openSearchModal, closeSearchModal, filterQuickSearch,
  showToast, updateCciTooltip, scrollToBottomSmooth
});
