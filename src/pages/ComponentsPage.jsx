import React from "react";
import Header from "../components/Header";
import BannersTab from "../components/tabs/BannersTab";
import ButtonsTab from "../components/tabs/ButtonsTab";
import BadgesTab from "../components/tabs/BadgesTab";
import Tabs from "../components/ui/Tabs/index";

export default function ComponentsPage() {
    const tabs = [
        { label: "Buttons", view: <ButtonsTab /> },
        { label: "Banners", view: <BannersTab /> },
        { label: "Badges", view: <BadgesTab /> },
    ];
    return (
        <>
            <Header />
            <Tabs>
                <Tabs.List>
                    {tabs.map((tab, index) => (
                        <Tabs.Button>{tab.label}</Tabs.Button>
                    ))}
                </Tabs.List>
            </Tabs>
            <main className="container p-5 flex flex-col justify-start items-start"></main>
        </>
    );
}
