import React from "react";
import { Bounce, Flip, Roll, Slide, Zoom } from "react-reveal";
import LightSpeed from "react-reveal/LightSpeed";

const HeroAbout = () => {
  
  return (
    <div className="py-10 lg:px-10 w-full overflow-hidden mx-auto text-center bg-gray-100">
      <Zoom left>
        <h3 className="font-semibold lg:text-xl">SIMPLY AMAZING PLACES</h3>
      </Zoom>
      <Bounce right>
        <h3 className="font-bold text-4xl lg:text-5xl py-3">
          A few words about us
        </h3>
      </Bounce>
      <div className="hero py-24">
        <div
          className="hero-content flex flex-col lg:flex-row w-full mx-auto
         lg:gap-5 text-left"
        >
          <div className="w-full lg:w-2/5 mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold font-serif py-5">
              <Slide bottom>Explore All Corners of The World With Us</Slide>
            </h1>
            <Roll left>
              <p className="py-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </Roll>
            <p className="py-2">
              <Roll right>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Roll>
            </p>
            <button className="btn btn-primary">
              <Flip left>Read More</Flip>
            </button>
          </div>
          <LightSpeed left>
            <div className="flex gap-5 w-full lg:w-3/5 object-cover">
              <img
                src="https://preview.colorlib.com/theme/passport/images/about_1.jpg.webp"
                alt=""
                className="max-w-sm w-48 lg:w-1/2 md:w-fit mx-auto object-cover rounded-lg shadow-2xl"
              />
              <img
                src="https://preview.colorlib.com/theme/passport/images/about_2.jpg.webp"
                alt=""
                className="max-w-sm w-48 lg:w-1/2 hidden md:block md:w-fit mx-auto object-cover rounded-lg shadow-2xl lg:mt-16 lg:-mb-16"
              />
            </div> 
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
