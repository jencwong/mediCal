//Note: Needs to be linked as modal in left nav on patient dashboard.
import React, { Component } from "react";
import axios from "axios";

let baseURL = "https://medicalendar-app.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: ""
      // category: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log("edited");
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      dob: this.props.dob,
      email: this.props.email,
      phone: this.props.phone
    });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const userID = this.props._id;
      const url = `${baseURL}/user/${userID}`;
      const payload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dob: this.state.dob,
        email: this.state.email,
        phone: this.state.phone
      };
      const updatedUser = await axios.put(url, payload);
      console.log(updatedUser);
      this.props.getPatient();
      this.setState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: ""
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="card-content">
        <h3>Edit User Profile</h3>
        <form onSubmit={this.handleEditSubmit}>
          <div className="row">
            <input
              className="inputDataUser"
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
            <br />
            <input
              className="inputDataUser"
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleOnChange}
            />
            <br />
            <input
              className="inputDataUser"
              placeholder="Date of Birth"
              type="date"
              id="dob"
              name="dob"
              value={this.state.dob}
              onChange={this.handleOnChange}
            />
            <br />
            <input
              className="inputDataUser"
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <br />
            <input
              className="inputDataUser"
              placeholder="Phone"
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleOnChange}
            />
            <br />
            <br />
            <input
              className="submitBtn"
              type="submit"
              value="Update User Profile"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfile;
