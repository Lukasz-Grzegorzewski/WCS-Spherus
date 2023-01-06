import { Routes, Route } from "react-router-dom";
import Profile from "@pages/Profile";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryVideo from "./components/category_video/CategoryVideo";
import VideoPage from "./pages/VideoPage";
import Admin from "./pages/Admin";
import Page404 from "./pages/Page404";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Footer from "./components/footer/Footer";
import Policy from "./components/footer/legal_pages/policy/Policy";
import TermsOfServices from "./components/footer/legal_pages/termsofservices/TermsOfServices";
import Cookies from "./components/footer/legal_pages/cookies/Cookies";
import RegisterForm from "./pages/RegisterForm";
import Home from "./pages/Home";
// import Registration from "./pages/Registration";

function App() {
  const [controlPopUpLogIn, setControlPopUpLogIn] = useState(false);

  function handlePopUpLogIn() {
    setControlPopUpLogIn(!controlPopUpLogIn);
  }

  return (
    <div className="App dark-theme">
      <Navbar
        handlePopUpLogIn={() => {
          handlePopUpLogIn();
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/termsofservices" element={<TermsOfServices />} />
        <Route path="/categories/:id" element={<CategoryVideo />} />
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/videos/:idVid" element={<VideoPage />} />
        <Route path="/profile" element={<Profile id={1} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
      {controlPopUpLogIn && <LoginPopUp />}
    </div>
  );
}

export default App;
