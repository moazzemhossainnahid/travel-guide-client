import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import TestimonialSlider from './TestimonialSlider';


const data = [
    {
      id: 1,
      name: "Daren Smith",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "Canada",
      img: "https://i.ibb.co/z5SDymX/pic1.webp"
    },
    {
      id: 2,
      name: "San Francisco",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "Switzerland",
      img: "https://i.ibb.co/q1fy4Yr/pic2.webp"
    },
    {
      id: 3,
      name: "Tiger Sib",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "Australia",
      img: "https://i.ibb.co/xHkZt2v/pic3.webp"
    },
    {
      id: 4,
      name: "Ashraful Islam",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "Bangladesh",
      img: "https://i.ibb.co/w7nSrzs/resize.png"
    },
    {
      id: 5,
      name: "Luxury Kru",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "Italy",
      img: "https://i.ibb.co/xHkZt2v/pic3.webp"
    },
    {
      id: 6,
      name: "Henry Smith",
      description: "Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries",
      area: "London",
      img: "https://i.ibb.co/z5SDymX/pic1.webp"
    }
  ];

const Testimonials = () => {
    const [moreText, setMoreText] = useState(false);


    return (
        <div className="py-16">
        <div className="container px-2 lg:px-8 mx-auto">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center">
            <Fade left>
              <div>
                <h2 className="text-gray-400 text-lg">Best Directory Website</h2>
                <h2 className="py-2 text-4xl">
                  <span className="font-bold">Why</span> Choose Us?
                </h2>
                <div className="max-h-[12rem] overflow-y-auto">
                  <p className="text-gray-400">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                    <br />
                    <br />
                    Even the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life.
                    {moreText ? "" : <span>.....</span>}
                  </p>
                  <br />
                  {moreText ? (
                    <p className="text-gray-400">
                      In a Decentralized E-Commerce, people can buy and sell
                      products in peer to peer form. Users can register and list
                      their products and become a seller or act as a seller. The
                      buyer will be able to see the rates and track their
                      purchases. It is the cost-effective way of trading for both
                      parties as the trade is happening directly between the buyer
                      and the seller. Here the platforms like PoorToRich would
                      ensure the genuinity and smooth transaction of the process
                      by making sure that both the parties trade fairly.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                {moreText ? (
                  <button
                    onClick={() => setMoreText(!moreText)}
                    className="border border-[#33D687] rounded-full py-3 px-5 text-lg font-semibold 
                    text-[#33D687] hover:text-white hover:bg-[#33D687]"
                  >
                    Read less
                  </button>
                ) : (
                  <button
                    onClick={() => setMoreText(!moreText)}
                    className="border border-[#33D687] rounded-full py-3 px-5 text-lg font-semibold text-[#33D687]
                     hover:text-white hover:bg-[#33D687]"
                  >
                    Read more
                  </button>
                )}
              </div>
            </Fade>
            <Fade right>
              <div>
                <h2 className="text-gray-400">Testimony</h2>
                <h2 className="text-3xl lg:text-4xl mb-4 mt-0 lg:mt-2">
                  <span className="font-bold">Our</span> Guests Says
                </h2>
                <div>
                  <TestimonialSlider data={data} />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;