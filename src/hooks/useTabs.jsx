import { useState } from "react";

export default function useTabs(initialValue = 0){
    const [tabIndex, setTabIndex] = useState(initialValue)

    function setCurrentTabIndex(selectedTabIndex){
        setTabIndex(selectedTabIndex)
    }

    return [ tabIndex , setCurrentTabIndex]
}
