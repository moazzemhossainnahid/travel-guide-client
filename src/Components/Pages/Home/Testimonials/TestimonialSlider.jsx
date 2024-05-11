import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';


const TestimonialSlider = () => {


    return (

        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md">
                        <div className="columns-1 lg:m-5">
                            <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
                                <img className="rounded-full border-4 border-[#33D687]"
                                    src="https://i.ibb.co/z5SDymX/pic1.webp"
                                    alt="avater"
                                />
                            </div>
                            <div className="flex justify-end  lg:ml-4 -mt-7">
                                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                                    <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
                                </p>
                            </div>
                        </div>
                        <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
                            <div>
                                <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
                                    Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold">Daren Smith</h2>
                                <p className="text-gray-400">Guest from Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md">
                        <div className="columns-1 lg:m-5">
                            <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
                                <img className="rounded-full border-4 border-[#33D687]"
                                    src="https://i.ibb.co/q1fy4Yr/pic2.webp"
                                    alt="avater"
                                />
                            </div>
                            <div className="flex justify-end  lg:ml-4 -mt-7">
                                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                                    <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
                                </p>
                            </div>
                        </div>
                        <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
                            <div>
                                <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
                                    Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold">San Francisco</h2>
                                <p className="text-gray-400">Guest from Switzerland</p>
                            </div>
                        </div>
                    </div>                 
                    </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md">
                        <div className="columns-1 lg:m-5">
                            <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
                                <img className="rounded-full border-4 border-[#33D687]"
                                    src="https://i.ibb.co/xHkZt2v/pic3.webp"
                                    alt="avater"
                                />
                            </div>
                            <div className="flex justify-end  lg:ml-4 -mt-7">
                                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                                    <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
                                </p>
                            </div>
                        </div>
                        <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
                            <div>
                                <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
                                    Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold">Tiger Sib</h2>
                                <p className="text-gray-400">Guest from Australia</p>
                            </div>
                        </div>
                    </div>                 
                    </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md">
                        <div className="columns-1 lg:m-5">
                            <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
                                <img className="rounded-full border-4 border-[#33D687]"
                                    src="https://i.ibb.co/w7nSrzs/resize.png"
                                    alt="avater"
                                />
                            </div>
                            <div className="flex justify-end  lg:ml-4 -mt-7">
                                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                                    <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
                                </p>
                            </div>
                        </div>
                        <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
                            <div>
                                <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
                                    Far far away, behind the word mountains, far from the countries Far far away, behind the word mountains, far from the countries
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold">Henry Smith</h2>
                                <p className="text-gray-400">Guest from London</p>
                            </div>
                        </div>
                    </div>                 
                    </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </>
    );
};

export default TestimonialSlider;
