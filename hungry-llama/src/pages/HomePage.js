import React from 'react';
import DishPreview from '../components/DishPreview';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Header />

      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: 'url("/photos/HL.png")' }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to The Hungry Llama</h1>
            <p className="mt-4 text-lg">Where Good Food Meets Great Company</p>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto p-8">
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Our Popular Dishes</h2>
          <DishPreview />
          <div className="text-center mt-8">
            <Link to="/menu" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Full Menu
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default HomePage;
