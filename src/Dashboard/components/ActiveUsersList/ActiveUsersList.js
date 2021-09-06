import React from "react";
import ActiveUsersListItem from "./ActiveUsersListItem";
import "./ActiveUsersList.css";
import { connect } from "react-redux";

const ActiveUsersList = ({ activeUsers }) => {
  return (
    <div className="active_user_list_container">
      {activeUsers.map((activeUser) => (
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ dashboard }) => ({
  ...dashboard,
});

export default connect(mapStateToProps)(ActiveUsersList);
