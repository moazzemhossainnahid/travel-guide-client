import React from 'react';
import { Fade } from 'react-reveal';
import useCountries from '../../../../Hooks/useCountries';

// import required modules
import HotelSlider from './HotelSlider';

const HomeHotels = () => {
    const [countries] = useCountries();


    console.log("countries", countries);

    const bd = countries?.find(country => country?.country_name === 'Bangladesh');

    const bdHotels = bd && bd?.locations?.flatMap(location => location?.hotels)

    console.log("bdHotels", bdHotels);


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
                    {bdHotels?.length && <HotelSlider data={bdHotels} />}
                </div>
            </Fade>
        </div>
    );
};

export default HomeHotels;