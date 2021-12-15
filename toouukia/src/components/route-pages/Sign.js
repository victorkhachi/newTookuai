import React from 'react'
import { NavLink } from "react-router-dom";
import useForm from '../../useForm';
import validate from '../../validateInfo';
const Sign = () => {
  const {handleChnage, values, handleSubmit, errors} = useForm(validate)
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
          Already have an account? <NavLink to="/login">login here</NavLink>
        </p>
      </form>
    </div>
    // </div>
  );
}

export default Sign
