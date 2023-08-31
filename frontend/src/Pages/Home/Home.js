import React, { Fragment, useState } from "react";

import "./Home.css";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableIndex, setSelectedTableIndex] = useState([]);

  const showNavbarHandler = (index) => {
    if (selectedTableIndex === index) {

      setSelectedTableIndex({...selectedTableIndex,index});
      setShowNavbar(false);
    } else {
      setSelectedTableIndex(index);
      setShowNavbar(true);
    }
    console.log(selectedTableIndex);
  };

  const tableContents = [
    { name: "Company Tables", checked: false },
    { name: "Music Tables", checked: false },
  ];

  return (
    <Fragment>
      <div className="main">
        {!showNavbar ? (
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
          <ul className="table-list">
            {tableContents.map((tables, index) => (
              <li key={index}>
                <span className="material-symbols-outlined">star</span>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onClick={() => showNavbarHandler(index)}
                  checked={selectedTableIndex === index}
                />
                {tables.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
