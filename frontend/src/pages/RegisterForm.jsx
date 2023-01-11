import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegistered } from "react-icons/fa";
import axios from "axios";
import PasswordStrengthMeter from "../components/password_strength_meter/PasswordStrengthMeter";

function RegisterForm() {
  const [checkEmail, setCheckEmail] = useState(null);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      nickname: "",
      email: "",
      birthday: "",
      password: "",
    },
    mode: "onChange",
  });

  const password = watch("password", "");

  const postNewUser = (data) => {
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/users`, data)
      .then((res) => {
        console.warn(res);
        setIsUserCreated(true);
        setTimeout(() => {
          setIsUserCreated(false);
          navigate("/");
        }, 5000);
      })
      .catch((err) => {
        console.warn(err);
        setCheckEmail(1);
        console.warn(checkEmail);
      });
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        postNewUser(data);
        reset();
        return console.warn("submitted :", data);
      })}
    >
      <FaRegistered className="register-icon" size={70} />
      <h1>Sign up</h1>
      <input
        {...register("firstname", {
          required: "with a minimum of 4 characters",
          minLength: {
            value: 4,
          },
        })}
        placeholder={
          errors.firstname ? "This field is required" : "Enter your firstname"
        }
      />
      <input
        {...register("lastname", {
          required: "This field is required",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
        })}
        placeholder={
          errors.lastname ? errors.lastname?.message : "Enter your lastname"
        }
      />
      {/* {errors.lastName && <p>{errors.lastName?.message}</p>} */}
      <input
        {...register("nickname", {
          required: "This field is required",
          minLength: {
            value: 2,
            message: "Your nickname must have two characters minimum",
          },
        })}
        placeholder={
          errors.nickname
            ? `${errors.nickname?.message}`
            : "Enter your nickname"
        }
      />
      <input
        {...register("email", {
          required: "This field is required",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message:
              "This email is invalid. Are you sure it is correctly spelled?",
          },
        })}
        placeholder={
          checkEmail !== null
            ? "This email is already used."
            : "Enter your email"
        }
        className={checkEmail === 1 ? "wrong-email" : ""}
        onClick={() => setCheckEmail(null)}
      />
      {errors.email && <p>{errors.email?.message}</p>}
      <input
        type="date"
        {...register("birthday", {
          required: "This field is required",
          minLength: {
            value: 4,
            message: "Min length : 4 characters",
          },
        })}
        placeholder="Enter your birthday"
        onClick={() => setCheckEmail(null)}
      />
      <input
        type="password"
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 4,
            message: "Min length : 12 characters",
          },
        })}
        placeholder="Enter your password"
      />
      <PasswordStrengthMeter
        password={password}
        className="password-strength-meter"
      />
      {isUserCreated ? (
        <h3>Congratulations ! Your account is created.</h3>
      ) : (
        <h3>...</h3>
      )}
      <input type="submit" />
    </form>
  );
}

export default RegisterForm;
