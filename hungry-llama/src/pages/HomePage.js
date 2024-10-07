import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DishGrid from '../components/DishGrid';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <section className="py-8">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Our Popular Dishes
        </h2>
        <div>
          <DishGrid />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
