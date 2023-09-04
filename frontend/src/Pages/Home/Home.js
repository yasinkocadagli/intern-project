import React, { Fragment, useEffect, useState } from "react";
import myImage from "../../../src/assets/profilepicture.jpg";

import axios from "axios";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableIds, setSelectedTableIds] = useState([]);
  const [tables, setTables] = useState([]);

  const showNavbarHandler = (index) => {
    const newSelectedTableIds = selectedTableIds.includes(index)
      ? selectedTableIds.filter((id) => id !== index)
      : [...selectedTableIds, index];
    setSelectedTableIds(newSelectedTableIds);

    setShowNavbar(newSelectedTableIds.length === 0 ? false : true);
  };

 

  useEffect(() => {
    axios
      .get("http://localhost/backend/get-tables.php")
      .then((response) => {
        setTables(response.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);

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
          <div className="mid-buttons">
            <button>
              <span className="material-symbols-outlined">groups</span>Move to
              team
            </button>
            <button>
              <span className="material-symbols-outlined">edit</span>Edit
            </button>
            <button>
              <span className="material-symbols-outlined">share</span>Share
            </button>
            <button>
              <span className="material-symbols-outlined">inbox</span>Archive
            </button>
            <button>
              <span className="material-symbols-outlined delete-button">
                delete
              </span>
              Move to Trash
            </button>
          </div>
        )}

        <div className="bottom-line"></div>
        <div className="content">
          <ul className="table-list">
            {tables.map((tables, index) => (
              <li key={index}>
                <span className="material-symbols-outlined">star</span>
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => showNavbarHandler(index)}
                  checked={selectedTableIds.includes(index)}
                />
                {tables.title}
                <Link to="/table"> <img src={myImage} alt="" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
