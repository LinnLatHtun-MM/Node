import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentC() {

    const user= useContext(UserContext);

  return (
    <>
    <div>Component D</div>
    <h1>{user}</h1>
    </>
    
  );
};

export default ComponentC;
