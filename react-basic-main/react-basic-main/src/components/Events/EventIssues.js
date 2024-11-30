import React from 'react'

function EventIssues(props) {
    // const upperCaseFunc = () => 5.toUpperCase()
    const upperCaseFunc = () => {
        try {
            (5).toUpperCase();
        } 
        catch(e) {
            console.log(`Oops, you can't uppercase a number. 
                Trying to do it resulted in the following`, e);
        }
    }
    
   
  return (
    // <div>{upperCaseFunc()} {props.name}</div>
    <>ss
    {/*         <h1>{prop.num}</h1>  */}
    {/* ReferenceError prop is not defined */}
          </>
  )
}

export default EventIssues