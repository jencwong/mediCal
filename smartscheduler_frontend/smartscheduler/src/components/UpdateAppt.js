import React, { Component } from "react";
import axios from "axios";

let baseURL = "https://medicalendar-app.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class UpdateAppt extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      vistType: "",
      comments: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentDidMount() {
    console.log("edited");
    this.setState({
      date: this.props.appointment.date,
      time: this.props.appointment.time,
      visitType: this.props.appointment.visitType,
      comments: this.props.appointment.comments
    });
  }
  handleOnChange(event) {
    const { name, value } = event.target;
    console.log({ name, value });
    this.setState({
      [name]: value
    });
  }
  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const appointmentID = this.props.appointment._id;
      const url = `${baseURL}/appointment/${appointmentID}`;
      const payload = {
        date: this.state.date,
        time: this.state.time,
        visitType: this.state.visitType,
        comments: this.state.comments
      };
      const updatedAppointment = await axios.put(url, payload);
      this.props.getAppointments();
      this.setState({
        date: "",
        time: "",
        visitType: "",
        comments: ""
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const date = new Date(this.props.appointment.date);
    const formatDate = date.toDateString();
    return (
      <div className="card-content">
        <h3>Edit Appointment</h3>
        <form onSubmit={this.handleEditSubmit}>
          <label htmlFor="date">Date</label>
          <input
            className="inputData"
            type="text"
            id="date"
            name="date"
            value={formatDate}
            onChange={this.handleOnChange}
          />
          <label htmlFor="time">Time</label>
          <input
            className="inputData"
            type="text"
            id="time"
            name="time"
            value={this.state.time}
            onChange={this.handleOnChange}
          />
          <label htmlFor="visitType">Appointment Type</label>
          <input
            className="inputData"
            type="text"
            id="visitType"
            name="visitType"
            value={this.state.visitType}
            onChange={this.handleOnChange}
          />
          <label htmlFor="comments">Comments / Additional Information</label>
          <textarea
            id="comments"
            name="comments"
            value={this.state.comments}
            onChange={this.handleOnChange}
          />
          <input
            className="submitBtn"
            type="submit"
            value="Update Appointment"
          />
        </form>
      </div>
    );
  }
}
export default UpdateAppt;
