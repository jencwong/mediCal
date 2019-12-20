//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
// import FormNew from "./FormNew.js";
// import FormUpdate from "./FormUpdate.js";
import Weather from "./Weather.js";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axios from "axios";
import ShowAppt from "./ShowAppt.js";
import "../App2.css";
import Button from "@material-ui/core/Button";

let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}
// const baseURL = "http://localhost:3003";
//==============================
//        COMPONENTS
//==============================
class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      users: [],
      appointment: {},
      selectedAppointment: {}
    };
    this.logOut = this.logOut.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.getAppointment = this.getAppointment.bind(this);
    // this.getBookmark = this.getBookmark.bind(this);
    // this.handleAddBookmark = this.handleAddBookmark.bind(this);
    // this.deleteBookmark = this.deleteBookmark.bind(this);
    // this.toggleForm = this.toggleForm.bind(this);
  }
  componentDidMount() {
    this.getAppointments();
    this.getPatients();
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/auth`);
  }
  async getAppointments() {
    const response = await axios(`${baseURL}/appointment`);
    const appointments = response.data;
    this.setState({
      appointments: appointments
    });
  }
  // async getPatient(id) {
  //   const response = await axios(`${baseURL}/user/${id}`);
  //   const data = response.data.foundPatient;
  //   this.setState({
  //     currentPatient: data
  //   });
  //   console.log(this.state.currentPatient);
  // }
  async getPatients() {
    const response = await axios(`${baseURL}/user`);
    const users = response.data;
    this.setState({
      users: users
    });
  }
  getAppointment(appointment) {
    this.setState({ appointment: appointment });
  }
  // isEmpty(obj) {
  //   return Object.entries(obj).length === 0 && obj.constructor === Object;
  // }
  //   getBookmark(bookmark) {
  //     this.setState({ bookmark: bookmark });
  //     this.toggleForm();
  //   }
  //   handleAddBookmark(bookmark) {
  //     this.setState({
  //       bookmarks: [...this.state.bookmarks, bookmark]
  //     });
  //   }
  //   async deleteBookmark(id) {
  //     await axios.delete(`${baseURL}/bookmarks/${id}`);
  //     const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
  //       return bookmark._id !== id;
  //     });
  //     this.setState({
  //       bookmarks: filteredBookmarks
  //     });
  //   }
  //   toggleForm() {
  //     this.setState(state => ({
  //       newform: !state.newform
  //     }));
  //   }
  render() {
    return (
      <div>
        <section className="level">
          <img src="/green_calendar_medical.png"></img>
          <div className="hero-body">
            <h1 className="title is-1">Doctor's Dashboard</h1>
          </div>
        </section>
        <div className="buttons are-medium is-centered">
          <button
            className="button is-success is-outlined"
            onClick={this.logOut}
          >
            Logout
          </button>
          <h3>{/* <Weather /> */}</h3>
        </div>

        <h2 className="title is-2" id="AdminDash">
          <strong>Appointment List:</strong>
        </h2>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th className="subtitle is-2">First Name</th>
              <th className="subtitle is-2">Last Name</th>
              <th className="subtitle is-2">Date</th>
              <th className="subtitle is-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map(appointment => {
              const date = new Date(appointment.date);
              const formatDate = date.toDateString();
              return this.state.users.map(user => {
                console.log("user", user._id);
                console.log("appointment", appointment.patientId);
                if (user._id === appointment.patientId) {
                  console.log("it matches");
                  console.log(user.firstName);
                  return (
                    <tr
                      className="bordered"
                      onMouseOver={() => this.getAppointment(appointment)}
                      key={appointment._id}
                    >
                      <td className="subtitle is-3">{user.firstName}</td>

                      <td className="subtitle is-3">{user.lastName}</td>

                      <td className="subtitle is-3">{formatDate}</td>
                      <td className="subtitle is-3">{appointment.time}</td>

                      {/* {appointment.patientId} */}
                      {/* <p>{user.firstName}</p> */}
                      {/* <ul>
                    <li className="subtitle is-2">
                      {user.firstName}
                      {appointment._id}
                      {appointment.date}
                      {appointment.patientId}
                    </li>
                    <div className="buttons is-centered are-normal">
                      <button
                        className="button is-primary"
                        onClick={() => this.getAppointment(appointment._id)}
                        key={appointment._id}
                      >
                        Show Appointment
                      </button>
                    </div>
                  </ul> */}
                    </tr>
                  );
                }
              });
              // return <div>hi</div>;
              // const date = new Date(appointment.date);
              // const formatDate = date.toDateString();
              // return (
              //   <div key={appointment._id}>
              //     <ul>
              //       <li className="subtitle is-2">
              //         {appointment._id}
              //         {appointment.date}
              //         {appointment.patientId}
              //       </li>
              //       <div className="buttons is-centered are-normal">
              //         <button
              //           className="button is-primary"
              //           onClick={() => this.getAppointment(appointment._id)}
              //           // key={appointment._id}
              //         >
              //           Show Appointment
              //         </button>
              //       </div>
              //     </ul>
              //   </div>
              // );
            })}
          </tbody>
        </table>

        {this.state.appointment && (
          <ShowAppt appointment={this.state.appointment} />
        )}
      </div>
    );
  }
}
export default AdminMain;
