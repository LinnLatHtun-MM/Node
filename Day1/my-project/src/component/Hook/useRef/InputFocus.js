import React, { useRef } from 'react';

function InputFocus() {

    const inputRef= useRef(null);

    const focusInput= () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    }


  return (
    <>
    <input  ref= {inputRef} type='text'/>
    <button onClick={focusInput}>focusInput</button>
    </>
  );
};


export default InputFocus;
