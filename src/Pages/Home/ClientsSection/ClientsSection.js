import React from 'react';
import Icon1 from '../../../Assets/Icon/icon01.png'
import Icon2 from '../../../Assets/Icon/icon02.png'
import Icon3 from '../../../Assets/Icon/icon03.png'
import Title from '../../../Components/Title/Title';
import ClientCard from './ClientCard';
const ClientsSection = () => {
    const clientData = [
        {
            id: 1,
            icon: Icon1,
            name: 'Machine learning',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
        },
        {
            id: 2,
            icon: Icon2,
            name: 'Embed analytics',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
        },
        {
            id: 3,
            icon: Icon3,
            name: 'Access control',
            title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
        }
    ]
    return (
        <div className=' bg-[#F1F6FA] py-[100px]'>
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-9/12 mx-auto'>
                <div className=' mb-[50px]'>
                    <div className='mb-8'>
                        <Title>Why our clients<br /> chosse Ensome?</Title>
                    </div>
                    <p className=' text-xl font-OpenSans font-normal text-justify md:text-center lg:text-center xl:text-center 2xl:text-center text-accent 2xl:leading-[33px] mx-4 md:mx-[50px] 2xl:mx-[300px]'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className=' px-4 md:px-6 lg:px-[18px] xl:px-[25px] 2xl:px-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8'>
                    {
                        clientData.map(client => <ClientCard
                            key={client.id}
                            client={client}
                        ></ClientCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientsSection;