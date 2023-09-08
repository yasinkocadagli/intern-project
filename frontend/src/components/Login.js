// import React, { useState } from "react";
// import "./Login.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost/backend/get-tables.php",
//         {
//           email: email,
//           password: password,
//         }
//       );

//       if (response.status === 200) {
//         const backendData = response.data;
//         const loginSuccessful = performLogin(email, password, backendData);

//         if (loginSuccessful) {
//           navigate("/layout");
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

//   const mailChangeHandler = (e) => {
//     setEmail(e.target.value);
//   };
//   const pswChangeHandler = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="login-container">
//       <span className="material-symbols-outlined cancel-icon">cancel</span>

//       <div className="login-content">
//         <h2>Welcome Back!</h2>
//         <p className="info-prg">
//           Collect information, payments, and signatures with custom online
//           forms.
//         </p>
//         <form>
//           <div className="email-password">
//             <label>Username or Email</label>
//             <input value={email} onChange={mailChangeHandler} type="email" />
//           </div>
//           <div className="email-password">
//             <label>Password</label>
//             <input
//               value={password}
//               onChange={pswChangeHandler}
//               type="password"
//             />
//           </div>
//           <div className="forgot-password">
//             <p>Forgot Password?</p>
//           </div>

//           <div className="login">
//             <button type="button" onClick={handleLogin}>
//               Login
//             </button>
//             <div className="signup">
//               <p>Don't have an account</p>
//               <Link className="signup-style" to="/layout">
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import "./Login.css";
 import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/layout");
    }
  }, );

  const handleLogin = async () => {
    console.warn(email, password);
    const item = { email, password };
    let result = await fetch("http://localhost/backend/get-tables.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("myKey", JSON.stringify(result));
    navigate("/layout");
  };

  const mailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const pswChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <span className="material-symbols-outlined cancel-icon">cancel</span>

      <div className="login-content">
        <h2>Welcome Back!</h2>
        <p className="info-prg">
          Collect information, payments, and signatures with custom online
          forms.
        </p>
        <form>
          <div className="email-password">
            <label>Username or Email</label>
            <input value={email} onChange={mailChangeHandler} type="email" />
          </div>
          <div className="email-password">
            <label>Password</label>
            <input
              value={password}
              onChange={pswChangeHandler}
              type="password"
            />
          </div>
          <div className="forgot-password">
            <p>Forgot Password?</p>
          </div>

          <div className="login">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <div className="signup">
              <p>Don't have an account</p>
              <Link className="signup-style" to="/layout">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;