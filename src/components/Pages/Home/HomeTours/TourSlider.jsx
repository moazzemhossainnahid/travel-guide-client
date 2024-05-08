import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaClockRotateLeft, FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { FaTimesCircle } from 'react-icons/fa';



const TourSlider = ({ data }) => {
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
                                            <h1 className="font-bold text-md">{data?.name}</h1>
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="flex items-center gap-1 font-bold">{data?.price}</h3>
                                            <h3 className="flex items-center gap-1"> <FaClockRotateLeft/> {data?.duration}</h3>
                                        </div>

                                        <div className="text-xs h-10 text-justify flex gap-2 items-start pb-3"><FaLocationDot className='text-xl' /> <p className="">{data?.country}</p></div>

                                    </div>
                                    <div className="">
                                        <button onClick={() => navigate(`/tours/${data?._id}`)} className='text-xl w-full font-semibold bg-primary text-white px-4 py-2'>See Details</button>
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

export default TourSlider;