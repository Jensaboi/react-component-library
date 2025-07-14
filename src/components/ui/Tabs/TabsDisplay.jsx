import React from "react";
import { TabsContext } from "./Tabs";
export default function TabsDisplay({ tabs, ...rest }) {
    const { currentTabIndex } = React.useContext(TabsContext);

    return (
        <section {...rest}>
            <h2 className="font-semibold text-gray-900">
                {tabs[currentTabIndex]?.label}
            </h2>
            {tabs[currentTabIndex]?.tab}
        </section>
    );
}
