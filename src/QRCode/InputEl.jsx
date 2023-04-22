import React from 'react';

const InputEl = ({ handleInput, InputValue }) => {
    return (
        <div className='form'>
            <input onChange={ (e) => handleInput(e) } value={ InputValue } type="text" className='code_value' placeholder='Enter text or url' />
        </div>
    );
};

export default InputEl;
