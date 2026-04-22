# Security Policy

## Supported Versions

| Version       | Supported |
| ------------- | --------- |
| 1.x (Current) | ✅         |
| < 1.0         | ❌         |

---

## Reporting a Vulnerability

Arogya Assam handles health-related screening data, user authentication, and location-based hospital search information.
We take security vulnerabilities seriously.

**Please do not open a public GitHub issue for security vulnerabilities.**

Instead, report vulnerabilities privately through one of the following channels:

* Email: [security@arogyaassam.org](mailto:security@arogyaassam.org)
* GitHub Private Advisory: Go to the Security tab and click "Report a vulnerability"

---

## What to Include in Your Report

Please include as much detail as possible:

* Description of the vulnerability
* Steps to reproduce the issue
* Affected pages, APIs, or components
* Potential impact on users or health-related data
* Screenshots or proof-of-concept if applicable
* Suggested fix (optional)

---

## Response Timeline

| Action                  | Expected Timeframe     |
| ----------------------- | ---------------------- |
| Initial Acknowledgement | Within 48 hours        |
| Status Update           | Within 5 business days |
| Fix or Mitigation       | Within 30 days         |

---

## Security Practices

We follow several practices to help keep the platform secure:

* Authentication is handled through Better Auth
* Passwords are hashed securely before storage
* Protected routes use middleware-based auth guards
* Environment variables are stored securely and never committed
* API inputs are validated using Zod schemas
* Database access is managed through Prisma ORM
* Sensitive credentials are excluded through `.gitignore`
* Dependencies are reviewed and updated regularly
* OAuth integrations are restricted to trusted providers
* Rate limiting support is planned using Upstash Redis
* Contributors must follow the project's Code of Conduct

---

## Scope of Responsible Disclosure

Examples of valid vulnerability reports include:

* Authentication or authorization bypass
* Sensitive data exposure
* Session hijacking or token leakage
* SQL injection, XSS, CSRF, or SSRF
* Broken access control
* Insecure API endpoints
* Misconfigured OAuth flows
* Leakage of health screening data
* Open redirect vulnerabilities

Please avoid testing that could:

* Disrupt service availability
* Access other users' personal information
* Spam authentication systems
* Overload APIs or hospital search services

---

## Disclosure Policy

Once a vulnerability is resolved:

1. A patched version will be released
2. The reporter may be credited if they choose
3. A short summary of the fix may be shared publicly

---

## Contact

**Yash Sharma** — Project Maintainer

* GitHub: [https://github.com/YASHSHARMAOFFICIALLY](https://github.com/YASHSHARMAOFFICIALLY)
* Project Repository: [https://github.com/your-username/arogya-assam](https://github.com/your-username/arogya-assam)

---

Thank you for helping make Arogya Assam safer for everyone.