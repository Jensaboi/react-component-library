import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "./ui/Menu/index";

export default function SearchMenu() {
    return (
        <Menu>
            <Menu.Button>
                <IoMdSearch className="utility-icons" size="20px" />
            </Menu.Button>
            <Menu.Display className="fixed w-full bg-white text-black dark:bg-slate-900 dark:text-white top-0 left-0 h-screen flex flex-col justify-start items-center">
                <div className="flex flex-row justify-start items-start">
                    <form className="flex flex-row justify-center items-center">
                        <label htmlFor="query">
                            <IoMdSearch className="utility-icons" size="20px" />
                        </label>
                        <input name="query" id="query" type="text" />
                    </form>

                    <Menu.Button>
                        <IoCloseOutline className="utility-icons" size="26px" />
                    </Menu.Button>
                </div>
            </Menu.Display>
        </Menu>
    );
}
