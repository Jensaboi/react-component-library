import React, { useState } from "react";

const TabsContext = React.createContext();

export default function Tabs({ children, initialIndex = 0, ...rest }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(initialIndex);

    return (
        <TabsContext.Provider value={{ currentTabIndex, setCurrentTabIndex }}>
            <section {...rest}>{children}</section>
        </TabsContext.Provider>
    );
}

export { TabsContext };
