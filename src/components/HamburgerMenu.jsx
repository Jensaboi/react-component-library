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
            <Menu.Button>
                <RxHamburgerMenu className="utility-icons" size="20px" />
            </Menu.Button>
            <Menu.Display className="fixed top-0 left-0 w-full flex-col justify-start items-end">
                <div className="bg-light-primary">
                    <div className="w-full p-5 flex items-center justify-end self-end border-b border-white">
                        <button onClick={toggleTheme}>
                            <MdOutlineLightMode
                                className="utility-icons"
                                size="20px"
                            />
                        </button>
                        <Menu.Button>
                            <IoCloseOutline
                                className="utility-icons"
                                size="26px"
                            />
                        </Menu.Button>
                    </div>

                    <Navbar />
                </div>
            </Menu.Display>
        </Menu>
    );
}
