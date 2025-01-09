import React, { useState } from "react";
import "./setting.css";
import SidebarComponent from "./sidebar";

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    websiteTitle: "iBanking",
    websiteColor: "#167287",
    baseCurrency: "INR",
    currencySymbol: "₹",
    registration: true,
    emailNotification: true,
    smsNotification: false,
    emailVerification: false,
    smsVerification: false,
    branding: "© 2019 iBanking. All rights reserved",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (field) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdate = () => {
    alert("Settings Updated!");
    console.log(settings);
  };

  return (
    <>
   <SidebarComponent/>
    <div className="general-settings">
      <h2>General Settings</h2>
      <div className="settings-container">
        <div className="form-group">
          <label>Website Title</label>
          <input
            type="text"
            name="websiteTitle"
            value={settings.websiteTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Website Color</label>
          <input
            type="color"
            name="websiteColor"
            value={settings.websiteColor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Base Currency</label>
          <input
            type="text"
            name="baseCurrency"
            value={settings.baseCurrency}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Currency Symbol</label>
          <input
            type="text"
            name="currencySymbol"
            value={settings.currencySymbol}
            onChange={handleChange}
          />
        </div>
        <div className="toggle-buttons">
          <div>
            <label>Registration</label>
            <button
              className={settings.registration ? "toggle-on" : "toggle-off"}
              onClick={() => handleToggle("registration")}
            >
              {settings.registration ? "ON" : "OFF"}
            </button>
          </div>
          <div>
            <label>Email Notification</label>
            <button
              className={settings.emailNotification ? "toggle-on" : "toggle-off"}
              onClick={() => handleToggle("emailNotification")}
            >
              {settings.emailNotification ? "ON" : "OFF"}
            </button>
          </div>
          <div>
            <label>SMS Notification</label>
            <button
              className={settings.smsNotification ? "toggle-on" : "toggle-off"}
              onClick={() => handleToggle("smsNotification")}
            >
              {settings.smsNotification ? "ON" : "OFF"}
            </button>
          </div>
          <div>
            <label>Email Verification</label>
            <button
              className={settings.emailVerification ? "toggle-on" : "toggle-off"}
              onClick={() => handleToggle("emailVerification")}
            >
              {settings.emailVerification ? "ON" : "OFF"}
            </button>
          </div>
          <div>
            <label>SMS Verification</label>
            <button
              className={settings.smsVerification ? "toggle-on" : "toggle-off"}
              onClick={() => handleToggle("smsVerification")}
            >
              {settings.smsVerification ? "ON" : "OFF"}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Branding</label>
          <textarea
            name="branding"
            value={settings.branding}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
    </>
  );
};

export default GeneralSettings;
