import { useState } from "react";

//use small lattter
export const useInput=(initialValue) => {

    const [value,setValue] =useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    return  [value,handleChange];
};

