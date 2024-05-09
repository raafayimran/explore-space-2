// Importing react, and destructuring Component
import React, { Component } from "react";
import NasaAPOD from "./NasaAPOD";
import HomeHero from "./HomeHero";
import ImageGallery from "./ImageGallery";
import MailingList from "./MailingList";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="home">
        <NasaAPOD style={this.props.style} />
        <HomeHero style={this.props.style} />
        <ImageGallery style={this.props.style} />
        <MailingList style={this.props.style} />
      </main>
    );
  }
}

export default Home;
