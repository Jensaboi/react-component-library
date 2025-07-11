import React from "react"
import Badge from "./componets/Badge"
import Banner from "./componets/Banner"
import  {ThemeContext} from "./context/ThemeContext"

function App() {

    const { isDarkMode, toggleTheme } = React.useContext(ThemeContext)

  return (
    <>


        <h1>Component Library</h1>
        <button onClick={toggleTheme}>{isDarkMode ? 'Darkmode' : 'Lightmode'}</button>

        <br />
        <h2>Badges</h2>
        <br />
        <section className="badge-section">
            <Badge color="grey" variant="square">Badge1</Badge>
            <Badge color="indigo" variant="pill">Badge2</Badge>
            <Badge color="green" variant="square">Badge3</Badge>
            <Badge color="red" variant="pill">Badge</Badge>
            <Badge color="purple" variant="square">Badge</Badge>
            <Badge color="pink" variant="pill">Badge</Badge>
            <Badge color="yellow" variant="square">Badge</Badge>
            <Badge color="blue" variant="pill">Badge</Badge>
        </section>
        <h2>Banners</h2>
        <br />
        <section className="banner-section">
            <Banner size="100%" variant='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus?</Banner>
            <Banner size="100%" variant='warning' title="Warning: you need to...">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quas fugit ducimus.</Banner>
            <Banner size="100%" variant='error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui! </Banner>
            <Banner size="100%" variant='neutral'title="You have availbe updates!">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, culpa?</Banner>
            <Banner size="370px" variant="success" title="Donwload completed" />
            <Banner size="370px" variant="warning" />
            <Banner size="370px" variant="error" />
            <Banner size="370px" variant="neutral" />
        </section>
        <h2>Cards</h2>
        <br />
        <section>

        </section>
    </>
  )
}

export default App
