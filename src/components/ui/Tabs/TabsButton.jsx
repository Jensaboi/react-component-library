import React from "react";
import { TabsContext } from "./Tabs";

export default function TabsButton({ children, index, ...rest }) {
  const { currentTabIndex, setCurrentTabIndex } = React.useContext(TabsContext);

  const selected = "border-b-white border-indigo-600";

  const styles = "pl-3 pr-3 pt-1 pb-1 cursor-pointer border rounded-t-sm";

  return (
    <button
      onClick={() => setCurrentTabIndex(index)}
      {...rest}
      className={`${styles} ${currentTabIndex === index ? selected : ""}`}
    >
      {children}
    </button>
  );
}
