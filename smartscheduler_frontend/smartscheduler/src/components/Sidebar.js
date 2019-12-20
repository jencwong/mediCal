import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ProfileModal from "./ProfileModal";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="userImg"
        src="https://vignette.wikia.nocookie.net/harrypotter/images/1/15/MOLLY1.jpg/revision/latest/scale-to-width-down/350?cb=20150828155116"
      ></img>
      <h5 className="menu-label">
        Welcome
        {/* {this.props.users.firstName} */}
      </h5>
      <br></br>
      <List disablePadding dense>
        <ListItem>
          <ProfileModal />
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            // color="primary"
            style={{ background: "#C6D166" }}
          >
            Visit History
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            // color="primary"
            style={{ background: "#C6D166" }}
          >
            Payment
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            // color="primary"
            style={{ background: "#C6D166" }}
          >
            Contact
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
