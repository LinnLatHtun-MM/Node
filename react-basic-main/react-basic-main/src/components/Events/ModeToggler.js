import React, { useState, useEffect } from 'react'

function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h2>This is Dark Mode.</h2>
    const lightMode = <h2>This is Light Mode.</h2>
    const handleMode = () => {
        darkModeOn = !darkModeOn
        if(darkModeOn == true){
            console.log("Dark Mode is on.")
        }else{
            console.log("Light Mode is on.")
    
        }
    }
   
  return (
    <div>
        <button onClick={handleMode}>Change Mode</button>
        {darkModeOn ? darkMode : lightMode}
    </div>
  )
}





export default ModeToggler