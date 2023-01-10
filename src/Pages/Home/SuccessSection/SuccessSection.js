import React from 'react';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import SuccessSectionCard from './SuccessSectionCard';

const SuccessSection = () => {
    const successData = [
        {
            id: 1,
            date: "22 June 2020",
            name: 'Sed ut perspiciatis unde omnis at vero blanditils',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'
        },
        {
            id: 2,
            date: "22 June 2020",
            name: 'Sed ut perspiciatis unde omnis at vero blanditils',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'
        },
        {
            id: 3,
            date: "22 June 2020",
            name: 'Sed ut perspiciatis unde omnis at vero blanditils',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'
        }
    ]
    return (
        <div className=' bg-[#F1F6FA] py-[100px]'>
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div className=' mb-[50px]'>
                    <div className='mb-8'>
                        <Title>Glad to help your success</Title>
                    </div>
                </div>
                <div className=' px-4 md:px-6 lg:px-[18px] xl:px-[25px] 2xl:px-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8'>
                    {
                        successData.map(success => <SuccessSectionCard
                            key={success.id}
                            success={success}
                        ></SuccessSectionCard>)
                    }
                </div>
                <div className=' mt-12 px-4'>
                    <Button>Learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;