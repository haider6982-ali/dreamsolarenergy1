# Dream Solar Energy — Official Web Platform

Modern, responsive web platform for **Dream Solar Energy** — South Punjab's premier solar engineering and hardware retail company located on Allama Iqbal Road, Vehari, Pakistan.

Built with Next.js 16 (App Router), React 19, TypeScript, and modern Tailwind CSS.

---

## 🏢 Business Overview

- **Company**: Dream Solar Energy
- **Proprietor**: Muhammad Tariq Mahmood
- **Head Office**: Allama Iqbal Road, Near Bank of Punjab, Vehari, Punjab, Pakistan
- **Contact / WhatsApp**: [+92 320 2200884](https://wa.me/923202200884) / 0320 2200884
- **Coverage**: Vehari, Burewala, Mailsi, Multan, Khanewal, Lodhran, and surrounding districts of South Punjab
- **Services**: Turnkey Residential, Commercial, Industrial, and Agricultural Solar Systems; MEPCO Net-Metering Liaison; Tier-1 Hardware Distribution

---

## 🌐 Website Architecture & Routes

| Route | Page File | Description |
| :--- | :--- | :--- |
| `/` | [`app/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/page.tsx) | Homepage featuring panoramic Hero, Core Services, Guarantee, Interactive Savings Calculator, 4-Step Turnkey Process with Animated Drop Lines, Featured Turnkey Packages, and Testimonials. |
| `/about` | [`app/about/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/about/page.tsx) | Company story, engineering mission, proprietor profile (Muhammad Tariq Mahmood), key statistics, core values, and showroom details. |
| `/products` | [`app/products/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/products/page.tsx) | Interactive catalog featuring Complete Turnkey Solar Packages (3kW to 20kW+) and Hardware Specifications (Panels, Inverters, Batteries, Structures). |
| `/services` | [`app/services/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/services/page.tsx) | Comprehensive breakdown of Residential Solar, Commercial Solar, Agriculture/Tube Wells, MEPCO Net-Metering, and Maintenance services. |
| `/calculator` | [`app/calculator/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/calculator/page.tsx) | Standalone interactive Solar Savings & Capacity Estimator with real-time tariff return calculations in PKR. |
| `/contact` | [`app/contact/page.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/app/contact/page.tsx) | Office location, interactive Google Maps directions, phone contacts, direct WhatsApp action, and site survey inquiry form. |

---

## 🎨 Design System & Visual Identity

- **Primary Navy**: `#0D2354`
- **Solar Amber / Gold**: `#F59E0B` (Hover: `#D97706`)
- **Clean Energy Green**: `#16A34A` / `#22C55E`
- **WhatsApp Emerald**: `#25D366`
- **Backgrounds**: Crisp modern white surfaces (`#FFFFFF`), light slate contrasts (`#F8FAFC`), and dark slate accents (`#020617` / `#0D2354`)
- **Typography**: Display font `Outfit` paired with clean system sans-serif

---

## 🛠️ Tech Stack & Key Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Tailwind CSS with custom micro-animations (drop-line electrical beams, pulse glows, smooth transitions)
- **Modals & Global State**: React Context API (`QuoteModalContext`) for instant quote requests across any page

---

## 🚀 Development & Production Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (TypeScript check & Static Optimization)
npm run build

# 4. Start production server
npm start

# 5. Run linting checks
npm run lint
```
