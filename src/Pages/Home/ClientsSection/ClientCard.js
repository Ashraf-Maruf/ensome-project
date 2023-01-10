import React from 'react';

const ClientCard = ({ client }) => {
    const { name, title, icon } = client
    const mystyle = {
        boxShadow: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
    };
    return (
        <div class="card bg-base-100 rounded-[6px]" style={mystyle}>
            <div className=' ml-[30px] pt-6 flex justify-start'>
                <img src={icon} className='w-[50px] h-[50px]' alt="Shoes" />
            </div>
            <div class="card-body">
                <h2 class="card-title text-secondary font-Manrope text-2xl font-bold leading-[33px]">{name}</h2>
                <p className=' text-accent leading-[28px] text-justify'>{title}</p>
            </div>
        </div>
    );
};

export default ClientCard;