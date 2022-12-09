import React, { useState, useEffect } from "react";
import Heroslider from "@components/heroSlider/Heroslider";
import axios from "axios";
import Section from "@components/section/Section";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [section, setSection] = useState([]);

  const getCategory = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setSection(res.data);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="home">
      <Heroslider />
      <div className="home_section">
        {section.map((e) => (
          <div key={e.id}>
            <div className="home_section_container">
              <NavLink to={`/categories/${e.id}`}>
                <div>{e.name}</div>
              </NavLink>
              <NavLink to={`/categories/${e.id}`}>
                <div className="home-section_container_seebtn">See More</div>
              </NavLink>
            </div>
            <Section id={e.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
