import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, url,source , date, author } = this.props;
    return (
      <div className="my-3">
        <div className="card" /*style={{ width: "18rem" }}*/>
        <span className="position-absolute top-0 start-50  translate-middle badge rounded-pill bg-danger">
          {source.name}
          {/* <span className="visually-hidden">unread messages</span> */}
        </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text d-flex justify-content-between"><small className="text-muted">By : {author?author.slice(0,16):'Unknown'}</small><small className="text-muted"> {date.toGMTString().slice(0,16)}</small></p>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
