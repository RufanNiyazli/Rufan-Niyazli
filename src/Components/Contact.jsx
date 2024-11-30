import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailJsData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.user_message
    };

    const SID = "service_54w3tdf";
    const TID = "template_te92ius";
    const PKEY = "6Cp_IgEEdBQnh6OoB";

    emailjs.send(SID, TID, emailJsData, PKEY).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_message: "" });
      },
      (error) => {
        alert("An error occurred: " + JSON.stringify(error));
      }
    );
  };

  return (
    <div id="contact">
      <div className="about-header">
        <h2 className="header">Contact</h2> {/* Changed to "Contact" */}
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input "
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            className="text_area"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="contact-details">
          <h2>My Contact Details</h2>
          <h6>Email</h6>
          <p>niyazlirufan2020@gmail.com</p>
          <h6>Phone</h6>
          <p>+994 70 220 18 75</p>
          <h6>Instagram</h6>
          <a href="https://www.instagram.com/rufann.n/">
            <FaInstagramSquare />
            Rufan
          </a>
          <h6>Linkedin</h6>
          <a href="https://www.linkedin.com/in/rufan-niyazl%C4%B1/">
            <FaLinkedin />
            Rufan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
