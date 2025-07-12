import React from "react"
import { Link } from "react-router-dom";
import HamburgerMenu from "./ui/HamburgerMenu";
import SearchModal from "./ui/SearchModal";


export default function Header(){

    return(
        <header className="header">
            <Link to="/" className="link-reset">
                <h1>React Components.</h1>
            </Link>

            <nav className="header-nav">
                <SearchModal />
                <HamburgerMenu />
            </nav>
        </header>
    )
}
