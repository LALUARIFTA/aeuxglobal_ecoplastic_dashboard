# aeuxglobal_ecoplastic_dashboard

Dashboard web dinamis berbasis **vanilla JavaScript + Tailwind (CDN)** — tanpa build step, tanpa framework. Siap di-fork/rebrand oleh siapa saja: cukup edit satu file config.

## ✨ Fitur

- SPA router (menu + sub-menu) dengan transisi animasi
- Dashboard: KPI cards, Climate Change Index chart interaktif, tabel region, peta polusi interaktif
- Analytics, Team Structure, Reports, Support (form tiket), Settings
- Workspace switcher (multiplier angka KPI per workspace)
- Quick search modal (`Ctrl/⌘ + F`)
- Add Custom Widget modal
- Toast notifikasi

## 🚀 Menjalankan Lokal

Karena memakai ES Modules, wajib lewat HTTP server (bukan buka file langsung):

```bash
# salah satu dari:
python -m http.server 8000
npx serve .
```

Lalu buka `http://localhost:8000`.

## 🎨 Rebranding (untuk pengguna baru)

| File | Apa yang diubah |
|---|---|
| `assets/js/config.js` | Nama brand, user, title, workspaces, menu/sub-menu, search entries |
| `assets/js/data.js` | Dataset: region table, CCI bars, polymers, team members, reports |
| `assets/css/styles.css` | Tema warna via CSS variables (`:root`) |

Sidebar nav & ikon berupa SVG unik per menu — tetap di `index.html`.

## 📁 Struktur

```
├── index.html              # Shell aplikasi (sidebar, header, modals)
├── assets/
│   ├── css/styles.css      # Tema & animasi
│   └── js/
│       ├── main.js         # Router, state transitions, wiring event
│       ├── config.js       # ⭐ Brand, workspaces, menus (titik rebranding)
│       ├── data.js         # ⭐ Dataset domain (swap dengan data Anda)
│       ├── store.js        # Shared state object
│       ├── ui.js           # Toast, counter, tooltip, scroll helpers
│       └── views/          # Satu modul render per menu
│           ├── dashboard.js
│           ├── analytics.js
│           ├── team.js
│           ├── reports.js
│           ├── support.js
│           └── settings.js
└── README.md
```

## ☁️ Deploy ke GitHub Pages

1. Push repo ini ke GitHub
2. `Settings → Pages → Source: Deploy from a branch → main / (root)`
3. Selesai — site live di `https://<user>.github.io/aeuxglobal_ecoplastic_dashboard/`

## 📄 Lisensi

Bebas digunakan dan dimodifikasi.
