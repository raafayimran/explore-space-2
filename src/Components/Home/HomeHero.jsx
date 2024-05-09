// Importing react, and destructuring Component
import React, { Component } from "react";
import "../../Styles/Home/HomeHero.css";

class HomeHero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="home-hero">
        <div
          className={`home-hero-container home-hero-container-${this.props.style}`}
        >
          <h1 className="home-hero-what-title">What is EXPLORESPACE 2.0?</h1>
          <p className="home-hero-what-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum ex lectus, sed sagittis neque iaculis eu. Sed vel rhoncus
            velit. Aliquam erat volutpat. Cras vel ante elit. Maecenas viverra
            id tortor eget condimentum. Vivamus bibendum auctor convallis.
            Suspendisse potenti. Fusce ut turpis felis. Aliquam fringilla mauris
            lorem, sed bibendum dolor venenatis eu. Donec vel sodales ante.
            Aliquam id neque magna. Proin pulvinar aliquam sodales. Sed ac nibh
            et diam consequat luctus in ut felis. Sed justo quam, posuere sit
            amet blandit quis, facilisis a ligula. Quisque sit amet iaculis
            justo, quis aliquam est. Praesent orci orci, egestas at rhoncus
            vitae, dignissim in enim.
          </p>
        </div>
      </section>
    );
  }
}

export default HomeHero;
