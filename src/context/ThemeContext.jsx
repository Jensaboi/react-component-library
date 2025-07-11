import React, { useState } from "react"

const ThemeContext = React.createContext()

export default function ThemeContextProvider({children}){

    const [isDarkMode , setIsDarkMode ] = useState(()=>{
        const currentTheme = localStorage.getItem('theme')
        return currentTheme === 'dark' ? true : false
    })

    function toggleTheme(){
        setIsDarkMode(prev => !prev)
    }

    React.useEffect(()=>{
        const theme = isDarkMode ? 'dark' : 'light'

        const root = document.documentElement

        root.classList.toggle('dark', isDarkMode)

        localStorage.setItem('theme', theme)
    },[isDarkMode])

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
