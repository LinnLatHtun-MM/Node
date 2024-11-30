import React from 'react';
import { useParams } from 'react-router-dom';
import InputFocus from '../component/Hook/useRef/InputFocus';
import VideoPlayer from '../component/Hook/useRef/VideoPlayer';
import Clock from '../component/Hook/useEffect/Clock';
import ProductSearch from '../component/Hook/useMemo/ProductSearch';
import WithoutUseMemo from '../component/Hook/useMemo/WithoutUseMemo';
import CountWithUseCallBack from '../component/Hook/useCallBack/CountWithUseCallBack'; // Import the new useCallback component

function HookDetails() {
  const { id } = useParams();
  console.log("id:", id);

  return (
    <>
      {id === "useRef" ? (
        <>
          <InputFocus />
          <VideoPlayer />
        </>
      ) : id === "useEffect" ? (
        <>
          <Clock />
        </>
      ) : id === "useMemo" ? (
        <>
          <ProductSearch />
          <WithoutUseMemo />
        </>
      ) : id === "CountWIthUseCallBack" ? (  // Add condition for useCallback
        <>
          <CountWithUseCallBack /> {/* Render the useCallback example */}
        </>
      ) : (
        <div>No component found for the given ID</div>
      )}
    </>
  );
}

export default HookDetails;
