import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <main>

        <div className="up-content">
          <div className="update-button">
            <button><span class="material-symbols-outlined">notes</span> Son güncelleme
            </button>
          </div>

          <div className="search-box">
            <span class="material-symbols-outlined">search</span>
            <input type="search" placeholder="Tablolarımı ara" />
          </div>
        </div>

        <div className="bottom-line">

        </div>


          <div className="content">
            {/*<img src={tablesImg} alt="company photos" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <Link to="/table">Company tables</Link>

          </div>

      </main>
    </Fragment>
  );
};

export default Home;
