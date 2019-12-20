import React, { Component } from "react";

class CurrentAppointments extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      vistType: "",
      comments: "",
      appointments: [],
      appointment: {},
      selectedAppointment: {},
      editButton: false
    };
    this.getAppointments = this.getAppointments.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.deleteAppointments = this.deleteAppointments.bind(this);
  }
  componentDidMount() {
    this.props.getAppointments();
  }
  //Get
  async getAppointments() {
    const response = await axios(`${baseURL}/appointment`);
    const appointments = response.data;

    this.setState({ appointments: appointments });
  }
  //Edit
  async editAppointments(clickedAppointment) {
    console.log("Clicked Edit Button");
    await this.setState({
      editButton: !this.state.editButton,
      selectedAppointment: clickedAppointment
    });
    console.log("Current Appointment: ", this.state.selectedAppointment);
  }
  //Delete
  async deleteAppointments(id) {
    await axios.delete(`${baseURL}/appointment/${id}`);
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment._id !== id;
    });

    this.setState({
      appointments: filteredAppointments
    });
  }
  render() {
    return (
      <div className="card-content">
        <h2>Current Appointments</h2>
        <table className="table">
          {/* <thead>Current Appointments</thead> */}
          <tbody>
            {this.state.appointments.map(appointment => {
              const date = new Date(appointment.date);
              const formatDate = date.toDateString();
              return (
                // <thead>
                //   <tr>
                //     <th>Date</th>
                //     <th>Time</th>
                //   </tr>
                // </thead>
                <tr
                  className="bordered"
                  onMouseOver={() => this.getAppointment(appointment)}
                  key={appointment._id}
                >
                  <td>
                    <a href={appointment} target="_blank">
                      {formatDate}
                    </a>
                  </td>
                  <td>{appointment.time}</td>
                  {/* note: toggle may not be needed as written - TBD */}
                  {
                    /* <td
                        className={ appointment.visited ? "visited" : null}
                        onDoubleClick={() =>
                            this.toggleVisited(appointment, appointment._id) }>
                        {" "}
                        {appointment.url}
                        </td>*/
                    <td>
                      <button
                        onClick={() => this.editAppointments(appointment)}
                      >
                        Edit
                      </button>
                    </td>
                  }
                  <td>
                    {" "}
                    <button
                      onClick={() => this.deleteAppointments(appointment._id)}
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrentAppointments;
