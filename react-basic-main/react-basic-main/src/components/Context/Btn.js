import React, { useContext } from "react";
import { Context } from "../../App";

function Btn() {
  const [signedIn, setSignedIn] = useContext(Context);
  // const [signedIn, setSignedIn] = useState(context);
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Signed Out" : "Signed In"}
    </button>
  );
}

export default Btn;
