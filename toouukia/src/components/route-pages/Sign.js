import React from "react";
import { NavLink } from "react-router-dom";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const Sign = () => {
  const { handleChnage, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="signCt">
      {/* <h1>Create Account</h1> */}
      {/* <div className="signCtn"> */}
      <div className="">
        <img
          className="logoIm"
          src="https://www.tookuai.com/img/logo.jfif"
          alt="BigCo Inc. logo"
        />
        <p>Click On Login to continue</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signCtn2">
          <h1 style={{ color: "black" }}>Create Account</h1>
          <p>
            <label style={{ color: "black", fontSize: ".8rem" }}>
              Username
            </label>
          </p>
          <input
            placeholder="Enter Your username"
            name="username"
            onChange={handleChnage}
            value={values.username}
          />
          {errors.username && (
            <p style={{ color: "black", fontSize: ".8rem", color: "red" }}>
              {errors.username}
            </p>
          )}
          <p>
            <label style={{ color: "black", fontSize: ".8rem" }}>
              Password
            </label>
          </p>
          <input
            placeholder="Enter Your username"
            type="Password"
            name="password"
            onChange={handleChnage}
            value={values.password}
          />
          {errors.password && (
            <p style={{ color: "black", fontSize: ".8rem", color: "red" }}>
              {errors.password}
            </p>
          )}
        </div>
        <label>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </label>
        <p style={{ color: "black", fontSize: ".8rem", margin: ".8rem" }}>
          {" "}
          Already have an account?<NavLink to="/login">login here</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Sign;
