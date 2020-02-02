import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import firebase from "../config";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
    auth: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ auth: true });
      })

      .catch(error => {
        this.setState({ errorMsg: "Invalid Credentials" });
      });
  };

  render() {
    if (this.state.auth) return <Redirect to="/profile" />;
    return (
      <div>
        <Navbar />

        <div className="signin">
          <h1 className="signin_h1">Sign In</h1>
          <p className="switch">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <p className="error">{this.state.errorMsg}</p>
          <form onSubmit={this.handleSubmit}>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label>Password: </label>
            <input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="signin_button">
              <button className="signin_btn">Sign In</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
