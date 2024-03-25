import React, {useEffect, useRef} from 'react';

function VideoPlayerCloudinary2() {
    const cloudinaryRef:any = useRef();
    useEffect(() =>{
        if(cloudinaryRef.exists) return;
      cloudinaryRef.current =  window.window;
      cloudinaryRef.current.videoPlayer()
    })
    return (
        <div></div>
    );
}

export default VideoPlayerCloudinary2;