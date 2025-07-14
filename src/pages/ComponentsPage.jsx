import Header from "../components/Header";
import BannersTab from "../components/tabs/BannersTab";
import ButtonsTab from "../components/tabs/ButtonsTab";
import BadgesTab from "../components/tabs/BadgesTab";
import Tabs from "../components/ui/Tabs/index";
import CardsTab from "../components/tabs/CardsTab";
import TestimonialsTab from "../components/tabs/TestimonialsTab";

export default function ComponentsPage() {
  const tabs = [
    { label: "Buttons", tab: <ButtonsTab /> },
    { label: "Banners", tab: <BannersTab /> },
    { label: "Badges", tab: <BadgesTab /> },
    { label: "Cards", tab: <CardsTab /> },
    { label: "Testimonials", tab: <TestimonialsTab /> },
  ];
  return (
    <>
      <div className="bg-light-primary-100 flex flex-col min-h-screen w-full gap-2">
        <Header />
        <main className="flex-1 p-5 w-full h-full">
          <Tabs className="container mx-auto">
            <h1 className="font-semibold text-2xl font-inter">Components</h1>
            <Tabs.List className="bg-light-primary-200 max-w-fit shadow-lg py-1 px-2 rounded-md flex flex-row justify-start items-center gap-1.5">
              {tabs.map((tab, index) => (
                <Tabs.Button key={tab.label} index={index}>
                  {tab.label}
                </Tabs.Button>
              ))}
            </Tabs.List>

            <Tabs.Display
              className="bg-light-primary mt-3 p-5 w-full min-h-[600px] shadow-xl rounded-lg"
              tabs={tabs}
            ></Tabs.Display>
          </Tabs>
        </main>
      </div>
    </>
  );
}
