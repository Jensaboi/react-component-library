import TabButton from "./ui/TabButton"

export default function TabsNavbar({tabs, tabIndex, setCurrentTabIndex}){
    return tabs ? (
        <nav className="">
            <ul className="container flex flex-row gap-1">
                {
                    tabs.map((tab, index) => (
                        <TabButton
                            variant={index === tabIndex ? 'selected' : ''}
                            onClick={() =>setCurrentTabIndex(index)}
                            key={tab.label}
                        >
                            {tab.label}
                        </TabButton>
                    ))
                }
            </ul>
        </nav>
    ) : null
}
