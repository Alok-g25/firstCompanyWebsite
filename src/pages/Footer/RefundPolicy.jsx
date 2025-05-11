import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const RefundPolicy = () => {
  return (
    <div>
      <NavBar isBlack={true} />
      <div className="container mx-auto my-20 p-6 text-gray-800 max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Refund Policy</h1>
        <p className="text-justify">
          At Markle Tech, all sales and services are final. Once a transaction
          is completed, we do not offer refunds, returns, or exchanges for any
          services or products provided.
        </p>

        <p className="text-justify mt-4">
          Exceptions may apply in rare circumstances, at our sole discretion,
          and are subject to approval. If you have any concerns regarding our
          services, please contact us, and we will do our best to address your
          issue.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
