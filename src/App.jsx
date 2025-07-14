import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ComponentsPage from "./pages/ComponentsPage";
import GetStartedPage from "./pages/GetStartedPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Components" element={<ComponentsPage />} />
                    <Route path="/Get started" element={<GetStartedPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
