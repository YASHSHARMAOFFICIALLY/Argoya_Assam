# Contributing to Arogya Assam

First of all, thank you for your interest in contributing to **Arogya Assam**!

Arogya Assam is a healthcare platform focused on making anemia screening accessible, fast, and free for rural communities in Assam.

Your contributions help improve healthcare access, support ASHA workers, and make early anemia detection easier for thousands of people.

---

## 📌 Table of Contents

* Code of Conduct
* Project Structure
* How to Contribute
* Reporting Bugs
* Suggesting Enhancements
* Pull Requests
* Development Setup
* Coding Guidelines
* Vision Behind Arogya Assam

---

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive, and collaborative environment.

We welcome contributors from all backgrounds.

Please ensure:

* Respectful communication
* Constructive feedback
* Inclusive collaboration
* Zero tolerance for harassment or discrimination

---

## 🏗️ Project Structure

The repository is organized as follows:

```text
app/           → Next.js App Router pages and API routes
components/    → UI components and landing page sections
lib/           → Utilities, auth, database, validators, helpers
hooks/         → Custom React hooks
prisma/        → Prisma schema and database setup
types/         → TypeScript type definitions
public/        → Static assets such as images and icons
```

---

## 🚀 How to Contribute

There are many ways to contribute:

* Fix bugs
* Improve UI/UX
* Add accessibility improvements
* Improve Assamese translations
* Add new features
* Improve hospital search functionality
* Optimize performance and offline support
* Improve documentation

---

## 🐛 Reporting Bugs

If you find a bug, please open an Issue and include:

* Steps to reproduce the issue
* Expected behavior
* Actual behavior
* Screenshots or logs if available
* Browser, device, and OS details

For authentication or API issues, include:

* Endpoint affected
* Error message
* Request payload if possible

---

## 💡 Suggesting Enhancements

Have an idea to improve Arogya Assam?

Open an Issue and describe:

* The feature or improvement
* Why it matters
* The impact on users, patients, or ASHA workers
* A possible implementation approach

We especially welcome ideas related to:

* Rural healthcare access
* Offline-first functionality
* Assamese language support
* Accessibility improvements
* Screening accuracy
* Hospital finder enhancements
* Better patient history tracking

---

## 🔁 Pull Request Workflow

To contribute code:

1. Fork the repository
2. Clone your fork

```bash
git clone https://github.com/your-username/arogya-assam.git
cd arogya-assam
```

3. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes
5. Commit clearly

```bash
git commit -m "feat: add screening history chart"
```

6. Push to your branch

```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request

Before submitting your PR, make sure:

* The code works correctly
* You tested your changes locally
* Documentation is updated if needed
* Your PR has a clear title and description
* You keep PRs focused on a single feature or fix

---

## ⚙️ Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/arogya-assam.git
cd arogya-assam
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_database_url
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

⚠️ Never commit `.env` files or API credentials.

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🧑‍💻 Coding Guidelines

### TypeScript / Next.js

* Use TypeScript for all new files
* Prefer functional React components
* Use App Router conventions
* Keep components reusable and modular
* Use meaningful names for files, variables, and functions

### UI / Styling

* Use Tailwind CSS for styling
* Use shadcn/ui components where possible
* Ensure responsive mobile-first design
* Maintain accessibility with proper labels and ARIA attributes

### Backend / API

* Validate inputs with Zod
* Keep API routes clean and secure
* Avoid exposing sensitive information in responses
* Use Prisma for database interactions

### General

* Keep commits small and meaningful
* Remove unused code and console logs
* Write descriptive commit messages
* Test changes before submitting

Examples:

```text
feat: add Assamese translation for hospital page
fix: resolve sign in redirect bug
docs: update installation steps
refactor: simplify screening score calculation
```

---

## 🌍 Vision Behind Arogya Assam

Arogya Assam is more than just a health app.

We aim to:

* Improve early anemia detection
* Support ASHA workers with better tools
* Reduce dependency on lab-based screening
* Increase healthcare access in rural communities
* Make health technology accessible in local languages

---

## 💛 Final Note

Thank you for taking the time to contribute.

Every improvement helps make healthcare more accessible for communities across Assam.
