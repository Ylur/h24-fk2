import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MenuPage() {
  const starters = [
    {
      name: 'Chicken Caesar Salad',
      description:
        'Romaine Lettuce, Grilled Chicken, Parmesan Cheese, and Caesar Dressing',
      image: '/photos/Dish1.png', 
    },
    {
      name: 'Classic Cobb Salad',
      description:
        'Grilled Chicken, Avocado, Bacon, Hard-Boiled Eggs, Tomatoes, and Blue Cheese Dressing',
      image: '/photos/Dish2.png',
    },
    {
      name: 'Asian Chicken Salad',
      description:
        'Shredded Chicken, Mandarin Oranges, Crispy Wontons, and Sesame Ginger Dressing',
      image: '/photos/Dish3.png',
    },
  ];

  const mainCourses = [
    {
      name: 'Southwest Chicken Salad',
      description:
        'Grilled Chicken, Corn, Black Beans, Avocado, Tomatoes, and Chipotle Ranch Dressing',
      image: '/photos/Dish4.png', // Adjusted image path
    },
    {
      name: 'Grilled Chicken Salad',
      description:
        'Mixed Greens, Grilled Chicken, Cherry Tomatoes, Red Onion, and Balsamic Vinaigrette',
      image: '/photos/Dish5.png', // Adjusted image path
    },
    {
      name: 'Greek Chicken Salad',
      description:
        'Grilled Chicken, Feta Cheese, Cucumbers, Kalamata Olives, and Lemon-Olive Oil Dressing',
      image: '/photos/Dish6.png', // Adjusted image path
    },
    {
      name: 'Buffalo Chicken Salad',
      description:
        'Crispy Chicken Tenders, Mixed Greens, Carrots, Celery, Blue Cheese Crumbles, and Buffalo Ranch Dressing',
      image: '/photos/Dish7.png', // Adjusted image path
    },
  ];

  const sandwiches = [
    {
      name: 'Grilled Chicken Panini',
      description: 'Mozzarella Cheese, Roasted Red Peppers, and Pesto Mayo',
      image: '/photos/Dish8.png', // Adjusted image path
    },
    {
      name: 'Chicken Salad Sandwich',
      description:
        'Shredded Chicken, Grapes, Almonds, and Lettuce on Whole Wheat Bread',
      image: '/photos/Dish9.png', // Adjusted image path
    },
  ];

  const sides = [
    { name: 'Sweet Potato Fries', image: '/photos/Dish1.png' }, // Reuse or assign different photos as needed
    { name: 'Garlic Parmesan Fries', image: '/photos/Dish2.png' },
    { name: 'Grilled Vegetables', image: '/photos/Dish3.png' },
  ];

  const renderMenuSection = (title, items) => (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            {item.description && (
              <p className="text-gray-600">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

        {renderMenuSection('Starters', starters)}
        {renderMenuSection('Main Courses', mainCourses)}
        {renderMenuSection('Sandwiches', sandwiches)}
        {renderMenuSection('Sides', sides)}
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
