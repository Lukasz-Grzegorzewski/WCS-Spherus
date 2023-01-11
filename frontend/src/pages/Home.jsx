import React from "react";
import HomeDisplay from "../components/homeDisplay/HomeDisplay";
import Heroslider from "../components/heroSlider/Heroslider";
import Fixtures from "../components/fixtures/Fixtures";

export default function Home() {
  return (
    <div className="home">
      <Heroslider />
      <Fixtures />
      <div className="home_display">
        <HomeDisplay />
      </div>
    </div>
  );
}
