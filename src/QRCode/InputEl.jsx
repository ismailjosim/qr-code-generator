import React from 'react';

const InputEl = ({ handleInput, InputValue }) => {
    return (
        <div className='form'>
            <input onChange={ (e) => handleInput(e) } value={ InputValue } type="text" name='input_text' className='code_value' placeholder='Enter text or url' />
            <button type='submit' className='code_button'>Generate QR Code</button>
        </div>
    );
};

export default InputEl;
