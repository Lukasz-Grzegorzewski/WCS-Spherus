import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";

// const Profile = lazy(() => import("@pages/Profile"));

const Home = lazy(() => import("@pages/Home"));
const Policy = lazy(() =>
  import("@components/footer/legal_pages/policy/Policy")
);
const Cookies = lazy(() =>
  import("@components/footer/legal_pages/cookies/Cookies")
);
const TermsOfServices = lazy(() =>
  import("@components/footer/legal_pages/termsofservices/TermsOfServices")
);
const CategoryPage = lazy(() => import("@pages/CategoryPage"));
const RegisterForm = lazy(() => import("@pages/RegisterForm"));
const VideoPage = lazy(() => import("@pages/VideoPage"));
const Admin = lazy(() => import("@pages/Admin"));
const Page404 = lazy(() => import("@pages/Page404"));
const Profile = lazy(() => import("@pages/Profile"));
const Navbar = lazy(() => import("@components/navbar/Navbar"));
const Footer = lazy(() => import("@components/footer/Footer"));
const LoginPopUp = lazy(() => import("@components/loginPopUp/LoginPopUp"));
const Favorite = lazy(() => import("@components/favorite_page/Favorite"));

function App() {
  const [controlPopUpLogIn, setControlPopUpLogIn] = useState(false);

  function handlePopUpLogIn() {
    setControlPopUpLogIn(!controlPopUpLogIn);
  }

  const [token, setToken] = useState({
    userToken: "",
    isAdmin: "",
    id: "",
  });

  const [themeToggle, setThemeToggle] = useState(false);

  const themeControlObject = useMemo(() => {
    return { themeToggle, setThemeToggle };
  }, [themeToggle]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(JSON.parse(localStorage.getItem("token")));
    }
  }, []);

  return (
    <div className={themeToggle ? "App light-theme" : "App dark-theme"}>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner" />
            <p>Loading</p>
          </div>
        }
      >
        <ThemeContext.Provider value={themeControlObject}>
          <UserContext.Provider value={token}>
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
              <Route path="/categories/:id" element={<CategoryPage />} />
              <Route path="/registration" element={<RegisterForm />} />
              <Route path="/videos/:id" element={<VideoPage />} />
              <Route path="/profile" element={<Profile id={1} />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/*" element={<Page404 />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </UserContext.Provider>
        </ThemeContext.Provider>
        <Footer />
        {controlPopUpLogIn && (
          <LoginPopUp
            setToken={setToken}
            setControlPopUpLogIn={setControlPopUpLogIn}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
