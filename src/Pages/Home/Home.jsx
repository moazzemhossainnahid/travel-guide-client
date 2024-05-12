import React, { useState } from 'react';
import PageTitle from '../../Components/Others/PageTitle';
import HomeHeader from '../../Components/Pages/Home/HomeHeader';
import TopCard from '../../Components/Pages/Home/TopCard';
import Counter from '../../Components/Pages/Home/Counter/Counter';
import Testimonials from '../../Components/Pages/Home/Testimonials/Testimonials';
import NewsLetter from '../../Components/Pages/Home/NewsLetter';
import HomeHotels from '../../Components/Pages/Home/HomeHotels/HomeHotels';
import HomeTours from '../../Components/Pages/Home/HomeTours/HomeTours';
import useTours from '../../Hooks/useTours';
import Loading from '../../Components/Others/Loading';
import useHotels from '../../Hooks/useHotels';
   
const Home = () => {
    const [tours, loading] = useTours();
    const [hotels] = useHotels("Bangladesh");

    if (loading) {
       return <Loading />
    }
   
 
    return (
        <div className='w-full'>
            <PageTitle title="Home"></PageTitle>
            <HomeHeader allTours={tours} allHotel={hotels} />
            <TopCard />
            <HomeHotels/>
            <Counter />
            <HomeTours/>
            <Testimonials />
            <NewsLetter/>

        </div>
    );
};

export default Home;