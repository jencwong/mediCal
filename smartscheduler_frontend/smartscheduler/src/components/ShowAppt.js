import React from "react";
import axios from "axios";
let baseURL = process.env.REACT_APP_BASEURL;

let baseURL = "https://medicalendar-app.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class ShowAppt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointment: {}
    };
    this.handleAddAppointment = this.handleAddAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.getAppointment = this.getAppointment.bind(this);
  }
  componentDidMount() {
    this.getAppointment();
  }
  //Get appt
  async getAppointment() {
    const response = await axios.get(`${baseURL}/appointment`);
    const appointment = response.data;
    this.setState({ appointment: appointment });
  }
  //Add Appt
  handleAddAppointment(appointment) {
    this.setState({
      appointments: [...this.state.appointments, appointment]
    });
  }
  //Delete appt
  async deleteAppointment(id) {
    await axios.delete(`${baseURL}/appointment/${id}`);
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment._id !== id;
    });
    this.setState({
      appointments: filteredAppointments
    });
  }
  getAppointment(appointment) {
    this.setState({ appointment: appointment });
  }
  render() {
    const date = new Date(this.props.appointment.date);
    const formatDate = date.toDateString();
    return (
      <div className="card">
        <h2>Appointment Details</h2>
        <div className="card-content">
          <br />
          {/* <h5>
            <span>Date:</span> {formatDate}
            <br />
            <span>Time:{this.props.appointment.time}</span>
          </h5>
          <h5>
            <span>Visit Type:</span> {this.props.appointment.visitType}
          </h5>
          <h5>
            <span>Comments:</span> {this.props.appointment.comments}
          </h5> */}
          <tbody>
            <tr>
              <td>Date: {formatDate}</td>
            </tr>
            <tr>
              <td>Time: {this.props.appointment.time}</td>
            </tr>
            <td>Visit Type: {this.props.appointment.visitType} </td>
            <tr>
              <td>Comments:{this.props.appointment.comments} </td>
            </tr>
          </tbody>
        </div>
      </div>
    );
  }
}
export default ShowAppt;
