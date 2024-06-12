import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Dona<span className="text-purple-400">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />

                    <Link href="/contact">
                        <Button className="ml-8">Contratanos</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    Mobile Nav
                </div>
            </div>
        </header>
    );
};

export default Header;
