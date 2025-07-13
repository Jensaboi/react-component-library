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
        <Menu>
            <Menu.Button>
                <RxHamburgerMenu className="utility-icons" size="20px" />
            </Menu.Button>
            <Menu.Display className="bg-white text-black border-black dark:bg-slate-800 dark:text-white dark:border-white fixed top-0 left-0 w-full h-full flex flex-col gap-3">
                <div>
                    <button onClick={toggleTheme}>
                        <MdOutlineLightMode
                            className="utility-icons"
                            size="20px"
                        />
                    </button>
                    <Menu.Button>
                        <IoCloseOutline className="utility-icons" size="26px" />
                    </Menu.Button>
                </div>

                <Navbar />
            </Menu.Display>
        </Menu>
    );
}
