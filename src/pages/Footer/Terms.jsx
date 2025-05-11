import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Terms = () => {
  return (
    <div className="">
      <NavBar isBlack={true} />
      <div className="container mx-auto my-20 p-6 text-gray-800 max-w-4xl w-full px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Terms & Conditions
        </h1>
        <p className="text-justify">
          Welcome to Markle Tech. By accessing or using our website and
          services, you agree to comply with and be bound by the following Terms
          & Conditions. Please read these terms carefully. If you do not agree
          with any part of these terms, you must not use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Acceptance of Terms</h2>
        <p className="text-justify">
          By accessing Markle Tech’s website (the “Site”) or using our services,
          you agree to these Terms & Conditions, as well as our Privacy Policy,
          which governs the collection and use of your personal information.
          These terms apply to all users of the Site, including clients,
          visitors, and any other individuals accessing the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
        <p className="text-justify">
          Markle Tech reserves the right to modify or update these Terms &
          Conditions at any time without prior notice. Any changes will be
          posted on this page, and the updated terms will take effect
          immediately. It is your responsibility to review these terms
          regularly. Continued use of our Site constitutes your acceptance of
          the modified terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Use of Our Website</h2>
        <p className="text-justify">
          You agree to use the Site only for lawful purposes and in accordance
          with these Terms & Conditions. You are prohibited from:
        </p>
        <ul className="list-disc ml-6 text-justify">
          <li>
            Using the Site in any way that violates applicable laws or
            regulations
          </li>
          <li>
            Impersonating any person or entity or providing false information
          </li>
          <li>Transmitting any malicious code, viruses, or harmful content</li>
          <li>
            Attempting to gain unauthorized access to our systems, servers, or
            networks
          </li>
        </ul>
        <p className="text-justify">
          We reserve the right to terminate or restrict your access to the Site
          at any time, without notice, for any conduct we deem inappropriate or
          in violation of these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Intellectual Property</h2>
        <p className="text-justify">
          All content on this Site, including text, graphics, logos, images, and
          software, is the property of Markle Tech or its licensors and is
          protected by intellectual property laws. You may not copy, reproduce,
          distribute, or create derivative works from any content on the Site
          without express permission from Markle Tech.
        </p>
        <p className="text-justify">
          You are granted a limited, non-exclusive license to access and use the
          Site for personal, non-commercial purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Services</h2>
        <p className="text-justify">
          Markle Tech offers website development, IT consulting, and related
          services (the “Services”). All services are provided under separate
          contractual agreements, which will govern the specific terms of
          service, pricing, timelines, and responsibilities.
        </p>
        <p className="text-justify">
          We strive to ensure that all services provided meet high standards of
          quality. However, we make no guarantee that the Services will meet all
          of your expectations, and we disclaim all warranties, express or
          implied, except where required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
        <p className="text-justify">
          To the fullest extent permitted by law, Markle Tech shall not be
          liable for any indirect, incidental, special, or consequential
          damages, including but not limited to loss of profits, data, or
          business opportunities arising from your use of the Site or our
          Services, even if Markle Tech has been advised of the possibility of
          such damages.
        </p>
        <p className="text-justify">
          Our total liability for any claim arising out of or related to these
          Terms & Conditions or the use of our Site or Services shall not exceed
          the amount paid by you, if any, for accessing or using the Site or
          Services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Third-Party Links</h2>
        <p className="text-justify">
          Our Site may contain links to third-party websites that are not
          operated or controlled by Markle Tech. We are not responsible for the
          content, privacy practices, or policies of these third-party sites.
          Accessing third-party websites is at your own risk, and you should
          review their terms and privacy policies before using them.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Termination</h2>
        <p className="text-justify">
          We reserve the right to terminate or suspend your access to the Site
          or Services, without prior notice or liability, for any reason,
          including but not limited to your breach of these Terms & Conditions.
        </p>
        <p className="text-justify">
          Upon termination, your right to use the Site will cease immediately.
          All provisions of these terms, which by their nature should survive
          termination, shall survive, including intellectual property rights,
          disclaimers, and limitations of liability.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
        <p className="text-justify">
          These Terms & Conditions shall be governed and construed in accordance
          with the laws of India, without regard to its conflict of law
          provisions. Any disputes arising from or related to the use of this
          Site or Services shall be subject to the exclusive jurisdiction of the
          courts in India.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
