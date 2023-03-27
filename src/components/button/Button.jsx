import React from 'react';

const Button = ({children}) => {
  
    return (
        <div className='text-center my-3'>
            <button className='bg-accent text-white'>{children}</button>
        </div>
    );
};

export default Button;