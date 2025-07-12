import React from "react"
import TabButton from "../ui/TabButton"

export default function ButtonsTab(){
    return (
        <>
            <div className="grid-rows-3">
                <TabButton variant="selected">Current</TabButton>
                <TabButton>tab3...</TabButton>
                <TabButton>tab2...</TabButton>
            </div>
        </>
    )
}
