import React, { Component } from "react";
import "../../Styles/Home/NasaAPOD.css";
import { apikey } from "../../../api/apikey";

class NasaAPOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      date: null,
      image: null,
      imageTitle: null,
      imageExplanation: null,
      loading: true,
      url: null,
      error: null,
    };
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&thumbs=True`)
      .then((res) => res.json())
      .then((data) => {
        if (data.media_type == "video") {
          this.setState({ image: data.thumbnail_url, url: data.url });
        } else {
          this.setState({ image: data.url });
        }
        this.setState({
          author: data.copyright,
          date: data.date,
          imageTitle: data.title,
          imageExplanation: data.explanation,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
        this.setState({ error: "Failed to fetch data", loading: true });
      });
  }

  render() {
    return (
      <figure className={`nasaAPOD nasaAPOD-${this.props.style}`}>
        <h1 className="nasaAPOD-header">
          {this.state.loading
            ? "Funny cat picture"
            : "Nasa's Astronomy Picture of The Day"}
        </h1>
        <h4 className="nasaAPOD-title">
          {this.state.loading
            ? "(this was meant to be Nasa's Astronomy Picture of The Day but the request to get the image failed so enjoy this instead!)"
            : this.state.imageTitle}
        </h4>
        <div className="nasaAPOD-image-container">
          <img
            className="nasaAPOD-image"
            src={
              this.state.loading
                ? "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                : this.state.image
            }
            alt={
              this.state.loading ? "Funny cat picture" : this.state.imageTitle
            }
          />
          {this.state.url != null ? (
            <div className="nasaAPOD-image-is-video">
              <p>
                This image is actually a thumbnail for a video, which can be
                found{" "}
                <a href={this.state.url} target="_blank">
                  here
                </a>
                .
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="nasaAPOD-detail-container">
            <p>
              <span className="nasaAPOD-bold">Author: </span>
              {this.state.loading ? "Ihsan Adityawarman" : this.state.author}
            </p>
            <p>
              <span className="nasaAPOD-bold">Date: </span>
              {this.state.loading ? "2018-04-29" : this.state.date}
            </p>
          </div>
        </div>
        <h3>Image explanation</h3>
        <p>
          {this.state.loading
            ? "The cat is sleepy."
            : this.state.imageExplanation}
        </p>
      </figure>
    );
  }
}

export default NasaAPOD;
