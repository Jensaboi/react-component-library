import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useToggle from "../../hooks/useToggle";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavListLinkItem from "./NavListLinkItem";

export default function HamburgerMenu() {
  const [open, toggleOpen] = useToggle();
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleOpen}>
        <RxHamburgerMenu className="utility-icons" size="20px" />
      </button>
      {open ? (
        <div className="bg-white text-black border-black dark:bg-slate-800 dark:text-white dark:border-white fixed top-0 left-0 w-full h-full flex flex-col gap-3">
          <div className="bg-white text-black border-black dark:bg-slate-800 dark:text-white dark:border-white w-full p-5 h-[67px] flex flex-row justify-end items-center gap-1 self-end border-b-1">
            <button onClick={toggleTheme}>
              <MdOutlineLightMode className="utility-icons" size="20px" />
            </button>
            <button onClick={toggleOpen}>
              <IoCloseOutline className="utility-icons" size="26px" />
            </button>
          </div>
          <nav>
            <ul className="w-full pl-5 flex flex-col justify-start items-start gap-4">
              <NavListLinkItem>Getting Started</NavListLinkItem>
              <NavListLinkItem to="/Components">Components</NavListLinkItem>
              <NavListLinkItem>Documents</NavListLinkItem>
              <NavListLinkItem>Github</NavListLinkItem>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
