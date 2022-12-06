import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<LoginPopUp />} />
      </Routes>
    </div>
  );
}

export default App;
