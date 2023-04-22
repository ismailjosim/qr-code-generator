import React, { useState } from 'react';
import Heading from './Heading';
import InputEl from './InputEl';
import QRPreview from './QRPreview';

const QRCode = () => {
    const [InputValue, setInputValue] = useState('');

    const handleInput = e => {
        e.preventDefault()
        const inputData = e.target.value;
        setInputValue(inputData);
    }

    return (
        <section className='code_container'>
            <Heading />
            <InputEl handleInput={ handleInput } InputValue={ InputValue } />
            <QRPreview InputValue={ InputValue } />
        </section>
    );
};

export default QRCode;
