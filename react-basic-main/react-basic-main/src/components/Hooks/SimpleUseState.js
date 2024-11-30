import React, { useState } from "react";

function SimpleUseState() {
  const [word, setWord] = useState("World");
  const changeWord = () => {
    setWord("React");
  };
  
  function change() {
    setWord("HH");
  }
  return (
    <>
      <h1>Hello {word}</h1>
      <button onClick={() => changeWord()}>Change word</button>
      <button onClick={change}>Click me</button>
    </>
  );
}

export default SimpleUseState;
