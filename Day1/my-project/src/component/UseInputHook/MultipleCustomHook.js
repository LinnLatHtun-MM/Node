import React, { useState } from "react";

//as a module not a 
export const useMultipleCustomHook = (initialValue) => {

const [values,setValues] = useState(initialValue);

    const handleChange= (e) => {
        const {name,value} = e.target;
        setValues({
            ...values, 
            [name]:value
        })
    }

    const resetValues= () =>{
        setValues(initialValue);
    }

   return {values,handleChange,resetValues};
}

