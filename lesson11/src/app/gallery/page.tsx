import Image from "next/image";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
    alt: "Shrek",
  },
  {
    src: "https://static.wikia.nocookie.net/shrek/images/b/b4/Donkey_%28Shrek_2%29.png/revision/latest?cb=20230605032710",
    alt: "Donkey",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png",
    alt: "Fiona",
  },
  {
    src: "https://static.wikia.nocookie.net/shrek/images/2/2d/Farquaad_portrait.png/revision/latest?cb=20210624204736",
    alt: "Lord Farquaad",
  },
];

const IMAGE_HEIGHT = 100;

export default function Quotes() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 drop-shadow-md text-white">
        Shrek & Friends Gallery
      </h2>
      <div className="flex flex-row">
        {images.map((image, index) => (
          <Image
            height={IMAGE_HEIGHT}
            width={IMAGE_HEIGHT}
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
}
