import React, { useState } from "react";
import SidebarComponent from "./sidebar";

// The main SubbankerForm component
const SubbankerForm = () => {
  // State to store form data and validation errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [submissions, setSubmissions] = useState([]); // State for storing the list of submissions
  const [editIndex, setEditIndex] = useState(null); // To track which submission is being edited

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!formData.amount) {
      formErrors.amount = "Amount is required";
      valid = false;
    } else if (isNaN(formData.amount)) {
      formErrors.amount = "Amount must be a number";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // If editing, update the existing entry
      if (editIndex !== null) {
        const updatedSubmissions = [...submissions];
        updatedSubmissions[editIndex] = formData;
        setSubmissions(updatedSubmissions);
        setSuccessMessage("Form updated successfully!");
        alert("Submission Updated Successfully!");
      } else {
        // If not editing, create a new entry
        setSubmissions([...submissions, formData]);
        setSuccessMessage("Form submitted successfully!");
        alert("Form Submitted Successfully!");
      }

      // Reset form and clear editIndex
      setFormData({ name: "", email: "", phone: "", amount: "" });
      setEditIndex(null);
    }
  };

  // Handle edit action
  const handleEdit = (index) => {
    setFormData(submissions[index]); // Load the data of the submission into the form
    setEditIndex(index); // Set the index to know we are editing
    alert(`Editing submission: ${submissions[index].name}`);
  };

  // Handle delete action
  const handleDelete = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    setSuccessMessage("Submission deleted successfully!");
    alert("Submission Deleted Successfully!");
  };

  return (<>
  <SidebarComponent/>
    <div style={styles.container}>
      <h2>Subbanker Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.amount && <p style={styles.error}>{errors.amount}</p>}
        </div>

        <button type="submit" style={styles.submitButton}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      {/* Display Success Message */}
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}

      {/* Display List of Submissions */}
      <h3>Submissions</h3>
<table style={styles.submissionsTable}>
  <thead>
    <tr>
      <th style={styles.tableHeader}>Name</th>
      <th style={styles.tableHeader}>Email</th>
      <th style={styles.tableHeader}>Phone</th>
      <th style={styles.tableHeader}>Amount</th>
      <th style={styles.tableHeader}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {submissions.map((submission, index) => (
      <tr key={index} style={styles.tableRow}>
        <td style={styles.tableCell}>{submission.name}</td>
        <td style={styles.tableCell}>{submission.email}</td>
        <td style={styles.tableCell}>{submission.phone}</td>
        <td style={styles.tableCell}>{submission.amount}</td>
        <td style={styles.tableCell}>
          <button
            onClick={() => handleEdit(index)}
            style={styles.editButton}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(index)}
            style={styles.deleteButton}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
</>
  );
};

// Styles object
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  successMessage: {
    color: "green",
    fontWeight: "bold",
  },
  submissionsList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  submissionItem: {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  submissionDetails: {
    flex: 1,
  },
  editButton: {
    backgroundColor: "#ffa500",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default SubbankerForm;
