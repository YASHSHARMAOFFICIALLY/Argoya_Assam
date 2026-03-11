"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Heart, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
// import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import Image from "next/image";
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      description: "Find healthcare services and support near you",
      items: [
        {
          title: "Find Hospitals",
          href: "hospitals",
        },
        {
          title: "AI Health Assistant",
          href: "/soon",
        },
        {
          title: "Emergency Services",
          href: "/soon",
        },
        {
          title: "Book Appointment",
          href: "/soon",
        },
      ],
    },
    {
      title: "Resources",
      description: "Access healthcare information and support",
      items: [
        {
          title: "Health Articles",
          href: "/soon",
        },
        {
          title: "FAQs",
              href: "/#faq",
        },
        {
          title: "Patient Education",
          href: "/soon",
        },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95   backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-1 -gap-10">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Arogya Assam Logo"
                fill
                className="w-12 h-12"
                priority
                unoptimized
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">Arogya Assam </span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.title}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-state-open:bg-accent/50"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              {/* <ThemeToggle /> */}
              <Button variant="ghost" onClick={() => router.push("/signup")}>
                Create Account
              </Button>
              <Button className="shadow-[0px_0px_2px_1px_rgba(255,255,255,0.2)_inset]
              text-shadow-sm text-shadow-white/10 ring ring-white/20 cursor-pointer"
              onClick={() => router.push("/signin")}>
                Patient Login 
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-4 pb-4 pt-2">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.items ? (
                    <>
                      <div className="font-semibold">{item.title}</div>
                      <div className="ml-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm font-semibold text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block font-semibold hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="space-y-2 border-t pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/signup");
                    setIsOpen(false);
                  }}
                >
                  Create Account
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/signin");
                    setIsOpen(false);
                  }}
                >
                  Patient Login
                  <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}