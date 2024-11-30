import React, {useRef} from 'react';

function VideoPlayer() {

    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }

    const pauseVideo = () => {
        videoRef.current.pause();
    }

    return (
        <>
            <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" ref={videoRef}> Your Browser doesn't
                support
            </video>
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
            </div>
        </>

    )
};


export default VideoPlayer;
