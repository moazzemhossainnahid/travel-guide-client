import React from 'react';
import { useParams } from 'react-router-dom';
import useHotelDetails from '../../../Hooks/useHotelDetails';
import { FaLocationDot } from 'react-icons/fa6';

const HotelDetails = () => {
    const { id } = useParams();
    const { hotel } = useHotelDetails(id);

    console.log(hotel);
    return (
        <div className='w-full py-7 px-3'>
            <h3 className="text-3xl md:text-5xl font-bold">{hotel?.hotel_name}</h3>
            <p className="pt-3 flex gap-2 items-center font-semibold"> <FaLocationDot className='text-2xl' /> {hotel?.location} </p>
            <div className="py-7">
                <img src={hotel?.image} alt="hotel_image" className="rounded-xl h-96" />
            </div>
            <div className="">
                <h3 className="text-3xl md:text-5xl font-bold">{hotel?.hotel_name}</h3>
                <div className="flex items-center gap-3 pt-3">
                    <div className="rating">
                        {

                            Math.ceil(hotel?.rating?.total_rating / hotel?.rating?.total_people) === 1 &&
                            <div className="rating cursor-default flex gap-1">
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" checked />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                            </div>

                        }
                        {

                            Math.ceil(hotel?.rating?.total_rating / hotel?.rating?.total_people) === 2 &&
                            <div className="rating cursor-default flex gap-1">
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" checked />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                            </div>

                        }
                        {

                            Math.ceil(hotel?.rating?.total_rating / hotel?.rating?.total_people) === 3 &&
                            <div className="rating cursor-default flex gap-1">
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" checked />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                            </div>

                        }
                        {

                            Math.ceil(hotel?.rating?.total_rating / hotel?.rating?.total_people) === 4 &&
                            <div className="rating cursor-default flex gap-1">
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" checked />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-gray-300" />
                            </div>

                        }
                        {

                            Math.ceil(hotel?.rating?.total_rating / hotel?.rating?.total_people) === 5 &&
                            <div className="rating cursor-default flex gap-1">
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" />
                                <input name="rating-1" className="mask mask-star w-4 md:w-5  bg-yellow-500" checked />
                            </div>

                        }
                    </div>
                </div>

                <p className="pt-3 flex gap-2 text-xl items-center font-semibold"> <FaLocationDot className='text-2xl' /> {hotel?.location} </p>

            </div>
            <div className='overflow-hidden p-5 my-10'>
                <iframe title='map' className='w-full lg:w-[95vw] h-[300px] mx-auto rounded-md' id="gmap_canvas" src={`https://maps.google.com/maps?q=%20${hotel?.hotel_name}%20%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
    );
};

export default HotelDetails;