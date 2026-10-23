# 🥯 Black Sheep Bagel Cafe — Modern Website Redesign

A fast, responsive, and artisanal web experience redesigned for **[Black Sheep Bagel Cafe](https://www.blacksheepbagelcafe.com/)** in Harvard Square & Cambridgeport, Cambridge, MA.

Built with **React**, **Vite**, and **Tailwind CSS**. Designed for deployment to **GitHub Pages** (cost: **$0/month** compared to their original Squarespace subscription of ~$200–$400/year).

---

## ✨ Features

- **Artisanal Cafe Aesthetic:** Typography crafted with Playfair Display & Inter, warm bakery color palette, and high-resolution imagery.
- **Interactive Menu:**
  - Sandwiches & Toasts (with real-time search & filter)
  - 12+ Hand-Rolled Bagel varieties
  - Scratch-whipped cream cheeses & specialty jams
  - Build-your-own sandwich additions
  - Espresso bar, Caribbean-style Cafe Con Leche, and MEM specialty teas
- **Dual Location Cards:**
  - **Harvard Square Cafe:** 56 JFK St (Hours, Phone, Directions, Walk-in Counter)
  - **Cambridgeport Outpost:** 101 Magazine St (Market, Natural Wines, Union Square Donuts)
- **Live Community & Events:** Tasting pop-ups (Curio Spice, Vine Farmer Wines, Mei Mei Dumplings) and Instagram photo stream (`#BAAAGELS`).
- **Interactive Inquiries:** Direct contact modal connecting to the bakery team.
- **Production Performance:** Sub-second load times, 100% responsive, zero bloated runtime trackers.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚀 Deployment

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`).

To enable GitHub Pages:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Every push to the `main` branch will automatically build and publish the live site.
