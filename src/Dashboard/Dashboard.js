import React, { useEffect } from "react";
import logo from "../resources/logo.png";
import ActiveUsersList from "./components/ActiveUsersList/ActiveUsersList";
import * as webRTCHandler from "../utils/webRTC/webRTCHandler";
import "./Dashboard.css";
import DirectCall from "./components/DirectCall/DirectCall";

const Dashboard = () => {
  useEffect(() => {
    webRTCHandler.getLocalStream();
  }, []);

  return (
    <div className="dashboard_container background_main_color">
      <div className="dashboard_left_section">
        <div className="dashboard_content_container">video</div>
        <div className="dashboard_rooms_container background_secondary_color">
          <DirectCall />
        </div>
      </div>
      <div className="dashboard_right_section background_secondary_color">
        <div className="dashboard_active_users_list">
          <ActiveUsersList />
        </div>
        <div className="dashboard_logo_container">
          <img className="dashboard_logo_image" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
