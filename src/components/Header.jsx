import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import SearchMenu from "./SearchMenu";
import Logo from "./Logo";
import Navbar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-light-primary text-light-text px-5 py-7 flex justify-between items-center">
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
