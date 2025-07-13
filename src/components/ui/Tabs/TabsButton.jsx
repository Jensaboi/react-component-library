import React from "react";
import { TabsContext } from "./Tabs";

export default function TabsButton({ children, index, ...rest }) {
  const { currentTabIndex, setCurrentTabIndex } = React.useContext(TabsContext);

  const current = "bg-white";
  return (
    <button
      className={`cursor-pointer p-1 pl-2 pr-2 text-[0.875rem] font-medium font-inter rounded-lg ${
        currentTabIndex === index ? current : ""
      }`}
      onClick={() => setCurrentTabIndex(index)}
      {...rest}
    >
      {children}
    </button>
  );
}
