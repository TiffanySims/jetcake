import React, { Component } from "react";
import firebase from "../config";
import { firestore } from "firebase";
import { Redirect, Link } from "react-router-dom";
import Navbar from "../Homepage/Navbar";

export default class SignUp extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    photo: "",
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
    auth: false,
    error: ""
  };

  handleFile = e => {
    let fileInputControl = e.target;
    let files = fileInputControl.files;
    let firstFile = files[0];
    let fileReader = new FileReader();
    fileReader.onload = e => {
      let fileContents = e.target.result;
      this.setState({ photo: fileContents });
    };

    fileReader.readAsDataURL(firstFile);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.question1 === this.state.question2 ||
      this.state.question1 === this.state.question3 ||
      this.state.question2 === this.state.question3
    ) {
      this.setState({ error: "You can not pick the same security questions" });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(resp => {
          return firebase
            .firestore()
            .collection("users")
            .doc(resp.user.uid)
            .set({
              id: resp.user.uid,

              email: this.state.email,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              password: this.state.password,
              phone: this.state.phone,
              address: this.state.address,
              city: this.state.city,
              state: this.state.state,
              zip: this.state.zip,
              dob: this.state.dob,
              photo: this.state.photo,
              question1: this.state.question1,
              answer1: this.state.answer1,
              question2: this.state.question2,
              answer2: this.state.answer2,
              question3: this.state.question3,
              answer3: this.state.answer3
            });
        })
        .then(() => this.setState({ auth: true }))
        .catch(error => {
          this.setState({ error: error.message });
        });
    }
  };

  render() {
    if (this.state.auth) return <Redirect to="/profile" />;
    return (
      <div>
        <Navbar />
        <div className="signup">
          <h1 className="signup_h1">Sign Up</h1>
          <p className="switch">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
          <p className="error">{this.state.error}</p>
          <form onSubmit={this.handleSubmit}>
            <label> Email: </label>
            <input
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label> First Name:</label>
            <input
              type="text"
              name="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <label> Last Name:</label>
            <input
              type="text"
              name="lastName"
              required
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <label> Phone Number:</label>
            <input
              type="text"
              name="phone"
              required
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <label>Address: </label>
            <input
              type="text"
              name="address"
              required
              value={this.state.address}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              required
              value={this.state.city}
              onChange={this.handleChange}
            />

            <label>State:</label>
            <input
              className="short_input"
              type="text"
              name="state"
              required
              value={this.state.state}
              onChange={this.handleChange}
            />

            <label>Zipcode:</label>
            <input
              className="short_input"
              type="text"
              name="zip"
              required
              value={this.state.zip}
              onChange={this.handleChange}
            />

            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              required
              value={this.state.dob}
              onChange={this.handleChange}
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />

            <label>Upload a photo:</label>
            <input
              type="file"
              name="photo"
              id="photo"
              required
              onChange={this.handleFile}
            />

            <label>Security Question 1: </label>
            <select name="question1" onChange={this.handleChange} required>
              <option value="">Please Select A Question</option>

              <option value="What's your mother's maiden name?">
                What's your mother's maiden name?
              </option>
              <option value="What's the color of your first car?">
                What's the color of your first car?
              </option>
              <option value="What month was your paternal grandfather born?">
                What month was your paternal grandfather born?
              </option>
              <option value="What was your first pet's name?">
                What was your first pet's name?
              </option>
              <option value="What city were you born in?">
                What city were you born in?
              </option>
            </select>
            <input
              type="text"
              name="answer1"
              value={this.state.answer1}
              onChange={this.handleChange}
            />

            <label>Security Question 2:</label>
            <select name="question2" onChange={this.handleChange} required>
              <option value="">Please Select A Question</option>
              <option value="What's your mother's maiden name?">
                What's your mother's maiden name?
              </option>
              <option value="What's the color of your first car?">
                What's the color of your first car?
              </option>
              <option value="What month was your paternal grandfather born?">
                What month was your paternal grandfather born?
              </option>
              <option value="What was your first pet's name?">
                What was your first pet's name?
              </option>
              <option value="What city were you born in?">
                What city were you born in?
              </option>
            </select>
            <input
              type="text"
              name="answer2"
              value={this.state.answer2}
              onChange={this.handleChange}
            />

            <label>Security Question 3:</label>
            <select name="question3" onChange={this.handleChange} required>
              <option value="">Please Select A Question</option>
              <option value="What's your mother's maiden name?">
                What's your mother's maiden name?
              </option>
              <option value="What's the color of your first car?">
                What's the color of your first car?
              </option>
              <option value="What month was your paternal grandfather born?">
                What month was your paternal grandfather born?
              </option>
              <option value="What was your first pet's name?">
                What was your first pet's name?
              </option>
              <option value="What city were you born in?">
                What city were you born in?
              </option>
            </select>
            <input
              type="text"
              name="answer3"
              value={this.state.answer3}
              onChange={this.handleChange}
            />
            <div className="signup_button">
              <button className="signup_btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
