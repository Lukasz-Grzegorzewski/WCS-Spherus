import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Policy from "./components/footer/legal_pages/policy/Policy";
import TermsOfServices from "./components/footer/legal_pages/termsofservices/TermsOfServices";
import Cookies from "./components/footer/legal_pages/cookies/Cookies";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/termsofservices" element={<TermsOfServices />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/videos/cat/:idVid" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
