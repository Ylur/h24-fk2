import localFont from "next/font/local";
import HelloWrapper from "../components/HelloWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HelloWorldMap = [
  {
    text: "Hello World!",
    age: 20,
    height: 180,
    name: "upper",
  },
  {
    text: "Goodbye World!",
    age: 30,
    height: 200,
    name: "lower",
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HelloWrapper
          text={HelloWorldMap[0].text}
          age={HelloWorldMap[0].age}
          height={HelloWorldMap[0].height}
          name={HelloWorldMap[0].name}
        />
        <HelloWrapper
          text="Goodbye World! 1"
          age={40}
          height={300}
          name="center"
        />
        <HelloWrapper {...HelloWorldMap[1]} />
        <div className="border p-4">
          <div className="border h-40 w-40">
            <p>annoying text</p>
            <p>annoying age</p>
            <p>annoying height</p>
            <div className="border p-4">
              <p>annoying name</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
