import React from "react";
import Header from "../components/Header";
import useTabs from "../hooks/useTabs";
import BannersTab from "../components/tabs/BannersTab";
import ButtonsTab from "../components/tabs/ButtonsTab";
import BadgesTab from "../components/tabs/BadgesTab";
import TabsNavbar from "../components/TabsNavbar";

export default function ComponentsPage() {
  const [tabIndex, setCurrentTabIndex] = useTabs();

  const tabs = [
    { label: "Buttons", view: <ButtonsTab /> },
    { label: "Banners", view: <BannersTab /> },
    { label: "Badges", view: <BadgesTab /> },
  ];
  return (
    <>
      <Header />

      <main className="container p-5 flex flex-col justify-start items-start">
        <TabsNavbar
          tabs={tabs}
          tabIndex={tabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
        />

        <section className="w-full p-3 flex flex-col justify-start items-start gap-5">
          <h1 className="text-gray-800 dark:text-red">
            {tabs[tabIndex].label}
          </h1>
          {tabs[tabIndex].view}
        </section>
      </main>
    </>
  );
}
