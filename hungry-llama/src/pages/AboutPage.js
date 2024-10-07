import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold">The Hungry Llama.</span> <br />
          A family-owned restaurant that offers a unique and unforgettable
          dining experience. Our restaurant is inspired by the bold flavors and
          warm hospitality of South America, and we pride ourselves on serving
          fresh and locally sourced ingredients.
          <br />
          <br />
          At <span className="font-bold">The Hungry Llama</span>,<br />
          we believe that food is not just a necessity, but an adventure, and we
          aim to take our customers on a culinary journey through our carefully
          crafted menu. Whether you're in the mood for a hearty meal or a light
          bite, our diverse menu has something for everyone. We also offer a
          wide selection of refreshing beverages and cocktails to complement
          your meal.
          <br />
        </p>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Come join us at <span className="font-bold">The Hungry Llama</span>,
          where good food meets great company!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
