import React from 'react';
import BusinessSection from '../BusinessSection/BusinessSection';
import ClientsSection from '../ClientsSection/ClientsSection';
import ContactSection from '../ContactSection/ContactSection';
import HeaderSection from '../HeaderSection/HeaderSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import SubscribeSection from '../SubscribeSection/SubscribeSection';
import SuccessSection from '../SuccessSection/SuccessSection';

const Home = () => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <ClientsSection></ClientsSection>
            <BusinessSection></BusinessSection>
            <SuccessSection></SuccessSection>
            <ReviewSection></ReviewSection>
            <ContactSection></ContactSection>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;