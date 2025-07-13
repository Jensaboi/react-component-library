import React, { useState } from "react";

const TabsContext = React.createContext();

export default function Tabs({ children, initialIndex = 0 }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(initialIndex);

  return (
    <TabsContext.Provider value={{ currentTabIndex, setCurrentTabIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

export { TabsContext };
