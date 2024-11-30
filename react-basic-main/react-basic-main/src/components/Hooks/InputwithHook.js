import React, {useState} from 'react'

function InputwithHook() {
    const [inputText, setText] = useState(''); 

    function handleChange(e) { 
        console.log(e.target.value)
        setText(e.target.value); 
    } 
  
    return ( 
      <> 
        <input value={inputText} onChange={handleChange} /> 
        <p>You typed: {inputText}</p> 
        <button onClick={() => setText('')}> 
          Reset 
        </button> 
      </> 
    );
}

export default InputwithHook