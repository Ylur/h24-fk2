"use client";

import { useState } from "react";
import { v4 } from "uuid";

const Counter = ({
  id,
  handleRemove,
}: {
  id: string;
  handleRemove: (id: string) => void;
}) => {
  const [state, setState] = useState(0);

  const onRemoveClick = () => {
    handleRemove(id);
  };

  return (
    <div className="border p-12 bg-slate-500 text-white animate-fadeOut">
      <button
        onClick={() => {
          setState((s) => s + 1);
        }}
      >
        Press
      </button>
      <label>{state}</label>
      <button onClick={onRemoveClick}>Remove item</button>
    </div>
  );
};
export default function Home() {
  const [data, setData] = useState([
    { value: "asdf", id: v4() },
    { value: "asdf", id: v4() },
    { value: "asdf", id: v4() },
  ]);

  const filterListByItem = (itemId: string) => {
    setData((d) => d.filter((i) => i.id !== itemId));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Hello world</p>
        {data.map((item) => (
          <Counter key={item.id} id={item.id} handleRemove={filterListByItem} />
        ))}
      </main>
    </div>
  );
}
