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

[Live Demo](https://argoya-assam.vercel.app/) · [Report Bug]() · [Request Feature]() · [Contributing](#-contributing)

<!-- HERO SCREENSHOT -->
<!-- 📸 Add your hero screenshot below -->
<!-- <img src="" alt="Arogya Assam Hero" width="800"/> -->

<!-- Replace the src with your actual screenshot path, e.g.: -->
<!-- <img src="public/screenshots/hero.png" alt="Arogya Assam Hero" width="800"/> -->

<!-- </div> -->

---

## Table of Contents

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

## About The Project

**Arogya Assam** is a healthcare platform built to tackle the silent crisis of anemia in rural Assam, India. Designed for **ASHA (Accredited Social Health Activist) workers**, it provides a WHO-aligned symptom-based screening tool accessible from any smartphone — **no internet required for screening**.

Patients can also locate nearby hospitals using pincode-based search powered by OpenStreetMap, and access their results through a secure, authenticated portal.

> **Mission**: Make anemia screening accessible, free, and fast for every village in Assam.

---

## The Problem

| Statistic | Detail |
|-----------|--------|
| **50%+** | Women in Assam are anemic (NFHS-5) |
| **67%** | Children under 5 are anemic |
| **Limited** | Access to diagnostic labs in rural areas |
| **Low** | Awareness about anemia symptoms |

Traditional screening requires blood tests, lab equipment, and trained technicians — resources scarce in rural Assam. **Arogya Assam bridges this gap** with a digital-first, symptom-based approach.

---

## Screenshots

<div align="center">

### Landing Page
<!-- 📸 Add screenshot -->
<img src="./Assets/Landing_Page.png" alt="Landing Page" width="700"/>

### Anemia Screening Tool
<!-- 📸 Add screenshot -->
<img src="./Assets/Screening_Tool.png" alt="Screening Tool" width="700"/>

### Hospital Finder
<!-- 📸 Add screenshot -->
<img src="./Assets/Hospital_Finder.png" alt="Hospital Finder" width="700"/>

### Authentication
<!-- 📸 Add screenshot -->
| Sign In | Sign Up |
|---------|---------|
| <img src="./Assets/Sign_In.png" alt="Sign In" width="350"/> | <img src="./Assets/Sign_Up.png" alt="Sign Up" width="350"/> |

### Mobile View
<!-- 📸 Add screenshot -->
| Home | Screening | Results |
|------|-----------|---------|
| <img src="./Assets/Mobile_Home.jpg" alt="Mobile Home" width="220"/> | <img src="./Assets/Mobile_Screening.jpg" alt="Mobile Screening" width="220"/> | <img src="./Assets/Mobile_Results.jpg" alt="Mobile Results" width="220"/> |

</div>

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                        │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────┐    │
│  │ Landing  │  │ Screening│  │   Auth   │  │   Hospital    │    │
│  │  Page    │  │   Tool   │  │  Pages   │  │   Finder      │    │
│  └──────────┘  └──────────┘  └──────────┘  └───────────────┘    │
│       │              │             │               │            │
└───────┼──────────────┼─────────────┼───────────────┼────────────┘
        │              │             │               │
        ▼              ▼             ▼               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NEXT.JS 16 SERVER                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Middleware Layer                     │    │
│  │            (Route Protection & Auth Guards)             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              │                                  │
│  ┌──────────────┐  ┌────────┴────────┐  ┌──────────────────┐    │
│  │  Better Auth │  │   API Routes    │  │  Server Actions  │    │
│  │   Handler    │  │  /api/auth/*    │  │                  │    │
│  └──────┬───────┘  └────────┬────────┘  └─────────┬────────┘    │
│         │                   │                     │             │
└─────────┼───────────────────┼─────────────────────┼─────────────┘
          │                   │                     │
          ▼                   ▼                     ▼
┌──────────────────┐  ┌───────────────┐  ┌─────────────────────┐
│   PostgreSQL     │  │  OpenStreetMap│  │   External Auth     │
│   (Neon DB)      │  │  Nominatim +  │  │  ┌───────┐ ┌──────┐ │
│                  │  │  Overpass API │  │  │Google │ │GitHub│ │
│  ┌────────────┐  │  └───────────────┘  │  │ OAuth │ │OAuth │ │
│  │   Users    │  │                     │  └───────┘ └──────┘ │
│  │ Sessions   │  │  ┌───────────────┐  └─────────────────────┘
│  │ Accounts   │  │  │    Resend     │
│  │Verification│  │  │ (Email API)   │
│  └────────────┘  │  └───────────────┘
└──────────────────┘
```

### Request Flow

```
User Request
     │
     ▼
┌──────────┐      ┌──────────────┐    ┌─────────────┐
│ Next.js  │ ───> │  Middleware  │───>│  Page/API   │
│  Router  │      │ (Auth Check) │    │   Handler   │
└──────────┘      └──────────────┘    └──────┬──────┘
                                             │
                    ┌───────────────────────┬┘
                    ▼                       ▼
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

## Tech Stack

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

## Features

### Core Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Anemia Screening** | 10-question WHO-aligned symptom assessment | ✅ Live |
| **Bilingual Support** | English + Assamese (অসমীয়া) | ✅ Live |
| **Risk Scoring** | Clinical scoring algorithm (0-100 scale) | ✅ Live |
| **Hospital Finder** | Pincode-based nearby hospital search | ✅ Live |
| **Navigation** | Google Maps integration for directions | ✅ Live |
| **Authentication** | Email/password + Google & GitHub OAuth | ✅ Live |
| **Responsive Design** | Mobile-first UI for smartphone users | ✅ Live |
| **Offline Screening** | Screening works without internet | ✅ Live |

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

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm/bun)
- **PostgreSQL** database (or a [Neon](https://neon.tech) account)
- **Google OAuth** credentials ([Google Cloud Console](https://console.cloud.google.com))
- **GitHub OAuth** credentials ([GitHub Developer Settings](https://github.com/settings/developers))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YASHSHARMAOFFICIALLY/Argoya_Assam.git
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

## Environment Variables

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

## Database Setup

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

## Project Structure

```
arogya-assam/
├── app/                          
│   ├── layout.tsx                
│   ├── favicon.ico                
│   ├── page.tsx                  
│   ├── loading.tsx                  
│   ├── globals.css                  
│   ├── screen/
│   │   └── page.tsx              
│   ├── result/
│   │   └── page.tsx              
│   ├── hospitals/
│   │   └── page.tsx              
│   ├── dashboard/
│   │   └── page.tsx              
│   ├── signin/
│   │   └── page.tsx              
│   ├── signup/
│   │   └── page.tsx              
│   ├── soon/
│   │   └── page.tsx              
│   ├── chat/
│   │   └── page.tsx              
│   ├── forgot-password/
│   │   └── page.tsx              
│   └── api/
│       └── auth/
│           └── [...all]/route.ts 
│
├── components/
│   ├── theme-provider.tsx
│   ├── landing/                  
│   │   ├── navbar.tsx            
│   │   ├── hero.tsx              
│   │   ├── problem.tsx           
│   │   ├── solution.tsx          
│   │   ├── mode-toggle.tsx          
│   │   ├── faq.tsx               
│   │   └── footer.tsx            
│   ├── shared/                  
│   │   ├── button.tsx               
│   │   └── design-system.tsx            
│   ├── layout/                      
│   │   └── navbar.tsx            
│   └── ui/                       
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/                          
│   ├── auth.ts                   
│   ├── auth-client.ts            
│   ├── db.ts                     
│   ├── openstreetmap.ts          
│   ├── password.ts               
│   ├── token.ts                  
│   ├── validators.ts             
│   ├── email.ts             
│   └── utils.ts                  
│
├── hooks/
│   └── use-mobile.ts             
│
├── prisma/
│   └── schema.prisma             
│
├── public/
│   ├── types/
│   │   └── bcrypt.d.ts
│   ├── file.svg
│   ├── globe.svg
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   ├── manifest.json
│   └── window.svg  
│
├── .gitignore
├── components.json
├── Contributing.md
├── eslint.config.mjs
├── LICENSE
├── middleware.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma.config.ts
└── tsconfig.json              
```

---

## API Reference

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

### How to Contribute

1. **Fork** the repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/YASHSHARMAOFFICIALLY/Argoya_Assam.git
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

[Click Here]() to follow the commit conventions while committing code to this Project.

### Code Guidelines

[Click Here]() to read the Code Guidelines before contributing to the codebase.

---

## Feature Roadmap

[Click Here]() to see the features that contributors can work on.

### Architecture Improvements
- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Add rate limiting to API routes (Upstash Redis is ready)
- [ ] Implement proper error boundaries
- [ ] Add Sentry for error monitoring
- [ ] Docker containerization

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## Contact

<!-- Update with your actual contact information -->

**Project Maintainer**: Yash Sharma

<!-- Add your links below -->
- Twitter: [@buildwithyash](https://x.com/buildwithyash)
- LinkedIn: [Yash Sharma](https://www.linkedin.com/in/buildwithyash/)
- Email: [yashsharmaofficially@gmail.com](mailto:yashsharmaofficially@gmail.com)

**Project Link**: [Argoya_Assam](https://github.com/YASHSHARMAOFFICIALLY/Argoya_Assam)

**Deployed**: [argoya-assam](https://argoya-assam.vercel.app/)

---

## Acknowledgements

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

⭐ **Star this repo if you found it useful!**

</div>