import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
 // const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost/backend/get-tables.php");
//       if (response.status === 200) {
//         const loginSuccesful = await performLogin(userName, password);
//         if (loginSuccesful) {
//           navigate("*");
//         } else {
//           console.error("Giriş başarısız");
//         }
//       } else {
//         console.error("API verisi alınamadı");
//       }
//     } catch (error) {
//       console.error("Bir hata oluştu:", error);
//     }
//   };
//   const performLogin = (enteredUsername, enteredPassword, backendData) => {
//     if (
//       backendData &&
//       backendData.email === enteredUsername &&
//       backendData.password === enteredPassword
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };



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
          <input
            type="email"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Forgot Password?</p>
        </div>
        <div>
          <button >Login</button>
          <p>Dont't have an account</p>
          <Link> Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;