import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, urlToImage, url,author, date, source } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zindex:'1'}}>{source}</span>
            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p class="card-text"><small class="text-muted">By- {author? author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
              <a
                rel="noreferrer"
                href={url}
                target="_blank"
                className="btn btn-sm btn-primary btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
