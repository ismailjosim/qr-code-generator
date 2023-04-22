import React from 'react';
import Heading from './Heading';
import InputEl from './InputEl';
import QRPreview from './QRPreview';

const QRCode = () => {
    return (
        <section className='code_container'>
            <Heading />
            <InputEl />
            <QRPreview />
        </section>
    );
};

export default QRCode;
