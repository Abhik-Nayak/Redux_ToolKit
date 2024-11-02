import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Importing CSS for styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="tiles-container">
        {/* <div className="tile">
                    <h2>Create Order</h2>
                    <p>Initiate a new order request.</p>
                </div> */}
        <Link to="/create-order" className="tile">
          <h2>Create Order</h2>
          <p>Initiate a new order request.</p>
        </Link>
        {/* <div className="tile">
                    <h2>Track Order</h2>
                    <p>Monitor the status of your orders.</p>
                </div> */}
        <Link to="/track-order" className="tile">
          <h2>Track Order</h2>
          <p>Monitor the status of your orders.</p>
        </Link>
        <div className="tile">
          <h2>Manage Users</h2>
          <p>View and manage user accounts.</p>
        </div>
        <div className="tile">
          <h2>Settings</h2>
          <p>Configure application settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
