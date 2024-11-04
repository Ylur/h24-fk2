
"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import MagicBoxParent from "./MagicBox";
import { v4 as uuidv4 } from "uuid";

const calculateFibonacci = (num: number): number => {
  if (num <= 1) return num;
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};

const randomArray = [1, 2, 3, 4, 5];

type CustomRefComponentHandle = {
  Ingi: () => void;
};

type CustomRefComponentProps = {
  text: string;
};

const CustomRefComponent = forwardRef<
  CustomRefComponentHandle,
  CustomRefComponentProps
>((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      Ingi: () => {
        alert("Ingi!");
      },
    }),
    []
  );
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
});

CustomRefComponent.displayName = "CustomRefComponent";

const SlowComponent = () => {
  const [count, setCount] = useState(0);
  const [fibResult, setFibResult] = useState<number | null>(null);

  useEffect(() => {
    console.log({ count, value: ref.current });
  }, [count]);

  const ref = useRef<string | number>(10);

  const inputRef = useRef<HTMLInputElement>(null);

  const manyInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const indexRef = useRef<number>(0);

  const customRef = useRef<CustomRefComponentHandle>(null);

  const click = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const calculateFib = () => {
    // Simulate 
    const result = calculateFibonacci(10); 
    setFibResult(result);
  };

  return (
    <div>
      <div className="border">
        <input
          onChange={(e) => {
            ref.current = e.target.value;
          }}
          ref={inputRef}
          type="text"
          className="border"
        />
        <button
          onClick={() => {
            alert(ref.current);
          }}
        >
          Print value
        </button>
        <div className="border">
          <p>Ref value: {ref.current}</p>
        </div>
        <p>{count}</p>
        <button onClick={click}>focus input</button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment Count
        </button>
        <button onClick={calculateFib}>Calculate Fibonacci</button>
        {fibResult !== null && <p>Fibonacci Result: {fibResult}</p>}
      </div>
      <div className="border m-4">
        {randomArray.map((item, index, array) => (
          <div className="border m-4" key={uuidv4()}>
            <input
              ref={(ref) => {
                manyInputsRef.current[index] = ref;
              }}
              type="text"
            />
            <button
              onClick={() => {
                if (indexRef.current < array.length - 1) {
                  indexRef.current = indexRef.current + 1;
                  if (manyInputsRef.current[indexRef.current]) {
                    manyInputsRef.current[indexRef.current]?.focus();
                  }
                } else {
                  indexRef.current = 0;
                  if (manyInputsRef.current[0]) {
                    manyInputsRef.current[0]?.focus();
                  }
                }
              }}
            >
              Submit and focus next input
            </button>
          </div>
        ))}
      </div>
      <div className="border m-4">
        <CustomRefComponent text="Foop" ref={customRef} />
        <button
          onClick={() => {
            customRef.current?.Ingi();
          }}
        >
          Who is it?
        </button>
      </div>
    </div>
  );
};

const Item = () => {
  return <p>Hello</p>;
};

const TimeoutComponent = () => {
  const [showItem, setShowItem] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const click = () => {
    setShowItem((s) => !s);
    if (!showItem) {
      timeoutRef.current = setInterval(() => {
        console.log("clicked 3 sec ago!");
      }, 1000);
    } else {
      clearInterval(timeoutRef.current);
    }
  };
  return (
    <div className="border m-4">
      <button onClick={click}>Press!</button>
      {showItem && <Item />}
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Hello world</p>
        <SlowComponent />
        <MagicBoxParent />
        <TimeoutComponent />
      </main>
    </div>
  );
}
