import React from 'react';
import PageTitle from '../../components/others/PageTitle';
import AboutHeader from './AboutHeader';
import HeroAbout from './HeroAbout';
import WhyUs from './WhyUs/WhyUs';
import Partners from './Partners';


const AboutUS = () => {
    return (
        <div className=''>
            
            {/* title */}

            <PageTitle title="About Us"></PageTitle>

            {/* end */}

            <AboutHeader />
            <HeroAbout />
            {/* <Counter/> */}
            <WhyUs />
            <Partners />
            {/* <OurTeam /> */}
        </div>
    );
};

export default AboutUS;