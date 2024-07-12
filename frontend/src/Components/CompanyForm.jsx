import React, { useState } from 'react';
import axios from 'axios'
const CompanyForm = () => {
  // Define options for companies and categories
  const companies = ["AMZ", "FLP", "SP", "HYN", "AZO"];
  const categories = [
    "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", 
    "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", 
    "Speaker", "Headset", "Laptop", "PC"
  ];

  // State for form fields
  const [companyName, setCompanyName] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Handler for form submission
  const handleSubmit = async(event) => {
    event.preventDefault();

    // Create a form data object
    const formData = {
      companyName,
      category,
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
    };

    // Print form data to the console (or send it to an API)
    // console.log('Form Data Submitted:', formData);
    try {
        const response = await axios.post('http://localhost:3000', formData);  // Update URL
        console.log('Form Data Submitted:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    // Reset form fields
    setCompanyName('');
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className="form-container">
      <h2>Company Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <select
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          >
            <option value="" disabled>Select company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Enter minimum price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter maximum price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanyForm;

