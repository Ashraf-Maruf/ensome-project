import React from 'react';
import { Link } from 'react-router-dom';
import {
    HiOutlinePlay,
} from "react-icons/hi2";
const PlayButton = () => {
    return (
        <div>
            <Link className='play-button flex items-center font-Manrope font-semibold text-[16px] leading-[24px]'><span className=' mr-2 text-2xl'><HiOutlinePlay /></span>Watch the demo</Link>
        </div>
    );
};

export default PlayButton;