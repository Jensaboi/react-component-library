import React from "react";
import Menu from "./ui/Menu/index";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Navbar from "./NavBar";

export default function HamburgerMenu() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <Menu className="block md:hidden">
      <Menu.Button className="cursor-pointer">
        <RxHamburgerMenu size="20px" />
      </Menu.Button>
      <Menu.Display className="bg-light-primary fixed top-0 left-0 z-99999 w-full h-screen flex flex-col justify-start items-end">
        <div className="bg-light-primary w-full px-5 py-7 flex items-center justify-end gap-2">
          <button className="cursor-pointer" onClick={toggleTheme}>
            <MdOutlineLightMode className="utility-icons" size="20px" />
          </button>
          <Menu.Button className="cursor-pointer">
            <IoCloseOutline size="26px" />
          </Menu.Button>
        </div>

        <Navbar className="bg-light-primary w-full h-full p-5" />
      </Menu.Display>
    </Menu>
  );
}
