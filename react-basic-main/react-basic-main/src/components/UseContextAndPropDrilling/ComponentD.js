import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const context = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{context}</h2>
    </div>
  );
}

export default ComponentD;
