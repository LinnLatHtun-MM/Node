import React, { useState } from 'react'

function UseStateHook() {
    const [darkModeOn, setDarkModeOn] = useState(false);
    const darkMode = <h2>This is Dark Mode.</h2>
    const lightMode = <h2>This is Light Mode.</h2>
    const handleMode = () => {
        // setDarkModeOn((prev) => {console.log("prev", prev);return(!prev)})
        setDarkModeOn((prev) => !prev)
    }
  return (
    <div>
        <button onClick={handleMode}>Change Mode</button>
        {darkModeOn ? darkMode : lightMode}
        {darkModeOn}
    </div>
  )
}

export default UseStateHook