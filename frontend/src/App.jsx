import { Routes, Route } from "react-router-dom";
import CategoryVideo from "@components/category_video/CategoryVideo";
import Footer from "./components/footer/Footer";
import Policy from "./components/footer/legal_pages/policy/Policy";
import TermsOfServices from "./components/footer/legal_pages/termsofservices/TermsOfServices";
import Cookies from "./components/footer/legal_pages/cookies/Cookies";
import Home from "./pages/Home";
// import LoginPopUp from "./components/loginPopUp/LoginPopUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/termsofservices" element={<TermsOfServices />} />
        <Route path="/categories/:id" element={<CategoryVideo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
