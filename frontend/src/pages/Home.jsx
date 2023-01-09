import React from "react";
import HomeDisplay from "@components/homeDisplay/HomeDisplay";
import Heroslider from "../components/heroSlider/Heroslider";

export default function Home() {
  return (
    <div className="home">
      <Heroslider />
      <div className="home_display">
        <HomeDisplay />
      </div>
    </div>
  );
}
