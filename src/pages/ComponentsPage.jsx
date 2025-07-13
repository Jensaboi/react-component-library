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
      <main className="p-2 pt-5 flex flex-col gap-2 h-screen">
        <h1 className="font-semibold text-2xl font-inter text-gray-900">
          Components
        </h1>
        <Tabs>
          <Tabs.List className="bg-gray-100 p-1 rounded-md flex flex-row justify-start items-center gap-1.5">
            {tabs.map((tab, index) => (
              <Tabs.Button index={index}>{tab.label}</Tabs.Button>
            ))}
          </Tabs.List>

          <Tabs.Display
            className="border-1 border-gray-200 h-full rounded-lg p-5"
            tabs={tabs}
          />
        </Tabs>
      </main>
    </>
  );
}
