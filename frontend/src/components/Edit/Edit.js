import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Edit.css";

const Edit = ({ selectedTable }) => {
  const [images, setImages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    // Backend'den resimleri al
    axios
      .get("http://localhost/backend/get-table-images.php")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Resimleri alma hatası:", error);
      });
  }, []);

  const handleImageSelect = (selectedImage) => {
    // Seçilen resmi kullanıcı profiline entegre etme işlemi burada yap.
    console.log("Seçilen resim:", selectedImage);
  };

  

  return (
    <div>
      <div className="selected-table">
        {isEditing ? (
          <>
            <h2>Diğer Resimler</h2>
            <ul className="image">
              {images.map((image) => (
                <li key={image.id}>
                  <img src={image.imageUrl} alt={`Resim ${image.id}`} />
                  {image.title}
                  <button onClick={() => handleImageSelect(image)}>Seç</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>

            <img src={selectedTable.imageUrl} alt={selectedTable.category} />
            {selectedTable.category}
            <button onClick={toggleEditing}>Resmi Değiştir</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Edit;