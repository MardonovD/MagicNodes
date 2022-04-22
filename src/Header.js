import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1>
        <span className="magic"> Magic</span>Nodes
      </h1>
      <button className="btn">Toggle Mode</button>
    </div>
  );
};

export default Header;
