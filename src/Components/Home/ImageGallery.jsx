import React, { Component } from "react";
import "../../Styles/Home/ImageGallery.css";
import imageNotLoaded from "../../../public/image-didnt-load.jpg";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { links: [], loading: true };
  }

  async componentDidMount() {
    let returnedData;
    let imageLinks = [];
    fetch(
      "https://images-api.nasa.gov/search?media_type=image&page_size=8&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        returnedData = data;
        for (let i = 0; i < 8; i++) {
          imageLinks[i] = data.collection.items[i].links[0].href;
        }
        this.setState({ links: imageLinks, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching data ", error);
        const arrayLength = returnedData.collection.items.length;
        imageLinks = Array(arrayLength).fill(imageNotLoaded.toString());
        this.setState({ links: imageLinks, loading: true });
      });
  }

  render() {
    let { links, loading } = this.state;
    const renderImages = loading
      ? links.map((link, index) => {
          <img
            key={index}
            className="imagegal-image"
            src={`${imageNotLoaded}`}
            alt=""
          />;
        })
      : links.map((link, index) => (
          <img key={index} className="imagegal-image" src={link} alt="" />
        ));

    return (
      <section className={`imagegal imagegal-${this.props.style}`}>
        <div className="imagegal-container">
          <div className="imagegal-image-container">{renderImages}</div>
          <div className="imagegal-text-container">
            <h1 className="imagegal-title">Image Gallery</h1>
            <p className="imagegal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet efficitur arcu, a ultrices tellus. Nulla ultricies turpis in
              pretium cursus. In leo lacus, iaculis ut dolor in, aliquam
              molestie mauris. Phasellus lobortis tellus magna, vitae imperdiet
              nibh porttitor quis. Donec eu mi lectus. Mauris in tristique nunc.
              Sed accumsan dolor at pellentesque fermentum. Aenean lobortis
              velit eu lacus convallis, in rhoncus ligula molestie.
            </p>
            <button
              className={`imagegal-button imagegal-button-${this.props.style}`}
            >
              Launch Image Gallery &#128640;
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageGallery;
