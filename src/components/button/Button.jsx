import { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor({ color, children, type, url, alt, props }) {
    super(props);
    this.text = children;
    this.btnColor = color;
    this.type = type;
  }
  render() {
    return (
      <button className={`btn btn-${this.btnColor}`} type={this.type}>
        <span className="text">{this.text}</span>
      </button>
    );
  }
}

export default Button;
