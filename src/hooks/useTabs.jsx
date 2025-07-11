import { useState } from "react";

export default function useTabs(initialValue = 0){
    const [tab, setTab] = useState(initialValue)

    function setCurrentTab(selectedTab){
        setTab(selectedTab)
    }

    return { tab, setCurrentTab}
}
