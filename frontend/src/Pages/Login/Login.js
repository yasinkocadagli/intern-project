import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <span className="material-symbols-outlined">cancel</span>
      <h2>Welcome Back!</h2>
      <p>
        Collect information, payments, and signatures with custom online forms.
      </p>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
          <p>Forgot Password?</p>
        </div>
        <div>
          <button>Login</button>
          <p>Dont't have an account</p>
          <Link> Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
