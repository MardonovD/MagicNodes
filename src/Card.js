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
    console.log(event.target.value.length);
  }

  raqami() {}

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
          <button className="btn-Save">Save</button>
        </div>
      </div>
    );
  }
}

export default Card;
