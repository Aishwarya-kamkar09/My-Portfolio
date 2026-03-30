import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 mb-10">
          I'm open to internships, collaborations, and exciting opportunities.
          Feel free to reach out!
        </p>

        {/* Form - Sends data to Formspree */}
        <form
          action="https://formspree.io/f/xgopobgp"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition-colors"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition-colors"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        {/* Simple mailto link - Opens the user's email app */}
        <p className="text-gray-500 mt-6">
          Or email me at:{" "}
          <a
            href="mailto:gadivaddarsrushti@gmail.com"
            className="text-purple-400 hover:underline"
          >
            gadivaddarsrushti@gmail.com
          </a>
        </p>

      </div>
    </section>
  );
};

export default Contact;