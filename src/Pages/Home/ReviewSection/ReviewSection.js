import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewSection.css'
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import personData from './ReviewPersonData';
import Title from '../../../Components/Title/Title';
import CompanyOverviewSection from '../CompanyOverviewSection/CompanyOverviewSection';
const ReviewSection = () => {

    const mystyle = {
        boxShadow: '0px 4px 12px rgba(12, 68, 204, 0.1)',
    };
    const PreviousBtn = (props) => {
        // console.log(props);
        const { className, onClick } = props;
        return (

            < div className={className} onClick={onClick}>
                <div className=' bg-[#F0F9FF] rounded-[20px] hover:opacity-70 flex justify-center items-center w-[70px] h-[60px] md:w-[110px] md:h-[60px] lg:w-[110px] lg:h-[60px] 2xl:w-[110px] 2xl:h-[60px]'>
                    <span className='hover:opacity-70  text-black text-3xl'><HiArrowLongLeft /></span>
                </div>
            </div >

        );
    };
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <div className=' bg-[#F0F9FF] rounded-[20px] hover:opacity-70 flex justify-center items-center w-[70px] h-[60px] md:w-[110px] md:h-[60px] lg:w-[110px] lg:h-[60px] 2xl:w-[110px] 2xl:h-[60px]'>
                    <span className='hover:opacity-70 lg:block text-black text-3xl'><HiArrowLongRight /></span>
                </div>
            </div>
        );
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=' bg-white pt-[100px]'>
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div className=' md:text-left lg:text-left xl:text-left 2xl:text-left text-center ml-4'>
                    <Title>Trusted by the best <br /> in the business</Title>
                </div>
                <Slider {...settings} >
                    {
                        personData.map(item => <div className=' pt-36 pb-10 md:py-20 lg:py-20 xl:py-20 2xl:py-20' key={item.id}>
                            <div class="bg-base-100 relative rounded-[6px]" style={mystyle}>
                                <div className=' absolute top-[-50px] left-[30px]'>
                                    <img src={item.Img} alt='img' />
                                </div>
                                <div class="card-body text-left">
                                    <p className=' text-justify font-OpenSans font-normal text-accent leading-[28px] mt-9'>{item.title}</p>
                                    <div className=' mt-9'>
                                        <h5 className=' font-bold font-Manrope text-secondary'>{item.name.personName}</h5>
                                        <p className='font-OpenSans font-normal text-accent leading-[24px]'>{item.name.personTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </Slider>
            </div>
            <CompanyOverviewSection></CompanyOverviewSection>
        </div>
    );
};

export default ReviewSection;