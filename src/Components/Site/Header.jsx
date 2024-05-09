// Importing react, and destructuring Component
import React, { Component } from "react";
// Importing header stylesheet
import "../../Styles/Site/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportWidth: 0,
      style: "none",
      transform: "none",
      menuTransform: "none",
      button: true,
    };
  }

  componentDidMount() {
    this.setState({ viewportWidth: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
    if (this.state.viewportWidth < 450 && this.state.button == true) {
      this.setState({ menuTransform: "translateX(-52px)" });
    } else {
      this.setState({ menuTransform: "none" });
    }
    if (
      this.state.viewportWidth < 700 &&
      this.state.viewportWidth > 450 &&
      this.state.button == true
    ) {
      this.setState({ menuTransform: "translateX(70px)" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  render() {
    return (
      // Header container
      <header className="header">
        <div
          className={`header-container header-container-${this.props.style}`}
          style={{
            alignItems: this.state.style == "none" ? "center" : "baseline",
          }}
        >
          {/* Heading with <a> tag to make the title clickable */}
          <h1
            className="header-title"
            style={{ marginTop: this.state.style == "none" ? "0px" : "9px" }}
          >
            <a className="nav-link" href="">
              ExploreSpace 2.0
            </a>
          </h1>
          {/* Choosing between mobile nav and desktop nav */}
          {this.state.viewportWidth < 700 ? (
            <div className="header-mobile-nav">
              <button
                className={`header-mobile-nav-menu header-mobile-nav-menu-${this.props.style}`}
                style={{ transform: this.state.transform }}
                onClick={() => {
                  const style = this.state.style == "none" ? "block" : "none";
                  if (
                    this.state.viewportWidth < 450 &&
                    this.state.button == true
                  ) {
                    this.setState({ transform: "translate(21px)" });
                  } else {
                    this.setState({ transform: "none" });
                  }
                  this.setState({
                    style: style,
                    button: !this.state.button,
                  });
                  console.log(this.state.button);
                }}
              >
                Menu
              </button>
              <div
                className={`header-mobile-nav-links header-mobile-nav-links-${this.props.style}`}
                style={{
                  display: this.state.style,
                  transform: this.state.menuTransform,
                }}
              >
                <a href="">Home</a>
                <a href="">Interactives</a>
                <a href="">Planetarium</a>
              </div>
            </div>
          ) : (
            <nav className="nav">
              {/* Navbar links as an unordered list so they stay grouped together */}
              <ul className="nav-ul">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Interactives
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Planetarium
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
