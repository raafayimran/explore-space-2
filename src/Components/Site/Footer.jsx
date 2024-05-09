import React, { Component } from "react";
import "../../Styles/Site/Footer.css";
import Toggle from "./Toggle";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className={`footer-${this.props.style}`}>
        <div className="footer-container">
          <div className="footer-section">
            <p className="footer-text">
              Raafay Imran &middot; 2024 &middot;{" "}
              <a className="footer-privacy" href="">
                Privacy Policy
              </a>
            </p>
          </div>
          <Toggle
            handleCheck={this.props.handleCheck}
            isChecked={this.props.isChecked}
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
