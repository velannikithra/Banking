import React, { useState } from "react";
import "./assignlocker.css";
import SidebarComponent from "./sidebar";
const AssignLocker = () => {
  const [lockers, setLockers] = useState([]);
  const [formData, setFormData] = useState({
    customerName: "",
    lockerNumber: "",
    keyNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const assignLocker = () => {
    if (
      formData.customerName &&
      formData.lockerNumber &&
      formData.keyNumber
    ) {
      setLockers([...lockers, { ...formData }]);
      setFormData({ customerName: "", lockerNumber: "", keyNumber: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const viewLockerDetails = (lockerNumber) => {
    const locker = lockers.find((l) => l.lockerNumber === lockerNumber);
    if (locker) {
      alert(
        `Locker Details:
        Customer Name: ${locker.customerName}
        Locker Number: ${locker.lockerNumber}
        Key Number: ${locker.keyNumber}`
      );
    } else {
      alert("Locker not found.");
    }
  };

  return (
    <>
    <SidebarComponent/>
    <div style={{ padding: "20px" }}>
      

      <div style={{ marginBottom: "20px" }}>
  <h3 className="locker">Assign a Locker</h3>
  <form
    onSubmit={(e) => {
      e.preventDefault(); // Prevent default form submission
      assignLocker(); // Call the function to handle assignment
    }}
    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
  >
    <input
      type="text"
      name="customerName"
      placeholder="Customer Name"
      value={formData.customerName}
      onChange={handleInputChange}
      required
      style={{
        padding: "10px",
        width: "calc(33.33% - 20px)", // Makes inputs responsive
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
    <input
      type="text"
      name="lockerNumber"
      placeholder="Locker Number"
      value={formData.lockerNumber}
      onChange={handleInputChange}
      required
      style={{
        padding: "10px",
        width: "calc(33.33% - 20px)", // Makes inputs responsive
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
    <input
      type="text"
      name="keyNumber"
      placeholder="Key Number"
      value={formData.keyNumber}
      onChange={handleInputChange}
      required
      style={{
        padding: "10px",
        width: "calc(33.33% - 20px)", // Makes inputs responsive
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
    <button
      type="submit"
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Assign Locker
    </button>
  </form>
</div>


<div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
  <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Assigned Lockers</h3>
  <table
    border="1"
    cellPadding="5"
    style={{
      width: "50%",
      margin: "0 auto",
      fontSize: "14px",
      borderCollapse: "collapse",
      textAlign: "left",
    }}
  >
    <thead>
      <tr style={{ backgroundColor: "#f0f0f0" }}>
        <th style={{ padding: "5px" }}>Customer Name</th>
        <th style={{ padding: "5px" }}>Locker Number</th>
        <th style={{ padding: "5px" }}>Key Number</th>
        <th style={{ padding: "5px" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {lockers.map((locker, index) => (
        <tr key={index}>
          <td style={{ padding: "5px" }}>{locker.customerName}</td>
          <td style={{ padding: "5px" }}>{locker.lockerNumber}</td>
          <td style={{ padding: "5px" }}>{locker.keyNumber}</td>
          <td style={{ padding: "5px" }}>
            <button
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={() => viewLockerDetails(locker.lockerNumber)}
            >
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </>
  );
};

export default AssignLocker;
