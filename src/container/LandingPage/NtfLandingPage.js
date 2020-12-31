import React from 'react'
import FirstSection from '../../components/NetflixLandingPage/firstSection/firstSection';
import SecondSection from '../../components/NetflixLandingPage/secondSection/SecondSection';
import LastSection from '../../components/NetflixLandingPage/lastSection/lastSection';
import Footer from '../../components/NetflixLandingPage/footer/footer';
import {withRouter} from 'react-router-dom';

function NtfLandingPage(props) {
    return (
        <div>
            <FirstSection {...props}/>
            <SecondSection />
            <LastSection />
            <Footer />
        </div>
    )
}

export default withRouter(NtfLandingPage);
