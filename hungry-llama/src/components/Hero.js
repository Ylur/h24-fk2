function Hero() {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/path-to-hero-image.jpg")' }}
    >
      <h1 className="text-4xl font-bold">
        Where Good Food Meets Great Company - The Hungry Llama
      </h1>
    </div>
  );
}

export default Hero;
