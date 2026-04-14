<div align="center">

# 🩺 Arogya Assam

### Smartphone-Based Anemia Screening for Rural Assam

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**Empowering ASHA workers with a free, offline-capable anemia screening tool that delivers results in under 5 minutes.**

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues) · [Contributing](#-contributing)

---

<!-- HERO SCREENSHOT -->
<!-- 📸 Add your hero screenshot below -->
<img src="" alt="Arogya Assam Hero" width="800"/>

<!-- Replace the src with your actual screenshot path, e.g.: -->
<!-- <img src="public/screenshots/hero.png" alt="Arogya Assam Hero" width="800"/> -->

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [The Problem](#-the-problem)
- [Screenshots](#-screenshots)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [Feature Roadmap](#-feature-roadmap)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgements](#-acknowledgements)

---

## 🏥 About The Project

**Arogya Assam** is a healthcare platform built to tackle the silent crisis of anemia in rural Assam, India. Designed for **ASHA (Accredited Social Health Activist) workers**, it provides a WHO-aligned symptom-based screening tool accessible from any smartphone — **no internet required for screening**.

Patients can also locate nearby hospitals using pincode-based search powered by OpenStreetMap, and access their results through a secure, authenticated portal.

> 🎯 **Mission**: Make anemia screening accessible, free, and fast for every village in Assam.

---

## 🔴 The Problem

| Statistic | Detail |
|-----------|--------|
| **50%+** | Women in Assam are anemic (NFHS-5) |
| **67%** | Children under 5 are anemic |
| **Limited** | Access to diagnostic labs in rural areas |
| **Low** | Awareness about anemia symptoms |

Traditional screening requires blood tests, lab equipment, and trained technicians — resources scarce in rural Assam. **Arogya Assam bridges this gap** with a digital-first, symptom-based approach.

---

## 📸 Screenshots

<div align="center">

### Landing Page
<!-- 📸 Add screenshot -->
<img src="" alt="Landing Page" width="700"/>

### Anemia Screening Tool
<!-- 📸 Add screenshot -->
<img src="" alt="Screening Tool" width="700"/>

### Hospital Finder
<!-- 📸 Add screenshot -->
<img src="" alt="Hospital Finder" width="700"/>

### Authentication
<!-- 📸 Add screenshot -->
| Sign In | Sign Up |
|---------|---------|
| <img src="" alt="Sign In" width="350"/> | <img src="" alt="Sign Up" width="350"/> |

### Mobile View
<!-- 📸 Add screenshot -->
| Home | Screening | Results |
|------|-----------|---------|
| <img src="" alt="Mobile Home" width="220"/> | <img src="" alt="Mobile Screening" width="220"/> | <img src="" alt="Mobile Results" width="220"/> |

</div>

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                        │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────┐   │
│  │ Landing  │  │ Screening│  │   Auth   │  │   Hospital    │   │
│  │  Page    │  │   Tool   │  │  Pages   │  │   Finder      │   │
│  └──────────┘  └──────────┘  └──────────┘  └───────────────┘   │
│       │              │             │               │            │
└───────┼──────────────┼─────────────┼───────────────┼────────────┘
        │              │             │               │
        ▼              ▼             ▼               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NEXT.JS 16 SERVER                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Middleware Layer                       │    │
│  │            (Route Protection & Auth Guards)               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              │                                   │
│  ┌──────────────┐  ┌────────┴────────┐  ┌──────────────────┐   │
│  │  Better Auth │  │   API Routes    │  │  Server Actions  │   │
│  │   Handler    │  │  /api/auth/*    │  │                  │   │
│  └──────┬───────┘  └────────┬────────┘  └────────┬─────────┘   │
│         │                   │                     │              │
└─────────┼───────────────────┼─────────────────────┼──────────────┘
          │                   │                     │
          ▼                   ▼                     ▼
┌─────────────────┐  ┌───────────────┐  ┌─────────────────────┐
│   PostgreSQL    │  │  OpenStreetMap│  │   External Auth     │
│   (Neon DB)     │  │  Nominatim + │  │  ┌───────┐ ┌──────┐ │
│                 │  │  Overpass API │  │  │Google │ │GitHub│ │
│  ┌───────────┐  │  └───────────────┘  │  │ OAuth │ │OAuth │ │
│  │   Users   │  │                     │  └───────┘ └──────┘ │
│  │ Sessions  │  │  ┌───────────────┐  └─────────────────────┘
│  │ Accounts  │  │  │    Resend     │
│  │Verification│ │  │ (Email API)   │
│  └───────────┘  │  └───────────────┘
└─────────────────┘
```

### Request Flow

```
User Request
     │
     ▼
┌──────────┐    ┌──────────────┐    ┌─────────────┐
│ Next.js  │───▶│  Middleware   │───▶│  Page/API   │
│  Router  │    │ (Auth Check) │    │   Handler   │
└──────────┘    └──────────────┘    └──────┬──────┘
                                           │
                    ┌──────────────────────┬┘
                    ▼                      ▼
             ┌─────────────┐      ┌──────────────┐
             │  Prisma ORM │      │ OpenStreetMap│
             │  (Database) │      │     APIs     │
             └─────────────┘      └──────────────┘
```

### Screening Algorithm Flow

```
Start Screening
       │
       ▼
┌──────────────┐
│  10 Clinical │
│  Questions   │
│  (EN + AS)   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Risk Score   │
│ Calculation  │
│  (0 - 100)   │
└──────┬───────┘
       │
       ├── Score ≤ 30  ──▶ 🟢 Low Risk
       │
       ├── Score 31-60 ──▶ 🟡 Medium Risk
       │
       └── Score > 60  ──▶ 🔴 High Risk
                               │
                               ▼
                        ┌──────────────┐
                        │ Recommend    │
                        │ Nearby       │
                        │ Hospitals    │
                        └──────────────┘
```

---

## ⚙ Tech Stack

<div align="center">

### Frontend
| Technology | Purpose |
|:----------:|:-------:|
| ![Next.js](https://img.shields.io/badge/Next.js_16-000?style=flat-square&logo=next.js) | React Framework (App Router) |
| ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) | UI Library |
| ![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type Safety |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Styling |
| ![Shadcn](https://img.shields.io/badge/shadcn/ui-000?style=flat-square&logo=shadcnui&logoColor=white) | Component Library |
| ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat-square) | Data Visualization |
| ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square) | Icons |

### Backend
| Technology | Purpose |
|:----------:|:-------:|
| ![Better Auth](https://img.shields.io/badge/Better_Auth-000?style=flat-square) | Authentication Framework |
| ![Prisma](https://img.shields.io/badge/Prisma_ORM-2D3748?style=flat-square&logo=prisma&logoColor=white) | Database ORM |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) | Database |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white) | Schema Validation |
| ![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=flat-square) | Password Hashing |

### Services & APIs
| Technology | Purpose |
|:----------:|:-------:|
| ![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=flat-square&logo=openstreetmap&logoColor=white) | Hospital Geolocation |
| ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=flat-square&logo=googlemaps&logoColor=white) | Navigation Links |
| ![Resend](https://img.shields.io/badge/Resend-000?style=flat-square) | Email Service |
| ![Upstash](https://img.shields.io/badge/Upstash_Redis-00E9A3?style=flat-square&logo=upstash&logoColor=black) | Rate Limiting |

### DevOps & Tooling
| Technology | Purpose |
|:----------:|:-------:|
| ![Neon](https://img.shields.io/badge/Neon_DB-000?style=flat-square&logo=neon&logoColor=white) | Serverless PostgreSQL |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | Code Linting |
| ![Turbopack](https://img.shields.io/badge/Turbopack-000?style=flat-square&logo=vercel&logoColor=white) | Dev Server Bundler |

</div>

---

## ✨ Features

### Core Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🩺 **Anemia Screening** | 10-question WHO-aligned symptom assessment | ✅ Live |
| 🌐 **Bilingual Support** | English + Assamese (অসমীয়া) | ✅ Live |
| 📊 **Risk Scoring** | Clinical scoring algorithm (0-100 scale) | ✅ Live |
| 🏥 **Hospital Finder** | Pincode-based nearby hospital search | ✅ Live |
| 🗺 **Navigation** | Google Maps integration for directions | ✅ Live |
| 🔐 **Authentication** | Email/password + Google & GitHub OAuth | ✅ Live |
| 📱 **Responsive Design** | Mobile-first UI for smartphone users | ✅ Live |
| ⚡ **Offline Screening** | Screening works without internet | ✅ Live |

### Screening Questions Include

- Age group classification
- Fatigue level assessment (1-5 scale)
- Breathlessness detection
- Dizziness/lightheadedness check
- Pica/unusual cravings indicator
- Heart palpitation assessment
- Pallor severity (none/mild/severe)
- Iron-rich food intake frequency
- Menstrual bleeding assessment
- Recent blood loss history

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm/bun)
- **PostgreSQL** database (or a [Neon](https://neon.tech) account)
- **Google OAuth** credentials ([Google Cloud Console](https://console.cloud.google.com))
- **GitHub OAuth** credentials ([GitHub Developer Settings](https://github.com/settings/developers))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/arogya-assam.git
cd arogya-assam

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your credentials (see Environment Variables section)

# 4. Set up the database
npx prisma generate
npx prisma db push

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# ──────────────── Database ────────────────
DATABASE_URL="postgresql://user:password@host:5432/arogya_assam"

# ──────────────── Authentication ────────────────
BETTER_AUTH_SECRET="your-secret-key-min-32-chars"
BETTER_AUTH_URL="http://localhost:3000"

# ──────────────── Google OAuth ────────────────
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ──────────────── GitHub OAuth ────────────────
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# ──────────────── Email (Optional) ────────────────
RESEND_API_KEY="your-resend-api-key"

# ──────────────── App URLs ────────────────
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

> ⚠ **Important**: Never commit your `.env` file. It is already included in `.gitignore`.

---

## 🗄 Database Setup

### Schema Overview

```prisma
model User {
  id            String    @id
  name          String
  email         String    @unique
  emailVerified Boolean
  image         String?
  sessions      Session[]
  accounts      Account[]
}

model Session {
  id        String   @id
  token     String   @unique
  expiresAt DateTime
  ipAddress String?
  userAgent String?
  userId    String   → User
}

model Account {
  id           String  @id
  provider     String         // google, github, credential
  accessToken  String?
  refreshToken String?
  userId       String  → User
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
}
```

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio

# Create a migration
npx prisma migrate dev --name init
```

---

## 📁 Project Structure

```
arogya-assam/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, theme, providers)
│   ├── page.tsx                  # Landing page
│   ├── screen/
│   │   └── page.tsx              # Anemia screening questionnaire
│   ├── result/
│   │   └── page.tsx              # Screening results display
│   ├── hospitals/
│   │   └── page.tsx              # Hospital finder (protected)
│   ├── dashboard/
│   │   └── page.tsx              # Patient dashboard (protected)
│   ├── signin/
│   │   └── page.tsx              # Sign in page
│   ├── signup/
│   │   └── page.tsx              # Sign up page
│   ├── soon/
│   │   └── page.tsx              # Coming soon page
│   └── api/
│       └── auth/
│           └── [...all]/route.ts # Better Auth API handler
│
├── components/
│   ├── landing/                  # Landing page components
│   │   ├── navbar.tsx            # Navigation header
│   │   ├── hero.tsx              # Hero section
│   │   ├── problem.tsx           # Problem statement
│   │   ├── solution.tsx          # Solution showcase
│   │   ├── faq.tsx               # FAQ accordion
│   │   └── footer.tsx            # Footer with contact info
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/                          # Utility & config modules
│   ├── auth.ts                   # Better Auth server config
│   ├── auth-client.ts            # Better Auth client config
│   ├── db.ts                     # Prisma client singleton
│   ├── openstreetmap.ts          # Hospital geolocation API
│   ├── password.ts               # Bcrypt hash/compare
│   ├── token.ts                  # Verification token generator
│   ├── validators.ts             # Zod schemas
│   └── utils.ts                  # Class name utility
│
├── hooks/
│   └── use-mobile.ts             # Mobile viewport detection
│
├── prisma/
│   └── schema.prisma             # Database schema
│
├── types/
│   └── bcrypt.d.ts               # Type declarations
│
├── middleware.ts                  # Route protection middleware
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts                # Next.js config (Turbopack)
```

---

## 🔌 API Reference

### Authentication Endpoints

All auth routes are handled by Better Auth at `/api/auth/*`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/sign-up/email` | Register with email/password |
| `POST` | `/api/auth/sign-in/email` | Sign in with email/password |
| `GET`  | `/api/auth/sign-in/social?provider=google` | Google OAuth |
| `GET`  | `/api/auth/sign-in/social?provider=github` | GitHub OAuth |
| `POST` | `/api/auth/sign-out` | Sign out |
| `GET`  | `/api/auth/session` | Get current session |

### OpenStreetMap Integration

| Function | Description |
|----------|-------------|
| `getPincodeCoordinate(pincode)` | Converts 6-digit Indian pincode to lat/lon |
| `getHospotialsNearby(coords, radius)` | Queries Overpass API for hospitals within radius |
| `formatHospitalData(hospitals, userCoords)` | Calculates distance & formats results |
| `calculateDistance(lat1, lon1, lat2, lon2)` | Haversine formula for distance |

---

## 🤝 Contributing

Contributions make the open-source community an incredible place to learn, inspire, and create. Any contribution you make is **greatly appreciated**.

### How to Contribute

1. **Fork** the repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/<your-username>/arogya-assam.git
   ```
3. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make** your changes and commit
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push** to your branch
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open** a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, no code change |
| `refactor:` | Code refactoring |
| `test:` | Adding tests |
| `chore:` | Maintenance tasks |

### Code Guidelines

- Use **TypeScript** for all new files
- Follow existing code style and patterns
- Use **shadcn/ui** for new UI components
- Write meaningful commit messages
- Test your changes locally before submitting a PR
- Keep PRs focused — one feature/fix per PR

---

## 🗺 Feature Roadmap

Looking for something to work on? Here are features we'd love help with:

### 🟢 Good First Issues
- [ ] Add loading skeleton for landing page
- [ ] Improve form accessibility (ARIA labels)
- [ ] Add more FAQ questions
- [ ] Dark mode toggle improvements
- [ ] Add Assamese translations for hospital finder page

### 🟡 Medium Complexity
- [ ] **Patient Medical Records** — Store and view screening history
- [ ] **PDF Report Generation** — Download screening results as PDF
- [ ] **PWA Support** — Full offline capability with service worker
- [ ] **SMS Notifications** — Send results via SMS for non-smartphone users
- [ ] **Admin Dashboard** — Analytics for ASHA workers and health officials
- [ ] **Multi-language** — Add Hindi, Bengali, and other regional languages
- [ ] **Screening History Chart** — Recharts-based visualization of past screenings

### 🔴 Advanced Features
- [ ] **AI Health Assistant** — Chatbot for health queries using LLM
- [ ] **Telemedicine Chat** — Real-time chat with hospital staff
- [ ] **Appointment Booking** — Schedule visits with nearby hospitals
- [ ] **Blood Bank Finder** — Locate blood banks with availability
- [ ] **Emergency SOS** — One-tap emergency services with location sharing
- [ ] **ASHA Worker Portal** — Dedicated portal for community health workers
- [ ] **Government Health API Integration** — Connect with NHA/ABDM APIs
- [ ] **Wearable Device Integration** — Sync with health monitoring devices

### Architecture Improvements
- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Add rate limiting to API routes (Upstash Redis is ready)
- [ ] Implement proper error boundaries
- [ ] Add Sentry for error monitoring
- [ ] Docker containerization

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

```
MIT License

Copyright (c) 2025 Arogya Assam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📬 Contact

<!-- Update with your actual contact information -->

**Project Maintainer**: Yash Sharma

<!-- Add your links below -->
<!-- - Twitter: [@yourusername](https://twitter.com/yourusername) -->
<!-- - LinkedIn: [Your Name](https://linkedin.com/in/yourprofile) -->
<!-- - Email: your.email@example.com -->

**Project Link**: [https://github.com/your-username/arogya-assam](https://github.com/your-username/arogya-assam)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — React framework
- [Better Auth](https://www.better-auth.com/) — Authentication
- [Prisma](https://www.prisma.io/) — Database ORM
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [OpenStreetMap](https://www.openstreetmap.org/) — Geolocation data
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Lucide Icons](https://lucide.dev/) — Beautiful icons
- [Neon](https://neon.tech/) — Serverless PostgreSQL
- [Recharts](https://recharts.org/) — Charting library
- [Vercel](https://vercel.com/) — Deployment platform

---

<div align="center">

**Built with ❤️ for the people of Assam**

⭐ Star this repo if you found it useful!

</div>