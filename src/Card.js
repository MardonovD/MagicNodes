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
    console.log(this.state);
  }

  saqlash(event) {
    let data = new Date().toLocaleDateString();
    let saveCardDiv = document.querySelector(".saveCardDiv");
    let btnSave = document.querySelector(".btn-Save");
    let miqdor = document.querySelector(".miqdor");
    let ochirish = document.querySelector(".ochirish");
    miqdor.textContent = data;

    saveCardDiv.classList.remove("hidden");

    saveCardDiv.textContent = this.state.textareaValue;
    let hiddenInp = document.querySelector("#input-Card");
    ochirish.classList.add("hidden");
    hiddenInp.classList.add("hidden");
    btnSave.classList.add("hidden");
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
        <div className="saveCardDiv hidden"></div>
        <div className="icon"></div>
        <div className="xaracteristic">
          <p className="miqdor">
            {this.state.miqdor - this.state.textareaValue.length} Simvol
          </p>
          <button className="btn-Save" onClick={(event) => this.saqlash(event)}>
            Save
          </button>
          <i className="cut icon  ochirish hidden" id="remove "></i>
        </div>
      </div>
    );
  }
}

export default Card;
