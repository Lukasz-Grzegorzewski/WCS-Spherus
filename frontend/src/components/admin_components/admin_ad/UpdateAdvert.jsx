// import React, { useState } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";

function UpdateAdvert() {
  // const [idPub, setIdPub] = useState("");
  // const [check, setCheck] = useState(false);

  // const updatePub = () => {
  //   axios
  //     .update(
  //       `http://localhost:${
  //         import.meta.env.VITE_PORT_BACKEND
  //       }/publicities/${idPub}`,
  //       {
  //         fkVideo: `${valueVideo}`,
  //       }
  //     )
  //     .then(() => {
  //       setCheck(true);
  //       setRefresh(!refresh);
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //     });
  // };

  // const handleChange = (e) => {
  //   setIdPub(e.target.value);
  // };

  return <div>UpdateAdvert</div>;
}

export default UpdateAdvert;

// UpdateAdvert.propTypes = {
//   pub: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       url_image: PropTypes.string.isRequired,
//       url_link: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   setRefresh: PropTypes.func.isRequired,
//   refresh: PropTypes.bool.isRequired,
// };
