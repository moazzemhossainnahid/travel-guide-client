import React from 'react';
import { Fade } from 'react-reveal';

// import required modules
import useTours from '../../../../Hooks/useTours';
import TourSlider from './TourSlider';

const HomeTours = () => {
    const [tours] = useTours();

    // console.log("tours", tours);


    return (
        <div className="bg-[#F8FAFF] py-16">
            <Fade right>
                <div className="container mx-auto pl-4 md:pl-7 lg:pl-8 mb-3 md:mb-4 lg:mb-5">
                    <h5 className="text-lg">Special Offers</h5>
                    <h2 className="text-3xl lg:py-3">
                        <span className="font-bold">Top</span> Tour Packages in World
                    </h2>
                </div>
            </Fade>

            <Fade left>
                <div className="px-0 md:px-5 lg:px-8">
                    {tours?.length && <TourSlider data={tours} />}
                </div>
            </Fade>
        </div>
    );
};

export default HomeTours;