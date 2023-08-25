import React, { Fragment } from "react";
import logo from "../../src/assets/jotformLogo.svg";
import icon from "../../src/assets/icons.svg";
import profile from "../../src/assets/profile.png";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div>
          <div className="logo-container">
            <img src={logo} alt="Company Logo" />
            <span className="vertical-line"></span>
            <p className="company-name">Jotform</p>
          </div>
          <div>
            <p>Tablolarım</p>
            <img className="icons" src={icon} alt="an icon with a down arrow" />
          </div>
          <div>
            <p>Formlarım</p>
            <p>Şablonlar</p>
            <p>Entagrasyonlar</p>
            <p>Ürünler</p>
            <p>Destek</p>
            <p>Kurumsal</p>
            <p>Fiyatlandırma</p>
            <img src={profile} alt="user profile photos" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
