import Image from "next/image";

const facts = [
  "Donkey loves waffles.",
  "He's voiced by Eddie Murphy.",
  "He married a dragon and had flying donkey-dragon babies!",
  "Donkey's catchphrase is: I'm making waffles!",
];

export default function Quotes() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-md text-white text-center">
        Fun Facts About Donkey
      </h2>
      <ul>
        {facts.map((fact, index) => (
          <li className="text-center" key={index}>
            {fact}
          </li>
        ))}
      </ul>
      <Image
        height={100}
        width={100}
        src="https://static.wikia.nocookie.net/shrek/images/b/b4/Donkey_%28Shrek_2%29.png/revision/latest?cb=20230605032710"
        alt="Donkey"
      />
    </div>
  );
}
