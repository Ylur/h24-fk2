function DishPreview() {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 m-2">
        <img className="w-full" src="/path-to-dish-image.jpg" alt="Dish Name" />
        <div className="mt-4 text-lg font-semibold">Dish Name</div>
        <p className="mt-2 text-gray-600">Description of the dish</p>
      </div>
    </div>
  );
}

export default DishPreview;
