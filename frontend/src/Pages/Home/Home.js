import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>

    
      <main>
        <div>
          <div>
            <span class="material-symbols-outlined">notes</span>
            <button>Son güncelleme</button>
          </div>
          <span class="material-symbols-outlined">search</span>
          <input type="search" placeholder="Tablolarımı ara" />
        </div>
        <div>
          <div>
            {/*<img src={tablesImg} alt="company photos" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <Link to="/table">Company tables</Link>

          </div>
        </div>

      </main>
    </Fragment>
  );
};

export default Home;
