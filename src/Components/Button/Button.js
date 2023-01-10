import React from 'react';
import './Button.css'
const Button = ({ children }) => {
    return (
        <div>
            <button className=' w-full leading-[24px] font-Manrope text-[16px] font-bold md:w-48 md:h-14 lg:w-48 lg:h-14 xl:w-48 xl:h-14 2xl:w-48 2xl:h-14 btn-button'>{children}</button>
        </div>
    );
};

export default Button;