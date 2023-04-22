import React, { useState, useRef, useEffect } from 'react';
import Heading from './Heading';
import QRCode from "react-qr-code";

const QRCodeComp = () => {
    const [inputValue, setInputValue] = useState('');
    const [qrCodeRendered, setQRCodeRendered] = useState(false);
    const qrCodeRef = useRef(null);

    const handleInput = e => {
        e.preventDefault();
        const inputData = e.target.input_text.value;
        setInputValue(inputData);
        setQRCodeRendered(false);
    }

    const handleDownload = () => {
        if (qrCodeRendered) {
            const canvas = qrCodeRef.current.querySelector('canvas');
            if (canvas) {
                const dataUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = 'qr-code.png';
                link.href = dataUrl;
                link.click();
            }
        }
    }

    useEffect(() => {
        if (qrCodeRef.current) {
            setQRCodeRendered(true);
        }
    }, [qrCodeRef]);

    return (
        <section className='code_container'>
            <Heading />
            <form onSubmit={ handleInput } className='form'>
                <input type="text" name='input_text' className='code_value' placeholder='Enter text or url' />
                <button type='submit' className='code_button'>Generate QR Code</button>
            </form>
            <div className='code_preview' ref={ qrCodeRef }>
                <QRCode value={ inputValue } />
                <button className='code_button' onClick={ handleDownload }>Download Now</button>
            </div>
        </section>
    );
};

export default QRCodeComp;
