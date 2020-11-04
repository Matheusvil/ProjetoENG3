import React from 'react';
import Webcam from 'react-webcam';
import './style.scss';

const WebCam = () =>{
    return(
        <Webcam 
            audio={false}
        />
    );
};

export default WebCam;