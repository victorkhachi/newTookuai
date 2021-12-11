import React from 'react'
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div className="signCt shadow-lg">
      <h1>Hi 😊 Welcome Back</h1>
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
          <NavLink to="/Dash" className="btn">
            Login
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login
