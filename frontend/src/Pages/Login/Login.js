import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (

    <div className="login-container">
      <span className="material-symbols-outlined cancel-icon">cancel</span>

      <div className="login-content">
        <h2>Welcome Back!</h2>
        <p className="info-prg">
          Collect information, payments, and signatures with custom online forms.
        </p>
        <form>
          <div className="email-password">
            <label>Username or Email</label>
            <input type="email" />
          </div>
          <div className="email-password">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="forgot-password"> {/* Wrap "Forgot Password?" text */}
            <p>Forgot Password?</p>
          </div>

          <div className="login">
            <button>Login</button>
            <div className="signup">
              <p>Dont't have an account</p>
              <h1> Sign up</h1>
            </div>
          </div>

        </form>
      </div>

    </div>

  );
};

export default Login;
