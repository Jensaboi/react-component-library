import React from "react";
import { TabsContext } from "./Tabs";

export default function TabsButton({ variant, children, index, ...rest }) {
    const { setCurrentTabIndex } = React.useContext(TabsContext);
    const variants = {
        selected: "border-b-white border-indigo-600",
    };
    const defaultStyle =
        "pl-3 pr-3 pt-1 pb-1 cursor-pointer border rounded-t-sm";

    return (
        <button
            onClick={() => setCurrentTabIndex(index)}
            {...rest}
            className={`${defaultStyle} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}
