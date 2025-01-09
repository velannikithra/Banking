import React from "react";
import "./headerbar.css"; // Import the CSS for styling

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="top-bar">
        <div className="menu-icon">&#9776;</div> {/* Menu icon */}
        <h1 className="title">Users</h1>
        <div className="action-icons">
          <div className="refresh-icon">&#8635;</div> {/* Refresh icon */}
          <div className="profile-icon">&#9675;</div> {/* Profile icon */}
        </div>
      </div>
      <div className="content-bar">
        <div className="users-section">
          <div className="users-label">
            <span>&#9776;</span> Users
          </div>
          <div className="export-button">EXPORT</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
