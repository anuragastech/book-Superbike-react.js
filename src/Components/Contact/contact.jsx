import React from "react";
import "./contact.css";
import bike1 from "../Assets/blackSuperBike.png";
import bike2 from "../Assets/bulletHalf.jpg";
import office from "../Assets/redBike.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="header-images">
          <img src={bike1} alt="Bike 1" />
          <img src={bike2} alt="Bike 2" />
        </div>
        <p>
          We'd love to hear from you! Whether you have a question about our
          products, need assistance, or just want to give feedback, we're here
          to help.
        </p>
      </div>

      <div className="contact-info">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Company:</strong> London Bikes Ltd.
          </p>
          <p>
            <strong>Address:</strong> 123 Bike Lane, London, UK
          </p>
          <p>
            <strong>Phone:</strong> +44 20 7946 0958
          </p>
          <p>
            <strong>Email:</strong> info@londonbikes.com
          </p>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-images">
        <h2>Our Bikes and Office</h2>
        <div className="image-gallery">
          <img src={bike1} alt="Bike 1" />
          <img src={bike2} alt="Bike 2" />
          <img src={office} alt="Office" />
        </div>
      </div>

      <div className="location-map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6909570654693!2d-0.1276474847640133!3d51.50735047963532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333fc6e2ef%3A0xa0f82c1c967c62c4!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1618311910143!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="London Bikes Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
