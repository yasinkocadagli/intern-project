import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div>
        <button>Tablo oluştur</button>
        <div>
          <p>Tablolarım</p>
          <button>Tüm tablolar</button>
        </div>
        <div>
          <p>Takımlarım</p>
          <button>Takım oluştur</button>
        </div>
        <button>Benimle paylaşılanlar</button>
        <button>Favoriler</button>
        <button>Arşiv</button>
        <button>Çöp kutusu</button>
      </div>
    </Fragment>
  );
};

export default Sidebar;
