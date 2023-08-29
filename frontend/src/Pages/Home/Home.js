import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const showNavbarhandler = (e) => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };

  return (
    <Fragment>
      <main>
        {showNavbar ? (
          <div className="up-content">
            <div className="update-button">
              <button>
                <span className="material-symbols-outlined">notes</span> Son
                güncelleme
              </button>
            </div>

            <div className="search-box">
              <span className="material-symbols-outlined">search</span>
              <input type="search" placeholder="Tablolarımı ara" />
            </div>
          </div>
        ) : (
          <div>
            <button>
              <span class="material-symbols-outlined">groups</span>Move to team
            </button>
            <button>
              <span class="material-symbols-outlined">edit</span>Edit
            </button>
            <button>
              <span class="material-symbols-outlined">share</span>Share
            </button>
            <button>
              <span class="material-symbols-outlined">inbox</span>Archive
            </button>
            <button>
              <span class="material-symbols-outlined">delete</span>Delete
            </button>
          </div>
        )}

        <div className="bottom-line"></div>
        <div className="content">
          {/*<img src={tablesImg} alt="company photos" />*/}
          <span className="material-symbols-outlined">star</span>

          <input type="checkbox" onClick={showNavbarhandler} />
          <Link to="/table">Company tables</Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
