import React, { useState } from "react";
import Hero from "../../components/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
// import Form from "../../components/Form";
import Footer from "../../components/Footer";
import becomeAgentHero from "/src/images/become-our-agent.jpeg";
const BecomeOurAgent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="">
      <Hero
        bgImage={becomeAgentHero}
        heading={"Become Our Agent"}
        content={`Unlock New Opportunities, Drive Growth, and Be a Part of Our Success Story at Markle Tech!`}
      />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-center mx-4 space-y-6 md:space-x-8">
          {/* Contacts Section */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl md:text-3xl/relaxed lg:text-3xl/relaxed font-semibold text-[#330073] text-left font-montserrat">
              Markle Tech to support all of your IT needs
            </h1>
            <p className="font-poppins">
              With 8+ years of expertise and 300+ professional developers,
              Markle Tech offers top-notch app/software development and digital
              transformation services to enhance your business’s productivity
              and security. Let's collaborate and join 1000+ successful
              bussinesses with us.
            </p>

            <div className="space-y-4 font-poppins">
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8" />
                <p className="font-bold">
                   A, A-52, Som Bazar Chowk, 52, Som Bazar Rd, Chowk, Vikas
                  Nagar, Uttam Nagar East, New Delhi, Delhi 110059
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <p className="font-bold">+91-798 233 2070</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <p className="font-bold">info@markletech.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 bg-white p-6 shadow-lg shadow-[#330073] rounded-lg font-poppins">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#330073] text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeOurAgent;
