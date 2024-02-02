import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./Porsche.module.scss";

const url =
  "https://api.elchocrud.pro/api/v1/4be4f2212bbde5127ff2ea90cd1a3f8f/porsche";

const Porsche = () => {
  const [porsche, setPorsche] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [counter, setCounter] = useState(1); 

  const getRequest = async () => {
    try {
      const response = await axios.get(url);
      setPorsche(response.data);
    } catch (error) {
      console.error("Error fetching Porsche data:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) { 
      setCounter(counter - 1);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setCounter(1); 
  };

  return (
    <section className={scss.Porsche}>
      <div className="container">
        {porsche.map((item, index) => (
          <div
            className={scss.porscheCard}
            key={index}
            onClick={() => handleCardClick(item)}
          >
            <div className={scss.cardInner}>
              <div className={scss.cardImage}>
                <img src={item.img} alt="" />
              </div>
              <div className={scss.cardContent}>
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className={scss.modal}>
          <div className={scss.modalContent}>
            <button className={scss.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{selectedItem.name}</h2>
            <h3>{selectedItem.price * counter}</h3>
            <img src={selectedItem.img} alt="" />
            <p>{selectedItem.description}</p>
            <div className={scss.counter}>
              <button onClick={handleDecrement}>-</button>
              <span>{counter}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Porsche;
