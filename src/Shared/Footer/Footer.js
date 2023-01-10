import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube, FaLongArrowAltRight } from "react-icons/fa";
import FooterLogo from '../../Assets/Logo/Logo.png'
const Footer = () => {
    return (
        <div className='bg-[#F1F6FA]'>
            <div className='px-4 md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <footer class="footer pt-[50px] pb-[40px] md:gap-[90px] lg:gap-[175px] xl:gap-[200px] 2xl:gap-[240px] text-base-content">
                    <div class="items-center grid-flow-col">
                        <Link to='/'><img src={FooterLogo} alt='' /></Link>
                    </div>
                    <div>
                        <span class="footer-title opacity-100 text-secondary font-Manrope font-bold leading-[24px]">About</span>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Home</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">About Us</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Services</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Solutions</Link>
                    </div>
                    <div>
                        <span class="footer-title opacity-100 text-secondary font-Manrope font-bold leading-[24px]">Information</span>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Contacts</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Our team</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Blog</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">FAQ</Link>
                    </div>
                    <div>
                        <span class="footer-title opacity-100 text-secondary font-Manrope font-bold leading-[24px]">Service</span>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Pages</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Elements</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Site map</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Pricing</Link>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">FAQ</Link>
                    </div>
                </footer>
                <footer class="footer  py-[40px] border-t text-base-content border-[#C9DCEC]">
                    <div className='2xl:pr-5'>
                        <span class="footer-title opacity-100 text-secondary font-Manrope font-bold leading-[24px]">Contacts</span>
                        <Link class="link font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">+1 601-201-5580</Link>
                        <Link class="link flex items-center font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">ensome@info.co.us<span className=' ml-3 mt-[2px]'><FaLongArrowAltRight /></span></Link>
                    </div>
                    <div className='md:-ml-[0px] lg:-ml-[100px] xl:-ml-[150px] 2xl:-ml-[230px] md:mt-[40px] lg:mt-[40px] xl:mt-[40px]2xl:mt-[40px]'>
                        <p class="font-OpenSans font-normal text-[14px] text-secondary leading-[24px]">1642 Washington Avenue, Jackson, MS, 39201</p>
                        <Link class="link flex items-center font-OpenSans font-normal text-[14px] text-secondary leading-[24px] link-hover">Driving derections<span className=' ml-3 mt-[2px]'><FaLongArrowAltRight /></span></Link>
                    </div>
                    <div className=' relative md:-right-[18px] lg:right-[73px] xl:right-[58px] 2xl:right-[28px]'>
                        <span class="footer-title opacity-100 text-secondary font-Manrope font-bold leading-[24px]">Social</span>
                        <ul className=' flex'>
                            <Link className=' text-primary text-2xl mr-3'><span><FaFacebook /></span></Link>
                            <Link className=' text-primary text-2xl mr-3'><span><FaTwitter /></span></Link>
                            <Link className=' text-primary text-2xl mr-3'><span><FaInstagramSquare /></span></Link>
                            <Link className=' text-primary text-2xl'><span><FaYoutube /></span></Link>
                        </ul>
                    </div>
                </footer>
                <footer class="footer py-[40px] border-t text-base-content border-[#C9DCEC]">
                    <div className='2xl:pr-5'>
                        <Link class="link flex items-center font-Manrope font-normal text-[14px] text-accent leading-[24px] link-hover">Privacy policy<span className=' ml-3 mt-[2px]'><FaLongArrowAltRight /></span></Link>
                    </div>
                    <div className=' md:-ml-[30px] lg:-ml-[130px] xl:-ml-[160px] 2xl:-ml-[218px] '>
                        <Link class="link flex items-center font-Manrope font-normal text-[14px] text-accent leading-[24px] link-hover">Terms of us<span className=' ml-3 mt-[2px]'><FaLongArrowAltRight /></span></Link>
                    </div>
                    <div class="md:place-self-center md:justify-self-end">
                        <div class="grid grid-flow-col gap-4">
                            <p className='font-OpenSans font-normal text-[14px] text-accent leading-[24px]'>© 2022 Ensome. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;