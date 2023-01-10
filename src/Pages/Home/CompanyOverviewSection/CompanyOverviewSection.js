import React from 'react';

const CompanyOverviewSection = () => {
    return (
        <div className=' bg-primary'>
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div className=' text-center py-10 px-6 md:px-12 lg:px-12 xl:px-12 2xl:px-9 flex-row lg:flex xl:flex  2xl:flex md:justify-between lg:justify-between  xl:justify-between 2xl:justify-between '>
                    <div className=' text-white'>
                        <h2 className='font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[56px]  xl:leading-[56px] 2xl:leading-[56px] font-extrabold text-white capitalize'>1830+</h2>
                        <p className=' mt-5 font-OpenSans font-bold leading-[28px] '>Project executed</p>
                    </div>
                    <div class="divider opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                    <div className=' text-white'>
                        <h2 className='font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[56px]  xl:leading-[56px] 2xl:leading-[56px] font-extrabold text-white capitalize'>220</h2>
                        <p className=' mt-5 font-OpenSans font-bold leading-[28px] '>Data analytics</p>
                    </div>
                    <div class="divider opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                    <div className=' text-white'>
                        <h2 className='font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[56px]  xl:leading-[56px] 2xl:leading-[56px] font-extrabold text-white capitalize'>390</h2>
                        <p className=' mt-5 font-OpenSans font-bold leading-[28px] '>Data management</p>
                    </div>
                    <div class="divider opacity-20 before:bg-[#F1F6FA] after:bg-[#F1F6FA] lg:divider-horizontal xl:divider-horizontal 2xl:divider-horizontal"></div>
                    <div className=' text-white'>
                        <h2 className='font-Manrope text-3xl  leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[56px]  xl:leading-[56px] 2xl:leading-[56px] font-extrabold text-white capitalize'>834+</h2>
                        <p className=' mt-5 font-OpenSans font-bold leading-[28px] '>Satisfied customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverviewSection;