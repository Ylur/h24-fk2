"use client";
import Image from "next/image";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { v4 } from "uuid";

const foo = undefined;

function resolveAfter2Seconds(number: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 2000);
  });
}

const ApiComponent = () => {
  const [catValues, setCatValues] = useState(null);
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(1);

  const getCatData = useCallback(async () => {
    try {
      const rawData = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=9"
      );
      if (!rawData.ok) {
        throw new Error(`Something went wrong, error code: ${rawData.status}`);
      }
      const parsedData = await rawData.json();
      setCatValues(parsedData);
      return parsedData;
    } catch (e) {
      return [];
    }
  }, []);

  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log("counting", Math.random());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // THIS RIGHT HERE IS THE MAIN REASON WE USE USEEFFECTS
    getCatData();
  }, [getCatData]);

  useEffect(() => {
    console.log(count);
  }, [other]);

  if (!catValues) {
    return <p>Loading…</p>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          handleClick();
        }}
        type="button"
      >
        Increment count!
      </button>
      <button
        onClick={() => {
          setOther((c) => c + 1);
        }}
        type="button"
      >
        other
      </button>
      {catValues.map((cat) => (
        <img src={cat.url} key={cat.id} width={100} height={100} />
      ))}
    </div>
  );
};

export default function Home() {
  const [state, setState] = useState(true);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Hello world</p>
        <button
          onClick={() => {
            setState((s) => !s);
          }}
          type="button"
        >
          Press!
        </button>
        {state && <ApiComponent />}
      </main>
    </div>
  );
}
