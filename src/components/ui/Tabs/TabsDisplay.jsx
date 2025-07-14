import React from "react";
import { TabsContext } from "./Tabs";
export default function TabsDisplay({ tabs, ...rest }) {
    const { currentTabIndex } = React.useContext(TabsContext);

    return <div {...rest}>{tabs[currentTabIndex]?.tab}</div>;
}
