import React from 'react';

const ContactSection = () => {
    const mystyle = {
        boxShadow: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
    };
    return (
        <div class="hero bg-[#F1F6FA] py-20">
            <div className='px-4 md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div class="hero-content p-0 gap-20 flex-col lg:flex-row-reverse">
                    <div class="card px-5 flex-shrink-0 w-full rounded-[6px] max-w-md shadow-2xl bg-base-100" style={mystyle}>
                        <div class="card-body py-12">
                            <form>
                                <h3 className=' text-left mb-8 text-[30px] font-Manrope font-extrabold leading-[40px] text-secondary'>Contact Us</h3>
                                <label class="label  pl-0">
                                    <span class=" font-OpenSans font-semibold text-[12px] leading-[24px] text-accent">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="focus:outline-none border-spacing-0 border-b-[1px] border-secondary py-2 text-secondary mb-2 font-OpenSans font-semibold text-[14px] leading-[24px]   w-full max-w-lg" />
                                <label class="label pl-0">
                                    <span class=" font-OpenSans font-semibold text-[12px] leading-[24px] text-accent">Email</span>
                                </label>
                                <input type="text" placeholder="Email" class="focus:outline-none border-spacing-0 border-b-[1px] border-secondary py-2 text-secondary mb-2 font-OpenSans font-semibold text-[14px] leading-[24px]   w-full max-w-lg" />
                                <label class="label pl-0">
                                    <span class=" font-OpenSans font-semibold text-[12px] leading-[24px] text-accent">Theme</span>
                                </label>
                                <input type="text" placeholder="Theme" class="focus:outline-none border-spacing-0 border-b-[1px] border-secondary py-2 text-secondary mb-2 font-OpenSans font-semibold text-[14px] leading-[24px]   w-full max-w-lg" />
                                <label class="label pl-0">
                                    <span class=" font-OpenSans font-semibold text-[12px] leading-[24px] text-accent">Message</span>
                                </label>
                                <input type="text" placeholder="Message" class="focus:outline-none border-spacing-0 border-b-[1px] border-secondary py-2 text-secondary mb-2 font-OpenSans font-semibold text-[14px] leading-[24px]   w-full max-w-lg" />
                                <div className=' flex justify-end mt-20'>
                                    <button class="btn btn-primary text-white w-28 max-w-lg">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='text-left 2xl:pt-[75px] w-full 2xl:max-w-[740px]'>
                        <h3 className='font-Manrope text-3xl leading-[40px] md:text-5xl md:leading-[70px]  lg:text-4xl lg:leading-[50px]  2xl:text-[38px] xl:leading-[56px] 2xl:leading-[56px] font-extrabold text-secondary capitalize'>Left questions? Contacts us now for a free consultation and free trial! </h3>
                        <p class=" py-8 text-accent font-OpenSans 2xl:leading-[33px]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                        <div className=' mb-6 mt-8'>
                            <p className=' font-normal text-accent font-OpenSans'>Email address</p>
                            <p className=' font-bold text-secondary font-OpenSans'>ensome@info.co.us</p>
                        </div>
                        <div className='mb-6'>
                            <p className=' font-normal text-accent font-OpenSans'>Phone number</p>
                            <p className=' font-bold text-secondary font-OpenSans'>+1601-201-5580</p>
                        </div>
                        <div>
                            <p className=' font-normal text-accent font-OpenSans'>Address</p>
                            <p className=' font-bold text-secondary font-OpenSans'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;