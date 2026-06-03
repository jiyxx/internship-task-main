import { useState } from "react";
import "../App.css";


export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    subject: "",
    message: "",
  });
  const [errors, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    if(validateForm()) {
      setSuccess("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        about: "",
        subject: "",
        message: "",
      });
      setError({});
    }
  };

  //Contact Form on the Contact page with these fields: Name, Email, Subject and Message
  return (
    <div className="form-container">
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />

          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        
        <div className="form-group">
          <label>About</label>

          <input
            type="text"
            name="about"
            maxLength={100}
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell us about yourself"

          />

          <small className="form-text">{formData.about.length}/100</small>

          {errors.about && <p className="form-error">{errors.about}</p>}
        </div>

        
        <div className="form-group">
          <label>Subject</label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
          />

          {errors.subject && <p className="form-error">{errors.subject}</p>}
        </div>
        
        <div className="form-group">
          <label>Message</label>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter a message"
          />

          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>

        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
}
