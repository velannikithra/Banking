import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaClipboard,
  FaCogs,
  FaBars, // For toggle menu
  FaUserCircle,
  FaSignOutAlt,
  FaCog, // Settings icon
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./dashboard.css"; // Include your CSS file for customization

const SidebarComponent = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar toggle state
  const [dropdownVisible, setDropdownVisible] = useState(false); // Profile dropdown state
  const [profileImage, setProfileImage] = useState(null); // Custom profile image state

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Toggle profile dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle profile image change (simulating an image URL here)
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <div className="sidebar-header">
          <p>Admin</p>
          {/* If a profile image is set, display it, else show the default FaUserCircle */}
          <div className="profile-icon-container" onClick={toggleDropdown}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Admin Profile"
                style={{
                  width: "40px",
                  height: "20px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <FaUserCircle style={{ fontSize: "40px", marginBottom: "20px" }} />
            )}
          </div>
          
          {/* Profile Dropdown Menu */}
          {dropdownVisible && (
            <div className="profile-dropdown">
             
                  <input
                    type="file"
                    onChange={handleProfileImageChange}
                    accept="image/*"
                    style={{ display: "none" }}
                    id="profileImageInput"
                  />
                  <label htmlFor="profileImageInput" style={{ cursor: "pointer" }}>
                    Change Profile Picture
                  </label>
                
            </div>
          )}
        </div>

        <ul className="sidebar-menu">
          <li>
            <FaTachometerAlt style={{ marginRight: "10px" }} />
            <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <FaUserFriends style={{ marginRight: "10px" }} />
            <Link to="/subbanker" style={{ textDecoration: "none", color: "inherit" }}>
              Sub-Banker
            </Link>
          </li>
          <li>
            <FaClipboard style={{ marginRight: "10px" }} />
            <Link to="/assignlocker" style={{ textDecoration: "none", color: "inherit" }}>
              Assign Locker
            </Link>
          </li>
          <li>
            <FaCogs style={{ marginRight: "10px" }} />
            <Link to="/notification" style={{ textDecoration: "none", color: "inherit" }}>
              Notification and Alert
            </Link>
          </li>
          
          {/* Settings Section */}
          <li>
            <FaCog style={{ marginRight: "10px" }} />
            <Link to="/setting" style={{ textDecoration: "none", color: "inherit" }}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
