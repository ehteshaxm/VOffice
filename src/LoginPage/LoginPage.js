import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUsername } from "../store/actions/dashboardActions";
import { registerNewUser } from "../utils/wssConnection/wssConnection";

const LoginPage = ({ saveUsername }) => {
  const [username, setusername] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "") {
      registerNewUser(username);
      saveUsername(username);
      history.push("/dashboard");
    }
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <form className="mx-auto w-25 h-25 my-auto text-white">
        <h3 className="mb-3">Vid ProjeX</h3>

        <div className="form-group mb-3">
          <label className="mb-2">Enter Your Name</label>
          <input
            className="form-control"
            placeholder="Name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={handleSubmit}
        >
          Start the Chat
        </button>
      </form>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username)),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
