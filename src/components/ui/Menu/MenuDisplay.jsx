import React from "react";
import { MenuContext } from "./Menu";

export default function MenuDisplay({ children, ...rest }) {
    const { open } = React.useContext(MenuContext);

    return open ? <div {...rest}>{children}</div> : null;
}
