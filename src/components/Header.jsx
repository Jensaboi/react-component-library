import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./ui/HamburgerMenu";
import SearchModal from "./ui/SearchModal";
import Logo from "./Logo";
import NavListLinkItem from "./ui/NavListLinkItem";
const MOBILE_WIDTH = 768;

export default function Header() {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= MOBILE_WIDTH
  );
  return (
    <header className="bg-white text-slate-900 border-slate-900 dark:bg-slate-900 dark:text-white dark:border-white p-5 h-[67px] flex justify-between items-center border-b-1">
      <Link to="/">
        <Logo>React Components</Logo>
      </Link>

      <div className="flex justify-center items-center gap-2">
        <SearchModal />
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <nav>
            <ul className="flex flex-row gap-1 justify-center items-center">
              <NavListLinkItem>Getting Started</NavListLinkItem>
              <NavListLinkItem to="/Components">Components</NavListLinkItem>
              <NavListLinkItem>Documents</NavListLinkItem>
              <NavListLinkItem>Github</NavListLinkItem>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
