import NavListLinkItem from "./NavListLinkItem";

export default function Navbar({ ...rest }) {
    return (
        <nav {...rest}>
            <ul className="flex flex-col gap-3 justify-start items-start md:flex-row md:justify-center md:items-center">
                <NavListLinkItem to="/Get started">
                    Getting Started
                </NavListLinkItem>
                <NavListLinkItem to="/Components">Components</NavListLinkItem>
                <NavListLinkItem>Documents</NavListLinkItem>
                <NavListLinkItem>Github</NavListLinkItem>
            </ul>
        </nav>
    );
}
