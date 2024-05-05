import React from 'react';
import { Fade } from 'react-reveal';

// import required modules
import HotelSlider from './HotelSlider';
import useHotels from '../../../../Hooks/useHotels';

const HomeHotels = () => {
    const [hotels] = useHotels("Bangladesh");

    // console.log("hotels", hotels);


    return (
        <div className="bg-[#F8FAFF] py-16">
            <Fade right>
                <div className="container mx-auto pl-4 md:pl-7 lg:pl-8 mb-3 md:mb-4 lg:mb-5">
                    <h5 className="text-lg">Special Offers</h5>
                    <h2 className="text-3xl lg:py-3">
                        <span className="font-bold">Popular</span> Hotels in Bangladesh
                    </h2>
                </div>
            </Fade>

            <Fade left>
                <div className="px-0 md:px-5 lg:px-8">
                    {hotels?.length && <HotelSlider data={hotels} />}
                </div>
            </Fade>
        </div>
    );
};

export default HomeHotels;