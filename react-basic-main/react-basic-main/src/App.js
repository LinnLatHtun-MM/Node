import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Context/Nav";
import EventIssues from "./components/Events/EventIssues";
import ModeToggler from "./components/Events/ModeToggler";
import Header from "./components/Header";
import InputForm from "./components/Hooks/InputForm";
import InputwithHook from "./components/Hooks/InputwithHook";
import SimpleUseState from "./components/Hooks/SimpleUseState";
import ParentChildRS from "./components/Parent-Child-data-flow/ParentChildRS";
import Bag from "./components/Props-children/Bag";
import Fruit from "./components/Props-children/Fruit";
import logo from "./logo.svg";
import React, { useState } from "react";
import HomePage from "./HomePage";
import About from "./About";
import Hook from "./Hook";
import ComponentA from "./components/UseContextAndPropDrilling/ComponentA";
import UseRefComponent from "./components/UseRef/UseRefComponent";
import StopWatch from "./components/UseRef/StopWatch";

function Logo() {
  const userImg = (
    <img src={logo} style={{ width: "100px", height: "100px" }} />
  );
  return userImg;
}

// function App() {
//   const result = <h1>Hello Result</h1>;
//   const isMobile = true;
//   return (
//     <div className="App">
//       <SimpleUseState></SimpleUseState>
//       <PropsDrilling />
//       <Header name="Hello React JS" />
//       <Bag>Hello 1</Bag>
//       <Bag>Hello 2</Bag>
//       <Bag children={<h2>Hello 3</h2>} />
//       <Bag children={<Fruit name="Apple" />} />
//       <Bag
//         children={
//           <>
//             <Fruit name="Mango" />
//             <Fruit name="Orange" />
//           </>
//         }
//       />
//       {result}
//       <p>{isMobile ? "Mobile view" : "Desktop view"}</p>
//       <Logo />
//       <EventIssues />
//       <ModeToggler />
//       <ParentChildRS></ParentChildRS>
//       <InputwithHook></InputwithHook>
//       <InputForm />
//     </div>
//   );
// }

// export const Context = React.createContext();
// function App() {
//   const [signedIn, setSignedIn] = useState(false);
//   return (
//     <Context.Provider value={[signedIn, setSignedIn]}>
//       <Nav></Nav>
//       <h1> {signedIn ? "Please Signed In" : "You can Signed Out"}</h1>
//     </Context.Provider>
//   );
// }
// export default App;

export const Context = React.createContext();
// function App() {
//   const [signedIn, setSignedIn] = useState(false);
//   return (
//     <Context.Provider value={[signedIn, setSignedIn]}>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/hook">Hook</Link>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/hook" element={<Hook />} />
//       </Routes>

//       <Nav></Nav>
//       <h1> {signedIn ? "Please Signed In" : "You can Signed Out"}</h1>
//     </Context.Provider>
//   );
// }

function App() {
  // return <ComponentA />;
  // return <UseRefComponent />;
  return <StopWatch />;
}

export default App;
