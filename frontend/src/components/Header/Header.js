import React, { Fragment, useState, useEffect } from "react";
import logo from "../../../src/assets/jotformLogo.svg";
import "./Header.css";

const Header = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  
  useEffect(() => {
    // Sunucudan avatar URL'sini alın ve state'i güncelleyin
    fetch('/path/to/get-avatar.php') // get-avatar.php dosyanızın yoluna göre düzenleyin
      .then(response => response.json())
      .then(data => setAvatarUrl(data.avatarUrl))
      .catch(error => console.error('Error fetching avatar URL:', error));
  }, []);

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
          <img src={avatarUrl} alt="users profile" />
        </div>
      </header>
      {/* HEADER END */}
    </Fragment>
  );
};

export default Header;
