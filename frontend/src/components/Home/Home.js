import React, { Fragment } from "react";

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
            <p>Company tables</p>
          </div>
          <div>
            {/*<img src={tablesImg} alt="" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <p>Analysis Tables</p>
          </div>
          <div>
            {/*<img src={tablesImg} alt="" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <p>Code Tables</p>
          </div>
        </div>

        <div>
          <div>
            {/*<img src={tablesImg} alt="" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <p>Robotic Tables</p>
          </div>
          <div>
            {/*<img src={tablesImg} alt="" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <p>Music</p>
          </div>
          <div>
            {/*<img src={tablesImg} alt="" />*/}
            <span class="material-symbols-outlined">star</span>

            <input type="checkbox" />
            <p>Flower tables</p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
