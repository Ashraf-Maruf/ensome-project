import React from 'react';
const SubscribeSection = () => {
    const mystyle = {
        width: '120px',
        height: '48px'
    }
    return (
        <div className=' bg-primary py-20'>
            <div className='px-4 md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div class="hero-content p-0 2xl:gap-40 flex-col lg:flex-row-reverse">
                    <div>
                        <form className='relative'>
                            <input type="text" placeholder="Your email" class="input font-OpenSans font-semibold text-[14px] leading-[24px] text-secondary bg-[#C9DCEC] focus:outline-none w-80 md:w-[445px] lg:w-[445px] xl:w-[445px] 2xl:w-[445px] 2xl:max-w-2xl" />
                            <button className=' absolute md:top-0 lg:top-0 xl:top-0 2xl:top-0 bg-white rounded-[6px] font-Manrope font-bold text-[16px] leading-[24px] text-black right-0 md:right-0 lg:right-0 xl:right-0 2xl:right-0' style={mystyle}>Send</button>
                        </form>
                    </div>
                    <div className='text-left'>
                        <h3 className='font-Manrope text-3xl leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[38px] xl:leading-[56px] 2xl:leading-[56px] font-extrabold  text-white capitalize'>Subscribe to our newsletter</h3>
                        <p class=" py-8 text-white font-OpenSans 2xl:leading-[33px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SubscribeSection;