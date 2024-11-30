import React from 'react'

function Header(props) {
  console.log(props)
  let {name} = props;
  // props.name = "red"; // not allowed
  console.log(props.name)
  return (
    <div>Header</div>
  )
}

export default Header