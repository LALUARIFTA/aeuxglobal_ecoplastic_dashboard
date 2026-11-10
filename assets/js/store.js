// Shared application state. Views read from here; main.js mutates it.
export const state = {
  currentMenu: 'dashboard',
  currentSubMenu: 'overview',
  workspace: 'EcoPlastic',
  multiplier: 1.0,
  cciPeriod: '2 month',
  activeCciBarIndex: 23, // Bar W4 peak with 82.6 CCI matching reference image
  regionFilter: 'All regions',
  mapContinent: 'Europe',
  selectedCountry: {
    name: 'Ukraine',
    level: 'High Level',
    percent: '89%'
  },
  customWidgets: []
};
