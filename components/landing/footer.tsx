import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden bg-linear-to-b dark:from-[#0a0f1d] dark:to-[#0a0f1d]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-primary-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent-400 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Arogya Assam Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  Arogya Assam
                </span>
                <span className="text-xs text-slate-400">
                  Anemia Screening Platform
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering ASHA workers with smartphone-based anemia screening for rural Assam—free, offline, and in 5 minutes.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Start Screening", href: "/screen" },
                { label: "About Anemia", href: "/#problem" },
                { label: "FAQs", href: "/#faq" },
                { label: "How It Works", href: "/#problem" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Patient Portal", href: "/signin" },
                { label: "Find Hospitals", href: "/soon" },
                { label: "Health Articles", href: "/soon" },
                { label: "Emergency Services", href: "/soon" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-400">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Primary Health Center
                  <br />
                  Assam, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <FaPhone className="w-5 h-5 text-primary-400 shrink-0" />
                <a href="tel:+91-800-SCREEN" className="hover:text-primary-400 transition-colors">
                  +91-800-SCREEN
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <FaEnvelope className="w-5 h-5 text-primary-400 shrink-0" />
                <a
                  href="mailto:support@anemiascreen.in"
                  className="hover:text-primary-400 transition-colors"
                >
                  support@anemiascreen.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Yash Anemia Screening. All rights reserved. | Built for rural healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-primary-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-white gap-2">
            <div className="flex items-center gap-3">
              <FaPhone className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-semibold">
                24/7 Helpline: +91-800-SCREEN
              </span>
            </div>
            <span className="text-sm hidden sm:block font-medium">
              Free Screening • 100% Offline • WHO Approved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}