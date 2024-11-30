import './App.css';
import ComponentA from './component/Proc Drilling Problem/usingContextAPI/ComponentA';
import Test from './component/HOC/Test';
import HOC from './component/HOC/HOC';
import CustomHook from'./component/UseInputHook/CustomHook';
import {Routes,Route} from 'react-router-dom';
import Testy from './pages/Testy';
import MultipleCustomHook from './component/UseInputHook/MultipleCustomHook';
import MultiForm from './pages/MultiForm';
import LoadingHOC from  './component/HOC/LoadingHOC';
import APICall from './component/Hook/useEffect/APICall';
import Hooks from './pages/Hooks';
import HookDetail from './pages/HookDetail';
import Clock from './component/Hook/useEffect/Clock';
import DigitalClock from "./Digital Clock/DigitalClock";

function App() {
  return (
    <div className="App">
      {/* <ComponentA></ComponentA> */}
      {/* <HOC></HOC>*/}
      {/* <Test isLoading={true}></Test>  */}

      {/* <CustomHook></CustomHook> */}

      <Routes>
        <Route path="/test" element={<Testy></Testy>}></Route>
        <Route path="/custom-hook" element={<MultiForm></MultiForm>}></Route>
        <Route path ="/hooks" element={<Hooks></Hooks>}></Route>
        <Route path ="/hooks/:id" element={<HookDetail></HookDetail>}></Route>
        {/* <Route path ="/hooks/useEffect" element={<HookDetail></HookDetail>}></Route> */}
      </Routes>
    
      {/* <LoadingHOC isLoading={false} data="linn lat htun"></LoadingHOC> */}

      {/* <APICall></APICall> */}

        <DigitalClock></DigitalClock>
    </div>
  );
}

export default App;
