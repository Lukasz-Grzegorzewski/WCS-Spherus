import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import Section from "@components/section/Section";

function Video({
  idCat,
  title,
  description,
  category,
  date,
  display,
  videoUrl,
}) {
  const url = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }${videoUrl}`;

  return (
    <div className="video-component">
      {/* VIDEO */}
      <div className="video-player">
        {display === 1 ? (
          <div>
            <video className="video" src={url} controls>
              <track kind="captions" />
            </video>
            <CiLock className="lock lock-icon-video" />
          </div>
        ) : (
          <video className="video locked" src={url}>
            <track kind="captions" />
          </video>
        )}
      </div>
      {/* END VIDEO */}
      {/* DESCRIPTION */}
      <div className="description">
        {display === 0 && (
          <div>
            <h1>
              <CiLock className="lock lock-icon-sub" />
              Icone LOCK
            </h1>
            <p>Content reserved for subscribers</p>
            <button type="button" className="btn btn-subscribe">
              <NavLink to="/registration">Subscribe</NavLink>
            </button>
          </div>
        )}
        <div>
          <hr />
          <h1>INFORMATION</h1>

          <p>{title}</p>
          <p>{description}</p>
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <div>
          <hr />
          Id of this video's Category : {idCat}
          <Section id={idCat} />
          <button type="button" className="btn btn-seemore">
            <NavLink to={`/categories/${idCat}`}>See More</NavLink>
          </button>
        </div>
      </div>
      {/* END DESCRIPTION */}
    </div>
  );
}

export default Video;

Video.propTypes = {
  idCat: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  display: PropTypes.number.isRequired,
};
