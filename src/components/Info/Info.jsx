import { Component } from "react";
import "./info.css";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <h2 className="title">abc.com</h2>
        <p className="description">
          abc.com is the best place to find remote talent. We’ve been super
          impress by the quality of applicants.
        </p>
        <div className="author">
          <span className="author-name">Madhushan sasanka</span>
          <span className="position">CEO, abc.com</span>
        </div>
      </div>
    );
  }
}

export default Info;
