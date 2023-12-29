// ItemForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ action, loggedIn }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call based on the action (create/edit)
  };

  return (
    <div className="container mt-4">
      <h2>{action === 'create' ? 'Create' : 'Edit'} Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields based on the item type (Movie/Theater/Booking) */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" onChange={handleInputChange} />
        </div>
        {/* Other fields... */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
