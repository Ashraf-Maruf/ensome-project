import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../Assets/Banner.png'
import Button from '../../../Components/Button/Button';
import BrandLogo from '../BrandLogo/BrandLogo';
import {
    HiOutlinePlay,
} from "react-icons/hi2";
import VideoButton from '../../../Components/VideoButton/VideoButton';
import PlayButton from '../../../Components/VideoButton/PlayButton';
const HeaderSection = () => {
    return (
        <div class="hero pb-14 lg:pb-14 xl:pb-14 2xl:pb-0 bg-white 2xl:overflow-hidden">
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div class="hero-content 2xl:p-0  flex-col lg:flex-row-reverse">
                    <div className=' relative lg:left-14 xl:left-[185px] 2xl:-top-0 2xl:left-[190px]'>
                        <img src={BannerImg} class="lg:max-w-md xl:max-w-xl 2xl:max-w-xl" alt='img' />
                    </div>
                    <div className='text-left 2xl:pt-[75px]'>
                        <h1 class=" font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-5xl  xl:leading-[60px] 2xl:leading-[60px] font-extrabold text-secondary capitalize">Find
                            true power in your data with Ensome</h1>
                        <p class=" py-8 text-accent 2xl:leading-[33px] text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.</p>
                        <div className=' md:flex'>
                            <Button>Learn more</Button>
                            <div className=' flex justify-center mt-6 md:mt-0 md:ml-4 lg:hidden xl:hidden 2xl:hidden'>
                                <VideoButton></VideoButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden 2xl:inline-block  2xl:mt-20'>
                    <BrandLogo></BrandLogo>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;