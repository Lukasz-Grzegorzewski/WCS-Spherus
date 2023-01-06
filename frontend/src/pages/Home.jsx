import React from "react";
import HomeDisplay from "@components/homeDisplay/HomeDisplay";
import Heroslider from "../components/heroSlider/Heroslider";

export default function Home() {
  return (
    <div className="home">
      <Heroslider />
      <HomeDisplay />
      {/* <div className="home_section">
        {section.map((e) => (
          <div key={e.id}>
            <div className="home_section_container">
              <NavLink to={`/categories/${e.id}`}>
                <div>{e.name}</div>
              </NavLink>
              <NavLink to={`/categories/${e.id}`}>
                <div className="home_section_container_seebtn">See More</div>
              </NavLink>
            </div>
            <Section id={e.id} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
