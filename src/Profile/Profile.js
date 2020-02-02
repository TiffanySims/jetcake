import React, { Component } from "react";
import firebase from "../config";
import { Redirect } from "react-router-dom";
export class Profile extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
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
    edit: false,
    auth: true
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              let data = doc.data();
              console.log(data);
              this.setState({
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                city: data.city,
                state: data.state,
                zip: data.zip,
                dob: data.dob,
                photo: data.photo,
                question1: data.question1,
                answer1: data.answer1,
                question2: data.question2,
                answer2: data.answer2,
                question3: data.question3,
                answer3: data.answer3
              });
            }
          });
      } else {
        this.logout();
      }
    });
  }
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ auth: false });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();

    this.setState({ edit: true });
  };
  handleUpdate = e => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("users")
      .doc(this.state.id)
      .update({
        [e.target.previousSibling.name]: e.target.previousSibling.value
      });
  };
  handleFileUpdate = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("users")
      .doc(this.state.id)
      .update({
        photo: this.state.photo
      });
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
  render() {
    if (!this.state.auth) return <Redirect to="/" />;
    if (this.state.edit) {
      return (
        <div>
        <div className="profile_header">
          <div className="nav_logo">
            <p>HealthWize</p>
          </div>
          <div>
            <h1 className="profile_h1">Your Profile</h1>
          </div>
          <div className="signout_button">
            <button className="signout_btn" onClick={this.logout}>
              Sign Out
            </button>
          </div>
        </div>
        <div className="signup">
          
          <form onSubmit={this.handleSubmit}>
            <label> First Name:</label>
            <input
              type="text"
              name="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>

            <label> Last Name:</label>
            <input
              type="text"
              name="lastName"
              required
              value={this.state.lastName}
              onChange={this.handleChange}
            />

            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>
            <label> Email:</label>
            <input
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />

            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>

            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              required
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>

            <label> Address:</label>
            <input
              type="text"
              name="address"
              required
              value={this.state.address}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>

            <label>City:</label>
            <input
              type="text"
              name="city"
              required
              value={this.state.city}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>
            <label>State:</label>
            <input
              className="short_input"
              type="text"
              name="state"
              required
              value={this.state.state}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>

            <label>Zipcode:</label>
            <input
              className="short_input"
              type="text"
              name="zip"
              required
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              required
              value={this.state.dob}
              onChange={this.handleChange}
            />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>
            <label>Upload a photo:</label>
            <input type="file" name="photo" onChange={this.handleFile} />
            <div className="update_button">
              <button onClick={this.handleUpdate} className="update_btn">
                Update
              </button>
            </div>
            <div class="save_button">
              <button className="signup_btn">Save</button>
            </div>
          </form>
        </div>
        </div>
      );
    }
    return (
      <div className="profile_page container">
        <div className="profile_header">
          <div className="nav_logo">
            <p>HealthWize</p>
          </div>
          <div>
            <h1 className="profile_h1">Your Profile</h1>
          </div>
          <div className="signout_button">
            <button className="signout_btn" onClick={this.logout}>
              Sign Out
            </button>
          </div>
        </div>
        <hr />
        <div className="profile">
          <div className="profile_info">
            <p>
              First Name: <span>{this.state.firstName}</span>
            </p>
            <p>
              Last Name: <span>{this.state.lastName}</span>
            </p>
            <p>
              Email: <span>{this.state.email}</span>
            </p>
            <p>
              Password: <span>{this.state.password}</span>
            </p>
            <p>
              Phone: <span>{this.state.phone}</span>
            </p>
            <p>
              Address: <span>{this.state.address}</span>
            </p>
            <p>
              City: <span>{this.state.city}</span>
            </p>
            <p>
              State: <span>{this.state.state}</span>
            </p>
            <p>
              Zip: <span>{this.state.zip}</span>
            </p>
            <p>
              Date of Birth: <span>{this.state.dob}</span>
            </p>
            <p>
              Security Question 1:<span> {this.state.question1}</span>
            </p>
            <p>
              Answer: <span>{this.state.answer1}</span>
            </p>
            <p>
              Security Question 2: <span>{this.state.question2}</span>
            </p>
            <p>
              Answer: <span>{this.state.answer2}</span>
            </p>
            <p>
              Security Question 3: <span>{this.state.question3}</span>
            </p>
            <p>
              Answer: <span>{this.state.answer3}</span>
            </p>
          </div>
          <div className="profile_photo">
            <img src={this.state.photo} alt="profile photo" />
          </div>
        </div>
        <div className="edit_button">
          <button onClick={this.handleClick} className="edit_btn">
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
