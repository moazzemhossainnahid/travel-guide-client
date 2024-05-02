import React from 'react';
import PageTitle from '../../Components/Others/PageTitle';
import AboutHeader from '../../Components/Pages/AboutUS/AboutHeader';
import HeroAbout from '../../Components/Pages/AboutUS/HeroAbout';
import Partners from '../../Components/Pages/AboutUS/Partners';
import WhyUs from '../../Components/Pages/AboutUS/WhyUs/WhyUs';



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