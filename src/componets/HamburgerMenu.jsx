import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useToggle from "../hooks/useToggle";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HamburgerMenu(){
    const [open, toggleOpen ] = useToggle()
    const { toggleTheme } = React.useContext(ThemeContext)

    return(
        <div>
            <button onClick={toggleOpen} className="button-reset">
                <RxHamburgerMenu className="utility-icons" size="20px"/>
            </button>
            { open && (
                <div className="hamburger-menu-modal">
                    <div>
                        <button
                            onClick={toggleTheme}
                            className="button-reset"
                        >
                            <MdOutlineLightMode className="utility-icons"  size="20px"/>
                        </button>
                        <button
                            onClick={toggleOpen}
                            className="button-reset"
                        >
                            <IoCloseOutline className="utility-icons"  size="26px" />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <Link className="link-reset" to="">
                                Getting Started
                            </Link>
                        </li>
                        <li>
                            <Link className="link-reset" to="/Components">
                                Components
                            </Link>
                        </li>
                        <li>
                            <Link className="link-reset" to="">
                                Documents
                            </Link>
                        </li>
                        <li>
                            <Link className="link-reset" to="">
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
             )
            }
        </div>
    )

}
