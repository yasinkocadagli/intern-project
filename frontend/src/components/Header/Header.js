import React, { Fragment } from "react";
import myImage from "../../../src/assets/profilepicture.jpg";
import logo from "../../../src/assets/logowhite.svg";

import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      {/* HEADER BEGIN */}
      <header className="header">
        {/* LOGO BEGIN */}
        <div className="logo-container">
          <span className="logo-side">
            <img src={logo} alt="company logo" />
          </span>
          <div className="logo-divider"></div>
          <div className="logo-side-text">
            <p>My Tables</p>
            <span class="material-symbols-outlined">expand_circle_down</span>

          </div>
        </div>
        {/* LOGO END*/}


        <div className="header-right-content">
          <div className="header-right-content-texts">
            <p>My Forms</p>
          </div>
          <div className="header-right-content-texts header-right-content-texts-down">
            <p>Templates</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.622797 0.234522C0.765496 0.0843576 0.959012 -3.2397e-07 1.16079 -3.14686e-07C1.36257 -3.05402e-07 1.55608 0.0843576 1.69878 0.234522L4.20459 2.87222L6.71041 0.234522C6.85392 0.0886136 7.04614 0.00787678 7.24566 0.00970181C7.44518 0.0115268 7.63604 0.0957675 7.77712 0.24428C7.91821 0.392792 7.99824 0.593693 7.99997 0.803713C8.0017 1.01373 7.92501 1.21607 7.78639 1.36714L4.74259 4.57114C4.59989 4.72131 4.40637 4.80567 4.20459 4.80567C4.00282 4.80567 3.8093 4.72131 3.6666 4.57114L0.622796 1.36714C0.48014 1.21693 0.400001 1.01323 0.400001 0.80083C0.400001 0.588433 0.48014 0.384732 0.622797 0.234522Z" fill="white" />
            </svg>
          </div>
          <div className="header-right-content-texts header-right-content-texts-down">
            <p>Integrations</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.622797 0.234522C0.765496 0.0843576 0.959012 -3.2397e-07 1.16079 -3.14686e-07C1.36257 -3.05402e-07 1.55608 0.0843576 1.69878 0.234522L4.20459 2.87222L6.71041 0.234522C6.85392 0.0886136 7.04614 0.00787678 7.24566 0.00970181C7.44518 0.0115268 7.63604 0.0957675 7.77712 0.24428C7.91821 0.392792 7.99824 0.593693 7.99997 0.803713C8.0017 1.01373 7.92501 1.21607 7.78639 1.36714L4.74259 4.57114C4.59989 4.72131 4.40637 4.80567 4.20459 4.80567C4.00282 4.80567 3.8093 4.72131 3.6666 4.57114L0.622796 1.36714C0.48014 1.21693 0.400001 1.01323 0.400001 0.80083C0.400001 0.588433 0.48014 0.384732 0.622797 0.234522Z" fill="white" />
            </svg>
          </div>
          <div className="header-right-content-texts header-right-content-texts-down">
            <p>Products</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.622797 0.234522C0.765496 0.0843576 0.959012 -3.2397e-07 1.16079 -3.14686e-07C1.36257 -3.05402e-07 1.55608 0.0843576 1.69878 0.234522L4.20459 2.87222L6.71041 0.234522C6.85392 0.0886136 7.04614 0.00787678 7.24566 0.00970181C7.44518 0.0115268 7.63604 0.0957675 7.77712 0.24428C7.91821 0.392792 7.99824 0.593693 7.99997 0.803713C8.0017 1.01373 7.92501 1.21607 7.78639 1.36714L4.74259 4.57114C4.59989 4.72131 4.40637 4.80567 4.20459 4.80567C4.00282 4.80567 3.8093 4.72131 3.6666 4.57114L0.622796 1.36714C0.48014 1.21693 0.400001 1.01323 0.400001 0.80083C0.400001 0.588433 0.48014 0.384732 0.622797 0.234522Z" fill="white" />
            </svg>
          </div>
          <div className="header-right-content-texts header-right-content-texts-down">
            <p>Support</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.622797 0.234522C0.765496 0.0843576 0.959012 -3.2397e-07 1.16079 -3.14686e-07C1.36257 -3.05402e-07 1.55608 0.0843576 1.69878 0.234522L4.20459 2.87222L6.71041 0.234522C6.85392 0.0886136 7.04614 0.00787678 7.24566 0.00970181C7.44518 0.0115268 7.63604 0.0957675 7.77712 0.24428C7.91821 0.392792 7.99824 0.593693 7.99997 0.803713C8.0017 1.01373 7.92501 1.21607 7.78639 1.36714L4.74259 4.57114C4.59989 4.72131 4.40637 4.80567 4.20459 4.80567C4.00282 4.80567 3.8093 4.72131 3.6666 4.57114L0.622796 1.36714C0.48014 1.21693 0.400001 1.01323 0.400001 0.80083C0.400001 0.588433 0.48014 0.384732 0.622797 0.234522Z" fill="white" />
            </svg>
          </div>
          <div className="header-right-content-texts">
            <p>Enterprise</p>
          </div>
          <div className="header-right-content-texts">
            <p>Pricing</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect y="8" width="32" height="32" rx="16" fill="#6F76A7" />
            <circle cx="30" cy="10" r="9" fill="#DC2626" stroke="#0A1551" stroke-width="2" />
            <circle cx="30" cy="10" r="3" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9507 18.4436C17.983 18.3009 18 18.1525 18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18C14 18.1524 14.0171 18.3009 14.0494 18.4436C12.5421 19.1697 11.5015 20.7113 11.5 22.4961C11.4907 23.7058 11.4003 24.5334 11.2019 25.2506C11.0053 25.9613 10.6875 26.6181 10.1534 27.4678C9.95966 27.776 9.94869 28.165 10.1247 28.4836C10.3008 28.8022 10.636 29 11 29H21C21.364 29 21.6992 28.8022 21.8753 28.4836C22.0513 28.165 22.0403 27.776 21.8466 27.4678C21.3125 26.6181 20.9947 25.9613 20.7981 25.2506C20.5996 24.5334 20.5093 23.7058 20.5 22.496C20.4985 20.7113 19.4579 19.1698 17.9507 18.4436ZM17 18C17 18.5523 16.5523 19 16 19C15.4478 19 15 18.5523 15 18C15 17.4477 15.4478 17 16 17C16.5523 17 17 17.4477 17 18Z" fill="white" />
            <path d="M16 32C17.1046 32 18 31.1046 18 30H14C14 31.1046 14.8954 32 16 32Z" fill="white" />
          </svg>

          <img src={myImage} alt="users profile " />
        </div>

      </header>
      {/* HEADER END */}
    </Fragment>
  );
};

export default Header;