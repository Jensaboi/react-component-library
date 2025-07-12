import React from "react"
import Header from "../componets/Header"
import useTabs from "../hooks/useTabs"
import BannersTab from "../tabs/BannersTab"
import ButtonsTab from "../tabs/ButtonsTab"
import BadgesTab from "../tabs/BadgesTab"

export default function ComponentsPage(){
    const [tab, setCurrentTab ] = useTabs(0)

    const allTabs = [
        {label: 'Buttons', tab: <ButtonsTab />}, 
        {label: 'Banners', tab: <BannersTab />}, 
        {label: 'Badges', tab: <BadgesTab />}
    ]
    return(
        <main>
            <Header />
            <section>

            </section>
        </main>
    )
}
