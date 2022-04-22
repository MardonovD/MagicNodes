import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1>
        Magic<span>Nodes</span>
      </h1>
      <button className="btn">Toggle Mode</button>
    </div>
  );
};

export default Header;
