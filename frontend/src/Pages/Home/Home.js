import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import Edit from "../../components/Edit/Edit";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [tables, setTables] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);

  const handleTableSelect = (tableId) => {
    setSelectedTableId(tableId);
  };



  const editchangeHandler = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  

  const showNavbarHandler = (tableId) => {
    setSelectedTableId((prevTableId) => (prevTableId === tableId ? null : tableId));
    setShowNavbar(selectedTableId === tableId);
  };
  const toggleDropdown = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  
  const changeStarColor = (index) => {
    const newTables = [...tables];
    newTables[index].starColor =
      newTables[index].starColor === "#FFB629" ? "#c8ceed" : "#FFB629";
    setTables(newTables);
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
          <div className="mid-buttons">
            <button>
              <span className="material-symbols-outlined">groups</span>Move to
              team
            </button>
            <button onClick={editchangeHandler}>
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
            {tables.map((table, index) => (
              <li className="table-item" key={table.id}>
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => showNavbarHandler(table.id)}
                  checked={selectedTableId === table.id}
                />
                <span
                  className="material-symbols-outlined"
                  style={{ color: table.starColor }}
                  onClick={() => changeStarColor(index)}
                >
                  star
                </span>
                <div className="table-link">
                  <Link to="/table">
                    {<img key={index} src={table.imageUrl} alt=" " />}
                  </Link>
                  <span className="table-category">{table.title}</span>
                </div>
                <div className="more-side">
                  <p>More</p>
                  <button
                    onClick={() => {
                      toggleDropdown(index);
                      handleTableSelect(table.id);
                    }}
                    className="material-symbols-outlined"
                  >
                    expand_more
                  </button>
                  {expandedIndex === index && (
                    <ul className="dropdown-content">
                      <li>
                        <p>Paylaş</p>
                      </li>
                      <li>
                        <p>Düzenle</p>
                      </li>
                      <li>
                        <p>Arşivle</p>
                      </li>
                      <li>
                        <p>Sil</p>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {isEditing && selectedTableId !== null && (
          <Edit selectedTable={tables.find((table) => table.id === selectedTableId)} />
        )}
      </div>
    </Fragment>
  );
};

export default Home;