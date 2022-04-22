import React from "react";
import ReactDOM from "react-dom";

const Card = () => {
  return (
    <div className="card">
      <textarea name="" cols="30" rows="10" id="input-Card"></textarea>
      <div className="xaracteristic">
        <p className="miqdor">300 ta suz </p>
        <button className="btn-Save">Save</button>
      </div>
    </div>
  );
};

export default Card;
