import React, { useState, useEffect, useRef } from "react";
// For not re render component

// function UseRefComponent() {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     console.log("Component Rendered");
//   });

//   function handleClick() {
//     setNumber((num) => num + 1);
//   }
//   return (
//     <>
//       <p>{number}</p>
//       <button onClick={handleClick}>Click</button>
//     </>
//   );
// }

// function UseRefComponent() {
//   const ref = useRef(0);

//   useEffect(() => {
//     console.log("Component Rendered");
//   });

//   function handleClick() {
//     ref.current++;
//     console.log(ref.current);
//   }
//   return (
//     <>
//       {/* <p>{number}</p> */}
//       <button onClick={handleClick}>Click</button>
//     </>
//   );
// }

function UseRefComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <input ref={inputRef} type="text" />
    </>
  );
}
export default UseRefComponent;
