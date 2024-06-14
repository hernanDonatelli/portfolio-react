"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-3xl text-purple-400" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <h1 className="text-4xl font-semibold">
                        Dona<span className="text-purple-400">.</span>
                    </h1>
                </div>

                {/* Navbar */}
                <nav className="flex flex-col gap-8 items-center justify-center">
                    {links.map((link) => {
                        return (
                            <Link
                                href={link.path}
                                key={link.name}
                                className={`${
                                    link.path === pathname
                                        ? "text-purple-400 border-b-2 border-purple-400"
                                        : "text-white"
                                } text-center text-xl capitalize font-medium hover:text-purple-400 transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
