import React, { useState } from 'react';
import PageTitle from '../../Components/Others/PageTitle';
import HomeHeader from '../../Components/Pages/Home/HomeHeader';
import TopCard from '../../Components/Pages/Home/TopCard';
import Counter from '../../Components/Pages/Home/Counter/Counter';
import Testimonials from '../../Components/Pages/Home/Testimonials/Testimonials';
import NewsLetter from '../../Components/Pages/Home/NewsLetter';
import HomeHotels from '../../Components/Pages/Home/HomeHotels/HomeHotels';

const Home = () => {
    const [allTours, setTour_data] = useState([]);
    const [allHotel, setHotel_data] = useState([]);


    return (
        <div className='w-full'>
            <PageTitle title="Home"></PageTitle>
            <HomeHeader allTours={allTours} allHotel={allHotel} />
            <TopCard />
            <HomeHotels/>
            <Counter />
            <Testimonials />
            <NewsLetter/>

        </div>
    );
};

export default Home;