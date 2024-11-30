import React, { useEffect, useState } from "react";

function UseRefHook() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button>
      <button onClick={() => setValue((count) => count - 1)}>-</button>
    </>
  );
}
export default UseRefHook;
