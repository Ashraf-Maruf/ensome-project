import React from 'react';
import { Link } from 'react-router-dom';

const SuccessSectionCard = ({ success }) => {
    const { date, name, title } = success
    const mystyle = {
        boxShadow: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
    };
    return (
        <div class="card bg-base-100 rounded-[6px]" style={mystyle}>
            <div class="card-body">
                <p className=' font-OpenSans text-accent font-normal text-[14px] leading-[24px] text-left'>{date}</p>
                <h2 class="card-title text-left text-secondary font-Manrope text-2xl font-bold leading-[33px]">{name}</h2>
                <p className=' text-accent leading-[28px] text-justify'>{title}</p>
                <div className=' text-left'>
                    <Link className=' mr-4 text-primary font-Manrope font-extrabold text-[14px] leading-[24px]'>Proxy</Link>
                    <Link className='text-primary font-Manrope font-extrabold text-[14px] leading-[24px]'>Vpn</Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessSectionCard;