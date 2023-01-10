import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/Logo.png'
import {
    HiBars3BottomRight,
    HiOutlineXMark,
} from "react-icons/hi2";
import './Navbar.css'
import VideoButton from '../../Components/VideoButton/VideoButton';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-white'>
            <div className=' py-3 border-b-2 border-[#C9DCEC]'>
                <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                    <div className="navbar px-4 md:px-0 lg:px-4 2xl:px-0 z-20">
                        <div className='navbar-start'>
                            <div className="navbar-start lg:hidden relative">
                                <div className='text-center ' onClick={() => setOpen(!open)}>
                                    {open ?
                                        <span className='open-nav'><HiOutlineXMark /></span>
                                        :
                                        <span className='close-nav'><HiBars3BottomRight /></span>
                                    }
                                </div>
                                <div className={` absolute duration-700 ease-out ${open ? 'activeOpen' : 'left-[-999px]'}`}>
                                    <div className=" bg-primary" onClick={() => setOpen(!open)}>
                                        <div className=' flex justify-center items-center '>
                                            <ul className='menu-area px-5 py-4 text-white font-Manrope font-semibold menu-compact items-center dropdown-content text-center rounded-box'>
                                                <li><Link to='/'>Home</Link></li>
                                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                                <li><Link to='/about'>Solutions</Link></li>
                                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                                <li><Link to='/skill'>Elements</Link></li>
                                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                                <li><Link to='/login'>Blog</Link></li>
                                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                                <li><Link to='/login'>Contacts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' hidden lg:block xl:block 2xl:block'>
                                <Link to='/'><img src={Logo} alt='logo' /></Link>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:block">
                            <ul class="navbar-menu font-Manrope font-semibold text-[14px] leading-[24px]  menu-horizontal p-0">
                                <li><Link to='/'>Home</Link></li>
                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                <li><Link to='/about'>Solutions</Link></li>
                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                <li><Link to='/skill'>Elements</Link></li>
                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                <li><Link to='/login'>Blog</Link></li>
                                <div class="divider my-1 opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                                <li><Link to='/login'>Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className=' lg:hidden xl:hidden 2xl:hidden'>
                                <img src={Logo} alt='logo' />
                            </div>
                            <div className=' hidden lg:block xl:block 2xl:block'>
                                <VideoButton></VideoButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;