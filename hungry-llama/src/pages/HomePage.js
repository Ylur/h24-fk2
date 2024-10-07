import Header from '../components/Header';
import Hero from '../components/Hero';
import DishPreview from '../components/DishPreview';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <section className="py-8">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Our Popular Dishes
        </h2>
        <DishPreview />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
