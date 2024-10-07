import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MenuPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Starters</h2>
          <ul className="list-disc ml-6">
            <li>Chicken Caesar Salad with Romaine Lettuce, Grilled Chicken, Parmesan Cheese, and Caesar Dressing</li>
            <li>Classic Cobb Salad with Grilled Chicken, Avocado, Bacon, Hard-Boiled Eggs, Tomatoes, and Blue Cheese Dressing</li>
            <li>Asian Chicken Salad with Shredded Chicken, Mandarin Oranges, Crispy Wontons, and Sesame Ginger Dressing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Main Course</h2>
          <ul className="list-disc ml-6">
            <li>Southwest Chicken Salad with Grilled Chicken, Corn, Black Beans, Avocado, Tomatoes, and Chipotle Ranch Dressing</li>
            <li>Grilled Chicken Salad with Mixed Greens, Grilled Chicken, Cherry Tomatoes, Red Onion, and Balsamic Vinaigrette</li>
            <li>Greek Chicken Salad with Grilled Chicken, Feta Cheese, Cucumbers, Kalamata Olives, and Lemon-Olive Oil Dressing</li>
            <li>Buffalo Chicken Salad with Crispy Chicken Tenders, Mixed Greens, Carrots, Celery, Blue Cheese Crumbles, and Buffalo Ranch Dressing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sandwiches</h2>
          <ul className="list-disc ml-6">
            <li>Grilled Chicken Panini with Mozzarella Cheese, Roasted Red Peppers, and Pesto Mayo</li>
            <li>Chicken Salad Sandwich with Shredded Chicken, Grapes, Almonds, and Lettuce on Whole Wheat Bread</li>
            <li>Buffalo Chicken Wrap with Crispy Chicken Tenders, Mixed Greens, Blue Cheese Crumbles, and Buffalo Ranch Dressing in a Flour Tortilla</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sides</h2>
          <ul className="list-disc ml-6">
            <li>Sweet Potato Fries</li>
            <li>Garlic Parmesan Fries</li>
            <li>Grilled Vegetables</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
