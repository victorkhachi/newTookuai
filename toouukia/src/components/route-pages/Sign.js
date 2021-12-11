import React from 'react'
import { NavLink } from "react-router-dom";

const Sign = () => {
  return (
    <div className="signCt shadow-lg">
      <h1>Create Account</h1>
      <div className="signCtn">
        <div className="signCtn1">
          <i class="fas fa-car">
            {" "}
            <h2>Toukia Admin</h2>
          </i>
        </div>
        <form>
          <div className="signCtn2">
            <p>
              <label>Username</label>
            </p>
            <input placeholder="Enter Your username" />
            <p>
              <label>Passwprd</label>
            </p>
            <input placeholder="Enter Your username" />
          </div>
          <label>
            <NavLink to="/login" className="btn">
              Sign Up
            </NavLink>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Sign
