import React from 'react'
import FirstSection from '../components/firstSection/firstSection';
import SecondSection from '../components/secondSection/SecondSection';
import LastSection from '../components/lastSection/lastSection';
import Footer from '../components/footer/footer'


function NtfLandingPage(props) {
    console.log(props);
    return (
        <div>
            <FirstSection />
            <SecondSection />
            <LastSection />
            <Footer />
        </div>
    )
}

export default NtfLandingPage;
