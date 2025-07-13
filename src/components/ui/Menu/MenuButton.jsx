import React from "react";
import { MenuContext } from "./Menu";

export default function MenuButton({children, ...rest}){
    
    const { toggleOpen } = React.useContext(MenuContext)
    return(
        <button
            {...rest}
        >
            {children}
        </button>
    )
}