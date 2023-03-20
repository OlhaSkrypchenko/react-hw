import { Component } from "react";
import Form from "../form/Form";
import "./signUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-wrapper">
        <div className="title-wrapper">
          <h2 className="form-title">Create an account</h2>
          <p className="info-message">
            Let’s get started with your 30 days free trial
          </p>
        </div>
        <Form />
        <p className="question">
          Already have an account?
          <a className="signUp-link" href="#sign_up">
            Sign in
          </a>
        </p>
      </div>
    );
  }
}

export default SignUp;
