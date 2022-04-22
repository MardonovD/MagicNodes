import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Search from "./Search.js";
import Card from "./Card.js";

// const Index = () => {
//   return (
//     <div className="big__container">
//       <Header />
//       <Search />
//       <div className="card-flex">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<Index />, document.querySelector("#root"));

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="big__container">
        <Header />
        <Search />
        <div className="card-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.querySelector("#root"));
