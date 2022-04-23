import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: "",
      miqdor: 300,
    };
  }

  uzgartirish(event) {
    this.setState({ textareaValue: event.target.value });
  }

  saqlash(event) {
    let data = new Date().toLocaleDateString();
    console.log(data);

    // event.preventDefault();
    // this.hiddenInp.classList.toggle("hidden");
    let miqdor = document.querySelector(".miqdor");

    let hiddenInp = document.querySelector("#input-Card");
    hiddenInp.classList.add("hidden");
  }

  render() {
    return (
      <div className="card">
        <textarea
          name=""
          cols="30"
          rows="10"
          className="user__input"
          id="input-Card"
          onChange={(event) => this.uzgartirish(event)}
        ></textarea>
        <div className="xaracteristic">
          <p className="miqdor">
            {this.state.miqdor - this.state.textareaValue.length} Simvol
          </p>
          <button className="btn-Save" onClick={(event) => this.saqlash(event)}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
