import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Disclaimer = () => {
  return (
    <div>
      <NavBar isBlack={true} />
      <div className="container mx-auto my-20 p-6 text-gray-800 max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Disclaimer</h1>
        <p className="text-justify">
          The content on Markle Tech’s website is for general information only.
          We make no guarantees about the accuracy or completeness of the
          information and assume no liability for any errors or omissions. Your
          use of the website and reliance on its content is at your own risk.
        </p>

        <p className="text-justify mt-4">
          Markle Tech is not responsible for external links or third-party
          content. We will not be liable for any damages arising from the use of
          this website.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
