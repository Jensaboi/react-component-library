import Header from "../components/Header";
import BannersTab from "../components/tabs/BannersTab";
import ButtonsTab from "../components/tabs/ButtonsTab";
import BadgesTab from "../components/tabs/BadgesTab";
import Tabs from "../components/ui/Tabs/index";

export default function ComponentsPage() {
  const tabs = [
    { label: "Buttons", tab: <ButtonsTab /> },
    { label: "Banners", tab: <BannersTab /> },
    { label: "Badges", tab: <BadgesTab /> },
  ];
  return (
    <>
      <Header />
      <main className="">
        <Tabs>
          <Tabs.List>
            {tabs.map((tab, index) => (
              <Tabs.Button index={index}>{tab.label}</Tabs.Button>
            ))}
          </Tabs.List>

          <Tabs.Display tabs={tabs} />
        </Tabs>
      </main>
    </>
  );
}
