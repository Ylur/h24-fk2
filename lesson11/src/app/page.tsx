import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-md text-white">
        Welcome to Shrek&apos;s Swamp!
      </h1>
      <p>
        Shrek is an ogre who enjoys his solitude, but adventure always finds
        him. Join Shrek and his friends on their funny, exciting adventures!
      </p>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
        alt="Shrek"
        width={100}
        height={100}
        className="shrek-img"
      />
    </div>
  );
}
