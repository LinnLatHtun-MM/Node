import React from 'react'

function ClickEvent() {
    const handleClick = () => alert("Hello");
  return (
    <button onClick={handleClick}>Take the Shot!</button>
  )
}

export default ClickEvent