import React from "react";
import bike1 from "../Assets/FutureBike.jpg";
import bike2 from "../Assets/bulletHalf.jpg";
import office from "../Assets/redBike.jpg";
import bike3 from "../Assets/orengeredBike.jpg";

const Contact = () => {
  return (
    <div className="p-6 bg-gray-100 font-sans">
      <div className="text-center mb-10 bg-white text-gray-900 py-8 relative">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div className="flex justify-center gap-4 mb-6">
          <img src={bike3} alt="Bike 1" className="w-24 h-auto rounded-lg shadow-md" />
          <img src={bike2} alt="Bike 2" className="w-24 h-auto rounded-lg shadow-md" />
        </div>
        <p className="text-lg">
          We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to give feedback, we're here to help.
        </p>
      </div>

      <div className="flex flex-wrap justify-between mb-10">
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-md mx-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
          <p className="text-lg text-gray-600"><strong>Company:</strong> London Bikes Ltd.</p>
          <p className="text-lg text-gray-600"><strong>Address:</strong> 123 Bike Lane, London, UK</p>
          <p className="text-lg text-gray-600"><strong>Phone:</strong> +44 20 7946 0958</p>
          <p className="text-lg text-gray-600"><strong>Email:</strong> info@londonbikes.com</p>
        </div>

        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-md mx-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <form className="flex flex-col">
            <label className="text-lg text-gray-800 mb-2">Name</label>
            <input type="text" name="name" required className="p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <label className="text-lg text-gray-800 mb-2">Email</label>
            <input type="email" name="email" required className="p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <label className="text-lg text-gray-800 mb-2">Message</label>
            <textarea name="message" rows="5" required className="p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            <button type="submit" className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Our Bikes and Office</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <img src={bike1} alt="Bike 1" className="w-72 h-auto rounded-lg shadow-md" />
          <img src={bike2} alt="Bike 2" className="w-72 h-auto rounded-lg shadow-md" />
          <img src={office} alt="Office" className="w-72 h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6909570654693!2d-0.1276474847640133!3d51.50735047963532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333fc6e2ef%3A0xa0f82c1c967c62c4!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1618311910143!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="London Bikes Location"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
 