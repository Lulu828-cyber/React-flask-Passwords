import React from "react";
/* import React, { useContext } from "react"; */
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.getLogout(navigate);
  };

  return (
    <div className="text-center mt-5">
      <h1>Private</h1>
      <p>You are logged in</p>
      <Link to="/">
        <button>Go to home</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Private;