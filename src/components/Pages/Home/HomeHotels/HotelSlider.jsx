import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot } from 'react-icons/fa6';



const HotelSlider = ({data}) => {
    const navigate = useNavigate();

    return (
        <div className="py-10 px-5 w-full mx-auto">
        <>
            <Swiper
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={30}
                className={`mySwiper w-full mx-auto`}
                breakpoints={{
                    320: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    480: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    576: {
                        // width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                    992: {
                        // width: 768,
                        slidesPerView: 4,
                    },
                }}

            >
                {
                    data?.map(data => (
                        <SwiperSlide key={data}>
                            <div className="w-full h-full mx-auto group duration-200 overflow-hidden">
                                <div className="w-full h-52 relative overflow-hidden">
                                    {/* <div className="absolute top-1 right-1 z-10">
                                        {data?.badge === "Vegan" && <h3 className="text-md font-sans bg-green-500 px-2"> <FontAwesomeIcon icon={faLeaf} /> {data?.badge}</h3>}
                                        {data?.badge === "Hot" && <h3 className="text-md font-sans bg-red-500 px-2"> <FontAwesomeIcon icon={faFireAlt} /> {data?.badge}</h3>}
                                        {data?.badge === "Non Veg" && <h3 className="text-md font-sans bg-yellow-500 px-2"> <FontAwesomeIcon icon={faBowlFood} /> {data?.badge}</h3>}
                                    </div> */}
                                    <img src={data?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 duration-200 " />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between bg-gray-200 items-center text-start h-16 gap-2 pl-2">
                                        <h1 className="font-bold text-md">{data?.hotel_name}</h1>
                                    </div>
                                        <div className="flex items-center gap-2">
                                            <div className="rating">
                                                {

                                                    Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 1 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 2 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 3 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 4 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                    </div>

                                                }
                                                {

                                                    Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 5 &&
                                                    <div className="rating">
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                        <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                    </div>

                                                }
                                            </div>
                                        </div>

                                    <div className="text-xs h-10 text-justify flex gap-2 items-start pb-3"><FaLocationDot className='text-xl'/> <p className="">{data?.location}</p></div>

                                </div>
                                <div className="">
                                    <button onClick={() => navigate(`/hotels/${data?._id}`)} className='text-xl w-full font-semibold bg-primary text-white px-4 py-2'>See Details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    </div>

    );
};

export default HotelSlider;