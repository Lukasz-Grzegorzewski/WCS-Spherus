import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaPen } from "react-icons/fa";
import AvatarPicPrompt from "./AvatarPicPrompt";

function Avatar({
  id,
  photoSrc,
  // refresh,
  // setRefresh,
  getUser,
}) {
  const [cardToggle, setCardToggle] = useState(false);
  const [url, setUrl] = useState(photoSrc);

  function handleClick() {
    setCardToggle(true);
    // setRefresh(!refresh);
    getUser();
    const pointToScroll = document.querySelector(".img-profile");
    pointToScroll.scrollIntoView();
  }

  async function handleSetUrl() {
    await setUrl(photoSrc);
  }
  useEffect(() => {
    handleSetUrl();
  }, [photoSrc, cardToggle, setUrl]);

  return (
    <div className="img-profile-container">
      {url && <img className="img-profile" src={url} alt="profile img" />}
      <button
        className="btn-choose-pic"
        type="button"
        onClick={() => handleClick()}
      >
        <FaPen className="pen" />
      </button>
      {cardToggle && (
        <AvatarPicPrompt
          id={id}
          getUser={() => getUser()}
          setUrl={setUrl}
          setCardToggle={setCardToggle}
        />
      )}
    </div>
  );
}

export default Avatar;

Avatar.propTypes = {
  photoSrc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // refresh: PropTypes.bool.isRequired,
  // setRefresh: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};
