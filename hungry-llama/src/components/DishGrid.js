import React from 'react';

// ath hvort það sé betri leið fyrir import

import Dish1 from '../photos/Dish1.png';
import Dish2 from '../photos/Dish2.png';
import Dish3 from '../photos/Dish3.png';
import Dish4 from '../photos/Dish4.png';
import Dish5 from '../photos/Dish5.png';
import Dish6 from '../photos/Dish6.png';
import Dish7 from '../photos/Dish7.png';
import Dish8 from '../photos/Dish8.png';
import Dish9 from '../photos/Dish9.png';

function DishPreview() {
  // Info um diskana
  const dishes = [
    { id: 1, name: "Dish 1", image: Dish1, description: "Description of Dish 1" },
    { id: 2, name: "Dish 2", image: Dish2, description: "Description of Dish 2" },
    { id: 3, name: "Dish 3", image: Dish3, description: "Description of Dish 3" },
    { id: 4, name: "Dish 4", image: Dish4, description: "Description of Dish 4" },
    { id: 5, name: "Dish 5", image: Dish5, description: "Description of Dish 5" },
    { id: 6, name: "Dish 6", image: Dish6, description: "Description of Dish 6" },
    { id: 7, name: "Dish 7", image: Dish7, description: "Description of Dish 7" },
    { id: 8, name: "Dish 8", image: Dish8, description: "Description of Dish 8" },
    { id: 9, name: "Dish 9", image: Dish9, description: "Description of Dish 9" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {dishes.map((dish) => (
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
