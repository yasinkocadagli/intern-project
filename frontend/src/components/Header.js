import React, { Fragment } from "react";
import logo from "../../src/assets/jotformLogo.svg";
import icon from "../../src/assets/icons.svg";
import profile from "../../src/assets/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" />
            <span className="vertical-line"></span>
            <p className="company-name">Jotform</p>
          </div>
          <div className="nav-links">
            <p>Tablolarım</p>
            <img
              className="nav-icon"
              src={icon}
              alt="an icon with a down arrow"
            />
          </div>
          <div className="nav-links">
            <p>Formlarım</p>
            <p>Şablonlar</p>
            <p>Entegrasyonlar</p>
            <p>Ürünler</p>
            <p>Destek</p>
            <p>Kurumsal</p>
            <p>Fiyatlandırma</p>
            <img
              className="profile-icon"
              src={profile}
              alt="user profile photos"
            />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
