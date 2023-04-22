import React from 'react';

const InputEl = () => {
    return (
        <form>
            <input type="text" className='code_value' placeholder='Enter text or url' />
            <button type='submit' className='code_button'>Generate QR Code</button>
        </form>
    );
};

export default InputEl;
