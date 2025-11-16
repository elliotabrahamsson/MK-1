import React, { useState } from "react";
import { ContactInfo } from "../models";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

// Contact komponent props interface
interface ContactProps {
  contactInfo: ContactInfo;
}

// Contact komponent useState. Satt till tomma strängar som initiala värden.
const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hantera formulärinlämning
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Skicka e-post med EmailJS
    emailjs
      .send(
        "service_6gaywlo", // EmailJS-tjänst-ID
        "template_o7eeipj", // EmailJS-mall-ID
        {
          from_name: formData.name, //avsändarens namn
          user_email: formData.email, // avsändarens e-post
          message: formData.message, // meddelandeinnehåll
        },
        "SP8MCHciGIySgarSI" // Användar-ID för autentisering
      )
      .then((response) => {
        console.log("Email sent to me successfully:", response); // Logga framgångsmeddelande

        emailjs
          .send(
            "service_6gaywlo",
            "template_v10yuoa",
            {
              to_name: formData.name,
              to_email: formData.email,
              message: formData.message,
            },
            "SP8MCHciGIySgarSI"
          )
          .then((res) => {
            console.log("Auto-reply sent successfully:", res);
          })
          .catch((err) => {
            console.error("Error sending auto-reply:", err);
          });

        alert("Thank you for your message!"); //Snabb alert för användaren att det har skickats. Ska göra en custom
        setFormData({ name: "", email: "", message: "" }); // Återställ formuläret
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          "An error occurred while sending your message. Please try again."
        );
      });
  };

  // Hantera formulärändringar
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            {contactInfo.hasPhone() && (
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            )}
            <div className="social-links">
              <h4>Connect with me:</h4>
              {contactInfo.getSocialLinks().map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
