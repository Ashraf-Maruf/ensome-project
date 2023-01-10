import React from 'react';

const Title = ({ children }) => {
    return (
        <div>
            <h2 className='font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-5xl  xl:leading-[60px] 2xl:leading-[60px] font-extrabold text-secondary capitalize'>{children}</h2>
        </div>
    );
};

export default Title;