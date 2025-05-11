import React, { useState } from "react";
import Hero from "../components/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";
import contactUsHero from "/src/images/ContactUsBg.jpeg";
import astronaut from "/src/images/astronaut.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
      const response = await fetch(
        `https://api.markletechandmedia.com/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setSuccess("Something went wrong. Try again!");
      }
    } catch (error) {
      setSuccess("Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      <Hero
        heading="Contact Us"
        bgImage={contactUsHero}
        content="Let's Connect and Start Bringing Your Ideas to Life!"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#330073] font-montserrat">
            Get In Touch
          </h1>
          <p className="text-[#330073] text-sm md:text-base font-poppins">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-[#330073] rounded-2xl shadow-lg overflow-hidden md:m-20">
          {/* Form Section */}
          <div className="md:w-1/2 w-full p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat">
              Let's Connect Constellations
            </h2>
            <p className="text-sm font-light mb-6 font-poppins">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 font-poppins">
              {["name", "email", "mobile"].map((field) => (
                <input
                  key={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "mobile"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }*`}
                  className="w-full p-3 border border-gray-500 rounded-md bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C3A6FF]"
                  required
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-500 rounded-md bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C3A6FF]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#C3A6FF] hover:bg-[#E9D9FF] transition text-white py-3 rounded-md font-semibold font-montserrat"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full p-8 flex justify-center items-center bg-[#330073]">
            <img
              src={astronaut}
              alt="Astronaut Illustration"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
