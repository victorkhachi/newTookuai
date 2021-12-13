import React from 'react'
import { NavLink } from "react-router-dom";
const Sign = () => {
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
        <h2 style={{ marginTop:"2.9rem" }}>Toukia</h2>
        <p>Admin Dashboard</p>
        <p>Better Decision Making</p>
        <p>Access To Data</p>
      </div>
      <form>
        <div className="signCtn2">
          <h1 style={{ color: "black" }}>Create Account</h1>
          <p>
            <label>Username</label>
          </p>
          <input placeholder="Enter Your username" />
          <p>
            <label>Passwprd</label>
          </p>
          <input placeholder="Enter Your username" type='Passwprd'/>
        </div>
        <label>
          <NavLink to="/login" className="btn">
            Sign Up
          </NavLink>
        </label>
      </form>
      {/* </div> */}
    </div>
  );
}

export default Sign
