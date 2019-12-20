import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading..."
    };
  }

  componentDidMount() {
    fetch("/api/about")
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default About;
