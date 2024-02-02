// Modal.jsx
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, item, onIncrement, onDecrement }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <h2>{item.name}</h2>
          <img src={item.img} alt="" />
          <p>{item.description}</p>
          <div className="counter">
            <button onClick={onDecrement}>-</button>
            <span>{item.counter}</span>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
