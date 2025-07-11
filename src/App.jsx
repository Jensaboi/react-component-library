import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import ComponentsPage from "./pages/ComponentsPage";


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Components" element={<ComponentsPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
