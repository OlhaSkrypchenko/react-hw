import { Component } from "react";
import Button from "../button/Button";
import "./form.css";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        valid: true,
      },
      email: {
        value: "",
        valid: true,
      },
      password: {
        value: "",
        valid: true,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValidData(name, value) {
    switch(name) {
        case 'name': 
            const regexp = /\d/g;
            return value.length > 1 && !regexp.test(value);
        case 'email':
            const regexp1 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return regexp1.test(value);
        case 'password':
            return value.length >= 5;
        default: return false;
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const isValid = this.isValidData(name, value);

    this.setState({ [name]: {'value': value, 'valid': isValid}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    for (let key in data) {
        const isValid = this.isValidData(key, data[key].value);
        if (!isValid) {
            this.setState({ [key]: {'value': data[key].value, 'valid': isValid}});
            return console.log('invalid data')
        }
    }
    return console.log(`Name: ${data.name.value}, email: ${data.email.value}, password: ${data.password.value}`);
    
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            className= {`name ${this.state.name.valid? '' : 'invalid'}`}
            name="name"
            value={this.state.name.value}
            onChange={this.handleInputChange}
          />
          {!this.state.name.valid && <span>Name should have more than 1 character and no digits</span>}
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            className={`email ${this.state.email.valid? '' : 'invalid'}`}
            name="email"
            value={this.state.email.value}
            onChange={this.handleInputChange}
          />
           {!this.state.email.valid && <span>Email is not valid</span>}
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            className={`password ${this.state.password.valid? '' : 'invalid'}`}
            name="password"
            value={this.state.password.value}
            onChange={this.handleInputChange}
          />
          {!this.state.password.valid && <span>Password should have more than 4 characters</span>}
        </label>
        <div className="btn-wrapper">
            <Button type="submit" color="dark">Create an account</Button>
            <Button type="button" color="light">Sign up with Google</Button>
        </div>
      </form>
    );
  }
}

export default Form;
