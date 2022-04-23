import React from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colors(event) {
    event.preventDefault();
    document.body.classList.toggle("black");

    // if (a == 1) {
    //   document.body.style.backgroundColor = "black  ";
    //   a = 2;
    // } else {
    //   document.body.style.backgroundColor = "white  ";
    //   a = 1;
    // }
    document.documentElement.style.setProperty(" --background-color1", "black");
  }

  render() {
    return (
      <div className="header-container">
        <h1>
          <span className="magic"> Magic</span>Nodes
        </h1>
        <button className="btn" onClick={(event) => this.colors(event)}>
          Toggle Mode
        </button>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
