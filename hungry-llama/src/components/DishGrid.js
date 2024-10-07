import React from 'react';

function DishPreview() {
    const dishes = [
      { id: 1, name: "Dish 1", image: "/photos/Dish1.png", description: "Description of Dish 1" },
      { id: 2, name: "Dish 2", image: "/photos/Dish2.png", description: "Description of Dish 2" },
      { id: 3, name: "Dish 3", image: "/photos/Dish3.png", description: "Description of Dish 3" },
      { id: 4, name: "Dish 4", image: "/photos/Dish4.png", description: "Description of Dish 4" },
      { id: 5, name: "Dish 5", image: "/photos/Dish5.png", description: "Description of Dish 5" },
      { id: 6, name: "Dish 6", image: "/photos/Dish6.png", description: "Description of Dish 6" },
      { id: 7, name: "Dish 7", image: "/photos/Dish7.png", description: "Description of Dish 7" },
      { id: 8, name: "Dish 8", image: "/photos/Dish8.png", description: "Description of Dish 8" },
      { id: 9, name: "Dish 9", image: "/photos/Dish9.png", description: "Description of Dish 9" },
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
  
