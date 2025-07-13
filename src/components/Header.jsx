import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import SearchMenu from "./SearchMenu";
import Logo from "./Logo";
import Navbar from "./NavBar";

export default function Header() {
    return (
        <header className="bg-white text-slate-900 border-slate-900 dark:bg-slate-900 dark:text-white dark:border-white p-5 h-[67px] flex justify-between items-center border-b-1">
            <Link to="/">
                <Logo>React Components</Logo>
            </Link>

            <div className="flex justify-center items-center gap-2">
                <SearchMenu />
                <Navbar className="hidden md:block" />
                <HamburgerMenu />
            </div>
        </header>
    );
}
