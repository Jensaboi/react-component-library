import React from "react";
import { TabsContext } from "./Tabs";
export default function TabsDisplay({ tabs, ...rest }) {
  const { currentTabIndex } = React.useContext(TabsContext);

  return <section {...rest}>{tabs[currentTabIndex]?.tab}</section>;
}
