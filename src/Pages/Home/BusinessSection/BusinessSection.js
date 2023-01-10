import React from 'react';
import BusinessImg from '../../../Assets/business.png'
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import SolutionsSection from '../SolutionsSection/SolutionsSection';
const BusinessSection = () => {
    return (
        <div className=' bg-white 2xl:overflow-hidden py-20'>
            <div class="hero">
                <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                    <div class="hero-content 2xl:p-0  flex-col lg:flex-row-reverse">
                        <div className=' relative lg:left-14 xl:left-[185px] 2xl:-top-0 2xl:left-[190px]'>
                            <img src={BusinessImg} class="lg:max-w-md xl:max-w-xl 2xl:max-w-xl" alt='img' />
                        </div>
                        <div className='text-left 2xl:pt-[75px]'>
                            <Title>The newest   analytics platform</Title>
                            <p class=" py-8 text-accent 2xl:leading-[33px] text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div>
                                <Button>Learn more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SolutionsSection></SolutionsSection>
            </div>
        </div>
    );
};

export default BusinessSection;