import React from 'react';
import Webcam from 'react-webcam';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import './style.scss';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          className="camera"
          width= {400}
          height={400}
          audio={false}
          ref={webcamRef}
          mirrored="true"
          screenshotFormat="image/jpeg"
        />
        <Button appearance="primary" onClick={capture}>Tirar Foto</Button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };
  
export default WebcamCapture;