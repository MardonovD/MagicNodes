import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Search from "./Search.js";
import Card from "./Card.js";
// console.log(Card);
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
    this.state = {
      textareaValue: "",
    };
    // this.setState({ textareaValue: document.querySelector(".") });
  }

  render() {
    return (
      <div className="big__container">
        <Header />
        <Search />

        <div className="card-flex">
          <Card />
        </div>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.querySelector("#root"));

// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textareaValue: "",
//     };
//   }

//    handleOnChange(event) {
//     this.setState({
//       textareaValue: .targeventet.value,
//     });
//     console.log(this.state.textareaValue.length)
//    }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.textareaValue);
//     this.setState({
//       textareaValue:
//         this.state.textareaValue +
//         " [Saved on " +
//         new Date().toLocaleString() +
//         "]",
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <textarea
//             rows={10}
//             cols={30}
//             value={this.state.textareaValue}
//             onChange={(event) => this.handleOnChange(event)}
//           ></textarea>
//           <br />
//           <input type="submit" value="Save" />
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Editor />, document.getElementById("root"));
