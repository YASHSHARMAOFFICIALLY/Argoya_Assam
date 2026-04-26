"use client";

import { authClient } from "@/lib/auth-client";
import { ModeToggle } from "@/components/landing/mode-toggle";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Heart,
    Menu,
    MoveRight,
    X,
    LogOut,
    LayoutDashboard,
    Hospital as HospitalIcon,
    Home,
    MessageSquare,
    BookOpen,
    Briefcase
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    const handleSoon = (e: React.MouseEvent, title: string) => {
        e.preventDefault();
        toast.info(`${title} feature coming soon!`, {
            description: "We are working hard to bring this feature to you.",
            icon: <Heart className="h-4 w-4 text-rose-500" />,
        });
    };

    const navigationItems = [
        {
            title: "Home",
            href: "/",
            icon: Home,
        },
        {
            title: "Hospitals",
            href: "/hospitals",
            icon: HospitalIcon,
        },
        {
            title: "Services",
            href: "#",
            icon: Briefcase,
            onClick: (e: React.MouseEvent) => handleSoon(e, "Services"),
        },
        {
            title: "Resources",
            href: "#",
            icon: BookOpen,
            onClick: (e: React.MouseEvent) => handleSoon(e, "Resources"),
        },
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            protected: true,
        },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    const filteredNavItems = navigationItems.filter(
        (item) => !item.protected || (item.protected && session)
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <nav className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 z-10">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.png"
                                alt="Arogya Assam Logo"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-primary">Arogya Assam</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:justify-center flex-1 px-4">
                        <div className="flex items-center space-x-1">
                            {filteredNavItems.map((item) => (
                                <Link
                                    key={item.href + item.title}
                                    href={item.href}
                                    onClick={item.onClick}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground",
                                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-3 z-10">
                        <ModeToggle />
                        {!isPending && (
                            <>
                                {session ? (
                                    <Button
                                        variant="ghost"
                                        onClick={handleLogout}
                                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Logout
                                    </Button>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <Button variant="ghost" onClick={() => router.push("/signup")}>
                                            Sign Up
                                        </Button>
                                        <Button
                                            className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                                            onClick={() => router.push("/signin")}
                                        >
                                            Sign In
                                            <MoveRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ModeToggle />
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t py-4 absolute left-0 right-0 bg-background border-b shadow-lg animate-in fade-in slide-in-from-top-4">
                        <div className="flex flex-col space-y-2 px-4">
                            {filteredNavItems.map((item) => (
                                <Link
                                    key={item.href + item.title}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            item.onClick(e);
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                    className={cn(
                                        "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-accent"
                                    )}
                                >
                                    <item.icon className="mr-3 h-5 w-5" />
                                    {item.title}
                                </Link>
                            ))}

                            <div className="pt-4 border-t mt-2 flex flex-col space-y-2">
                                {session ? (
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-destructive hover:bg-destructive/10"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-3 h-5 w-5" />
                                        Logout
                                    </Button>
                                ) : (
                                    <>
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
                                            Sign In
                                            <MoveRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
