import React, { useState, useEffect } from "react";
import Heroslider from "@components/heroSlider/Heroslider";
import axios from "axios";

import Section from "@components/section/Section";

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

  // const [video, setVideo] = useState([]);

  // const getVideo = () => {
  //   section.forEach((s) =>
  //     axios
  //       .get(
  //         `http://localhost:${import.meta.env.VITE_PORT_BACKEND
  //         }/videos/categories/${s.id}`
  //       )
  //       .then((res) => {
  //         setVideo([...video, ...res.data]);
  //       }));
  // };

  // useEffect(() => {
  //   if (section)
  //     getVideo();
  // }, [section]);

  return (
    <div className="home">
      <Heroslider />
      <div className="home_section">
        {section.map((e) => (
          <div key={e.id}>
            <div className="home_section_container">{e.name}</div>
            <Section id={e.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
