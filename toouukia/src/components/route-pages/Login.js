import React from 'react'
import { NavLink } from 'react-router-dom';
import useFormLogin from '../../useFormLogin';
import validateInfo from '../../validateInfoLogin';
const Login = () => {
  const { handleChnage, values, handleSubmit, errors } = useFormLogin(validateInfo);
  return (
    <div className="signCt">
      {/* <h1>Create Account</h1> */}
      {/* <div className="signCtn"> */}
      <div className="">
        <img
          className="logoIm im"
          src="https://www.tookuai.com/img/logo.jfif"
          alt="BigCo Inc. logo"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signCtn2">
          <h1 style={{ color: "black", fontSize: "1.3rem" }}>
            Hey!! Welcome Back 🙂
          </h1>
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
              Passwprd
            </label>
          </p>
          <input
            placeholder="Enter Your username"
            type="Passwprd"
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
            Login
          </button>
          <p style={{ color: "black", fontSize: ".8rem", margin: ".8rem" }}>
            {" "}
            Don't have an account? <NavLink to="/">Sign in here</NavLink>
          </p>
        </label>
      </form>
      {/* </div> */}
    </div>
  );
}

export default Login
