import React, { useState } from "react";

const TabsContext = React.createContext();

export default function Tabs({ children, initialIndex = 0, ...rest }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(initialIndex);

    function viewTab(tabIndex) {
        setCurrentTabIndex(tabIndex);
    }
    return (
        <TabsContext.Provider value={{ currentTabIndex, viewTab }}>
            <section {...rest}>{children}</section>
        </TabsContext.Provider>
    );
}
