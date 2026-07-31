import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C152.16 0 104.34 44.38 104.34 124.72v70.62H22.89V288h81.45v224h100.11V288z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M459.37 151.72c.33 4.54.33 9.09.33 13.64 0 138.72-105.58 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.11 8.44.97 16.57 1.3 25.34 1.3 49.06 0 94.21-16.57 130.27-44.83-46.13-.98-84.79-31.19-98.11-72.77 6.5.97 13 1.62 19.83 1.62 9.42 0 18.84-1.3 27.61-3.57-48.08-9.75-84.14-52.01-84.14-103.06v-1.3c13.97 7.8 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.05-46.78-87.44 0-19.49 5.2-37.36 14.29-52.98 51.69 63.7 129.3 105.25 216.37 109.8-1.62-7.8-2.6-15.92-2.6-24.04 0-57.83 46.78-104.94 104.94-104.94 30.21 0 57.5 12.67 76.67 33.18 23.71-4.55 46.46-13.32 66.62-25.34-7.8 24.37-24.37 44.83-46.13 57.83 21.12-2.27 41.55-8.12 60.43-16.24-14.29 20.79-32.16 39.31-52.65 54.25z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S352.4 35.1 316.5 33.4c-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.2 127.6 1.5 163.5c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.5 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.5-58 36.2-93.9c2.1-37 2.1-147.8 0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 576 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M549.655 124.083c-6.281-23.65-24.813-42.172-48.463-48.453C458.742 64 288 64 288 64S117.258 64 74.808 75.63c-23.65 6.281-42.182 24.803-48.463 48.453C16 166.523 16 256 16 256s0 89.477 10.345 131.917c6.281 23.65 24.813 42.172 48.463 48.453C117.258 448 288 448 288 448s170.742 0 213.192-11.63c23.65-6.281 42.182-24.803 48.463-48.453C560 345.477 560 256 560 256s0-89.477-10.345-131.917zM232 338V174l142 82-142 82z" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C4 366.4-1.9 378.1.7 389.4l24 104C27.2 504.4 37 512 48.3 512 304.1 512 512 304.5 512 48.3c0-11.3-7.7-21.1-18.6-23.7z" />
    </svg>
  );
}

function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  );
}

function MapMarkerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M172.3 501.7C26.7 290.6 0 269.2 0 192 0 86 86 0 192 0s192 86 192 192c0 77.2-26.7 98.6-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary-500 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500 blur-[140px]" />
      </div>

      <div className="relative border-b border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/20 ring-1 ring-primary-500/30">
                <PhoneIcon className="h-4 w-4 text-primary-300 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  24/7 Screening Helpline
                </p>
                <p className="text-sm text-slate-400">
                  Call anytime for support, guidance, or emergencies
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                Free Screening
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                100% Offline
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                WHO Inspired
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Arogya Assam Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Arogya Assam
                </span>
                <span className="text-sm text-slate-400">
                  Smart Anemia Screening Platform
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Empowering ASHA workers and rural communities with fast, smartphone-based anemia screening that works offline and delivers results in minutes.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-2 text-sm font-semibold text-white">
                Trusted Healthcare Access
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                Early screening helps reduce severe complications, improve awareness, and support faster treatment in remote areas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <ul className="space-y-4">
              {[
                { label: "Start Screening", href: "/screen" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "About Anemia", href: "/#problem" },
                { label: "FAQs", href: "/#faq" },
                { label: "Success Stories", href: "/#testimonials" },
                { label: "Contact Support", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary-500 transition-transform duration-300 group-hover:scale-125" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Resources</h3>

            <ul className="space-y-4">
              {[
                { label: "Patient Portal", href: "/signin" },
                { label: "Find Hospitals", href: "/hospitals" },
                { label: "Health Articles", href: "/chat?name=Health Articles" },
                { label: "Emergency Services", href: "/#contact" },
                { label: "ASHA Worker Guide", href: "/guide" },
                { label: "Nutrition Tips", href: "/nutrition" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-500 transition-transform duration-300 group-hover:scale-125" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Get In Touch</h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    <MapMarkerIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Visit Us</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Primary Health Center
                      <br />
                      Rural Assam, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Call Support</p>
                    <a
                      href="tel:+91-800-SCREEN"
                      className="mt-1 block text-sm text-slate-400 transition-colors hover:text-primary-400"
                    >
                      +91-800-SCREEN
                    </a>
                    <p className="mt-1 text-xs text-slate-500">
                      Available 24 hours a day
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email Us</p>
                    <a
                      href="mailto:support@anemiascreen.in"
                      className="mt-1 block text-sm text-slate-400 transition-colors hover:text-primary-400"
                    >
                      support@anemiascreen.in
                    </a>
                    <p className="mt-1 text-xs text-slate-500">
                      We usually reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Arogya Assam. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Built to improve healthcare access for rural communities.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-slate-400 transition-colors hover:text-primary-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-sm text-slate-400 transition-colors hover:text-primary-400"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-sm text-slate-400 transition-colors hover:text-primary-400"
              >
                Contact
              </Link>

              <Link
                href="/support"
                className="text-sm text-slate-400 transition-colors hover:text-primary-400"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}