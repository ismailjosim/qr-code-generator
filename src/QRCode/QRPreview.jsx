import React, { useRef } from 'react';
import QRCode from "react-qr-code";

const QRPreview = ({ InputValue }) => {
    const canvasRef = useRef(null);

    const handleDownloadImage = () => {
        const canvas = canvasRef.current;
        const img = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'qrcode.jpg';
        link.href = img;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='code_preview'>
            <canvas ref={ canvasRef } style={ { display: 'none' } } />
            <QRCode value={ InputValue } onRender={ (canvas) => {
                const imgCanvas = canvasRef.current;
                imgCanvas.width = canvas.width;
                imgCanvas.height = canvas.height;
                imgCanvas.getContext('2d').drawImage(canvas, 0, 0);
            } } />
            <button className='code_button' onClick={ handleDownloadImage }>Download Now</button>
        </div>
    );
};

export default QRPreview;
