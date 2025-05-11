import React from "react";
import Hero from "../../components/Hero";
import { TestimonialCard } from "../../components/TestimonialCard";
import { reviews } from "../../data/about/clientReviews";
import Footer from "../../components/Footer";
import ReviewsHero from "/src/images/client-reviews.jpeg";
const ClientReviews = () => {
  return (
    <div>
      <Hero
        bgImage={ReviewsHero}
        heading={`Client Reviews`}
        content={`Real Success Stories from Our Valued Clients!`}
      />
      <div className="m-4 p-4 flex justify-evenly flex-wrap">
        {reviews.map((reviewer) => (
          <TestimonialCard
            key={reviewer.id}
            reviewer={`${reviewer.name}`}
            reviewerDesc={`${reviewer.reviewerDesc}`}
            review={`${reviewer.review}`}
            reviewerIcon={`${reviewer.icon}`}
            stars={`${reviewer.stars}`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ClientReviews;
