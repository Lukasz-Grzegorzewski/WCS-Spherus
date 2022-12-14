import { Routes, Route } from "react-router-dom";
import CategoryVideo from "./components/category_video/CategoryVideo";
import VideoPage from "./pages/VideoPage";
import Admin from "./pages/Admin";
import Footer from "./components/footer/Footer";
import Policy from "./components/footer/legal_pages/policy/Policy";
import TermsOfServices from "./components/footer/legal_pages/termsofservices/TermsOfServices";
import Cookies from "./components/footer/legal_pages/cookies/Cookies";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/termsofservices" element={<TermsOfServices />} />
        <Route path="/categories/:id" element={<CategoryVideo />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/videos/:idVid" element={<VideoPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
