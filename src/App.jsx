import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  {ThemeContext} from "./context/ThemeContext"
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";


function App() {

    const { isDarkMode, toggleTheme } = React.useContext(ThemeContext)

  return (
    <>
        <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
