import React from 'react';

function DishPreview() {
    const dishes = [
      { id: 1, name: "Starters", image: "/photos/Dish1.png", description: "Description of Dish 1" },
      { id: 2, name: "Main Courses", image: "/photos/Dish4.png", description: "Description of Dish 2" },
      { id: 3, name: "Sides", image: "/photos/Dish3.png", description: "Description of Dish 3" },
  
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {dishes.map(dish => (
          <div key={dish.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 m-2">
            <img className="w-full h-auto object-cover" src={dish.image} alt={dish.name} />
            <div className="mt-4 text-lg font-semibold">{dish.name}</div>
            <p className="mt-2 text-gray-600">{dish.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default DishPreview;
  
