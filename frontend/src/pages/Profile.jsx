import UpdateUserByUser from "@components/profile/UpdateUserByUser";
import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import DeleteUser from "@components/profile/DeleteUser";
import Avatar from "@components/profile/Avatar";

function Profile({ id }) {
  const [user, setUser] = useState(null);

  const [firstnameUpdate, setFirstnameUpdate] = useState(false);
  const [lastnameUpdate, setLastnameUpdate] = useState(false);
  const [nicknameUpdate, setNicknameUpdate] = useState(false);
  const [birthdayUpdate, setBirthdayUpdate] = useState(false);
  const [emailUpdate, setEmailUpdate] = useState(false);
  const [passwordUpdate, setPasswordUpdate] = useState(false);
  const [refresh, setRefresh] = useState(false);

  function getUser() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getUser();
  }, [refresh, id]);

  return (
    <div className="profile-conatainer">
      {user && refresh !== undefined && (
        <div>
          <Avatar
            id={id}
            refresh={refresh}
            setRefresh={setRefresh}
            photoSrc={
              user.url
                ? `${import.meta.env.VITE_PORT_BACKEND}/${user.url}`
                : "https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-man-default-avatar-png-image_2813122.jpg"
            }
          />
          <div className="user-details-container">
            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Firstname</h2>
                <p>{user.firstname}</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(!firstnameUpdate);
                    setLastnameUpdate(false);
                    setNicknameUpdate(false);
                    setBirthdayUpdate(false);
                    setEmailUpdate(false);
                    setPasswordUpdate(false);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {firstnameUpdate && (
                <UpdateUserByUser
                  type="text"
                  keyName="firstname"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setFirstnameUpdate}
                />
              )}
            </div>

            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Lastname</h2>
                <p>{user.lastname}</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(false);
                    setLastnameUpdate(!lastnameUpdate);
                    setNicknameUpdate(false);
                    setBirthdayUpdate(false);
                    setEmailUpdate(false);
                    setPasswordUpdate(false);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {lastnameUpdate && (
                <UpdateUserByUser
                  type="text"
                  keyName="lastname"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setLastnameUpdate}
                />
              )}
            </div>

            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Nickname</h2>
                <p>{user.nickname}</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(false);
                    setLastnameUpdate(false);
                    setNicknameUpdate(!nicknameUpdate);
                    setBirthdayUpdate(false);
                    setEmailUpdate(false);
                    setPasswordUpdate(false);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {nicknameUpdate && (
                <UpdateUserByUser
                  type="text"
                  keyName="nickname"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setNicknameUpdate}
                />
              )}
            </div>

            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Birthday</h2>
                <p>{user.birthday?.split("T")[0]}</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(false);
                    setLastnameUpdate(false);
                    setNicknameUpdate(false);
                    setBirthdayUpdate(!birthdayUpdate);
                    setEmailUpdate(false);
                    setPasswordUpdate(false);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {birthdayUpdate && (
                <UpdateUserByUser
                  type="date"
                  keyName="birthday"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setBirthdayUpdate}
                />
              )}
            </div>

            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Email</h2>
                <p>{user.email}</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(false);
                    setLastnameUpdate(false);
                    setNicknameUpdate(false);
                    setBirthdayUpdate(false);
                    setEmailUpdate(!emailUpdate);
                    setPasswordUpdate(false);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {emailUpdate && (
                <UpdateUserByUser
                  type="email"
                  keyName="email"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setEmailUpdate}
                />
              )}
            </div>

            <div className="fields-container">
              <div className="field-user">
                <h2 htmlFor="">Password</h2>
                <p>******</p>
                <button
                  className="btn-update-toggle"
                  type="button"
                  onClick={() => {
                    setFirstnameUpdate(false);
                    setLastnameUpdate(false);
                    setNicknameUpdate(false);
                    setBirthdayUpdate(false);
                    setEmailUpdate(false);
                    setPasswordUpdate(!passwordUpdate);
                  }}
                >
                  <FaPen className="pen" />
                </button>
              </div>
              {passwordUpdate && (
                <UpdateUserByUser
                  type="password"
                  keyName="password"
                  id={id}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  closeUpdateInput={setPasswordUpdate}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <DeleteUser id={id} />
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  id: PropTypes.number.isRequired,
};
