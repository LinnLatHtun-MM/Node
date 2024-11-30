import React from 'react'

function PromoHeading(props) {
    const {heading, callToAction} = props
  return (
    <>
        <h1>{heading}</h1>
        <p>{callToAction}</p>
    </> 
 )
}

export default PromoHeading