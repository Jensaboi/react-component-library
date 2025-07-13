import NavListLinkItem from "./ui/NavListLinkItem";

export default function Navbar() {
    return (
        <nav className="hidden md:block">
            <ul className="flex flex-row gap-1 justify-center items-center">
                <NavListLinkItem>Getting Started</NavListLinkItem>
                <NavListLinkItem to="/Components">Components</NavListLinkItem>
                <NavListLinkItem>Documents</NavListLinkItem>
                <NavListLinkItem>Github</NavListLinkItem>
            </ul>
        </nav>
    );
}
