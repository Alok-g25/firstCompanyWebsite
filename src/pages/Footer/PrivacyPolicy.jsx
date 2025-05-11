import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar isBlack={true} />
      <div className="container mx-auto my-20 p-6 text-gray-800 max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="text-justify">
          At Markle Tech, we are committed to protecting your privacy and
          ensuring that your personal information is handled in a safe and
          responsible manner. This Privacy Policy outlines how we collect, use,
          and safeguard your personal data when you visit our website or use our
          services. By using our website, you agree to the terms outlined in
          this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <p className="text-justify">
          We collect personal information that you voluntarily provide to us
          when you:
        </p>
        <ul className="list-disc pl-6">
          <li>Contact us via forms or email</li>
          <li>Register for our services</li>
          <li>Subscribe to our newsletter</li>
          <li>Apply for a job</li>
          <li>Interact with our website through cookies and usage data</li>
        </ul>
        <p className="text-justify">
          The information we collect may include your name, email address, phone
          number, company name, job title, IP address, browser type, and other
          relevant details.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>To respond to inquiries and provide customer support</li>
          <li>To process transactions and provide services</li>
          <li>To improve our website’s performance</li>
          <li>To send marketing communications if opted-in</li>
          <li>For internal record-keeping and compliance</li>
          <li>To personalize user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="text-justify">
          Our website uses cookies to enhance user experience. You can accept or
          decline cookies through your browser settings, though declining may
          limit functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          4. Third-Party Disclosure
        </h2>
        <p className="text-justify">
          We do not sell, trade, or transfer personal information without
          consent, except as required by law or with trusted partners assisting
          in our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
        <p className="text-justify">
          Markle Tech implements security measures to protect personal data from
          unauthorized access, though no method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
        <p className="text-justify">
          You have the right to access, correct, or delete your personal
          information and opt out of marketing communications by contacting us
          at info@markletech.com.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-justify">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
        <p className="text-justify">For any privacy concerns, contact us at:</p>
        <p className="text-justify font-semibold">
          Markle Tech & Media Pvt. Ltd.
        </p>
        <p className="text-justify">Email: info@markletech.com</p>
        <p className="text-justify">Phone: +91-7982 332 070</p>
        <p className="text-justify">Address: Delhi, India | & USA</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
