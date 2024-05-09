import React, { Component } from "react";
import "../../Styles/Site/Toggle.css";

class Toggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toggle">
        <p className="toggle-text">
          Current Style: {this.props.isChecked ? "Light" : "Dark"} Mode
        </p>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={this.props.isChecked}
            onChange={this.props.handleCheck}
          />
          <span className="toggle-slider toggle-round"></span>
        </label>
      </div>
    );
  }
}

export default Toggle;
