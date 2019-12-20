import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../profile.css";

let baseURL = "https://medicalendar-app.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      errors: {}
    };
    this.logOut = this.logOut.bind(this);
  }
  async getProfile(e) {
    const response = await axios
      .get(`${baseURL}/user/profile`, {})
      .then(response => {
        console.log("hello");
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log("PROFILE IS RENDERED");
    this.getProfile();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      fullname: decoded.fullname,
      email: decoded.email
    });
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/auth`);
  }

  render() {
    return (
      <div className="container">
        <div className="nav-bar">
          <span>ScarletAi</span>
          <button className="logout" onClick={this.logOut}>
            Logout
          </button>
        </div>
        <div className="About"></div>
        <div className="cards">hello world</div>
      </div>
    );
  }
}

export default Profile;
