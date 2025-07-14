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
            <main className="bg-light-primary-100 p-5 w-full h-screen">
                <Tabs className="h-full  container m-auto">
                    <h1 className="font-semibold text-2xl font-inter">
                        Components
                    </h1>
                    <Tabs.List className="bg-light-primary-200 max-w-fit p-1 rounded-md flex flex-row justify-start items-center gap-1.5">
                        {tabs.map((tab, index) => (
                            <Tabs.Button key={tab.label} index={index}>
                                {tab.label}
                            </Tabs.Button>
                        ))}
                    </Tabs.List>

                    <Tabs.Display
                        className="mt-3 p-5 w-full h-full shadow-2xl rounded-lg"
                        tabs={tabs}
                    ></Tabs.Display>
                </Tabs>
            </main>
        </>
    );
}
