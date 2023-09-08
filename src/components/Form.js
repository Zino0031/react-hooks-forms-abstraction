import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // Use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="checkbox"
          name="admin"
          onChange={handleChange}
          checked={formData.admin}
        />
        <button type="submit">Submit</button>
      </form>

        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Admin: {submittedData.admin ? "Yes" : "No"}</p>
        </div>
    
    </div>
  );
}

export default Form;
