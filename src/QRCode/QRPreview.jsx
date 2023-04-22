import React from 'react';
import QRImage from '../QR_Code.png'

const QRPreview = () => {
    return (
        <div className='code_preview'>
            <img src={ QRImage } alt="" />
            <button className='code_button'>Download Now</button>
        </div>
    );
};

export default QRPreview;
