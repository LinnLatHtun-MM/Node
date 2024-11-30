import React, { useCallback, useState } from 'react';

function CountWithUseCallBack() {

 // ma lo add tr twy ko ma call bu function tway 
 const functionsCount = new Set();
 
 const [count, setCount] = useState(0);
 const [otherCount, setOtherCount] = useState(0);

 const increment = useCallback(() => {
    setCount(() => count + 1);
  }, [count]);
  

  const decreasement = useCallback(() => {
    setCount(() => count + 1);
  }, [count]);

  const otherIncrement = useCallback(() => {
    setOtherCount(() => count + 1);
  }, [otherCount]);
  


functionsCount.add(increment);
functionsCount.add(decreasement);
functionsCount.add(otherIncrement);
console.log(functionsCount);
  return (
    <>
        <h1>Count With  Use Call Back</h1>
        {count}
        <br/>

        <button onClick={increment}>+</button>

        <button onClick={decreasement}>-</button>
        <br/>
        {otherCount}
        <br/>
        <button onClick={otherIncrement}>Increase</button>

    </>
  );
}


export default CountWithUseCallBack;
/* digital clock is home work */