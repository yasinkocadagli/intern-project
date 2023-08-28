import React, { Fragment } from "react";
import myImage from "../../../src/assets/profilepicture.jpg";
import logo from "../../../src/assets/jotformLogo.svg";

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
            <p>Tablolarım</p>
            <span class="material-symbols-outlined">expand_circle_down</span>

            {/* Buraya ikon ekle */}
          </div>
        </div>
        {/* LOGO END*/}

        <div className="header-right-content">
          <div className="header-right-content-texts">
            <p>Formlarım</p>
            <p>Şablonlar</p>
            <p>Entegrasyonlar</p>
            <p>Ürünler</p>
            <p>Destek</p>
            <p>Kurumsal</p>
            <p>Fiyatlandırma</p>
          </div>
          <img src={myImage} alt="users profile " />
        </div>
      </header>
      {/* HEADER END */}
    </Fragment>
  );
};

export default Header;
