import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const phoneNumber = "2349038163213"; // your full WhatsApp number (no "+" or dashes)
    const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-[#0d0d0d] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Let’s work together or just say hello.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 outline-none focus:ring-2 ring-indigo-500"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 outline-none focus:ring-2 ring-indigo-500"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 outline-none focus:ring-2 ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
