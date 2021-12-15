import React from 'react'
import { NavLink } from 'react-router-dom';
import useFormLogin from '../../useFormLogin';
import validateInfo from '../../validateInfoLogin';
const Login = () => {
  const { handleChnage, values, handleSubmit, errors } = useFormLogin(validateInfo);
  return (
    <div className="signCt shadow-lg">
      {/* <h1>Create Account</h1> */}
      {/* <div className="signCtn"> */}
      <div
        className="signCtn1"
        style={{
          backgroundImage: `url("https://matx-react.ui-lib.com/assets/images/bg-3.png")`,
        }}
      >
        <h2 style={{ marginTop: "2.9rem" }}>Toukia</h2>
        <p>Admin Dashboard</p>
        <p>Better Decision Making</p>
        <p>Access To Data</p>
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
            Sign Up
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
