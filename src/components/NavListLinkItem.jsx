import { Link } from "react-router-dom";

export default function NavListLinkItem({ size, to, children }) {
    const sizes = {
        small: "",
        medium: "",
        large: "",
    };
    return (
        <li className="hover:underline p-1 text-md font-semibold">
            <Link to={to}>{children}</Link>
        </li>
    );
}
