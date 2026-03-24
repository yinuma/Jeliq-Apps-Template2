import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section id="center">
      <h1>Home</h1>
      <p>
        Edit <code>app/routes/_index.tsx</code> and save to test <code>HMR</code>
      </p>
      <button
        className="counter"
        type="button"
        onClick={() => setCount((c) => c + 1)}
      >
        Count is {count}
      </button>
    </section>
  );
}
