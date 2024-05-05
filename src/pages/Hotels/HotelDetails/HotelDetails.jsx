import React from 'react';
import { useParams } from 'react-router-dom';
import useHotelDetails from '../../../Hooks/useHotelDetails';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

const HotelDetails = () => {
    const { id } = useParams();
    const { hotel } = useHotelDetails(id);

    console.log(hotel);
    return (
        <div className='w-full py-7 px-3'>
            <h3 className="text-3xl md:text-5xl font-bold uppercase">{hotel?.hotel_name}</h3>
            <p className="pt-3 flex gap-2 items-center font-semibold"> <FaLocationDot className='text-2xl' /> {hotel?.location} </p>
            <div className="py-7 flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="w-full h-96">
                    <img src={hotel?.image} alt="hotel_image" className="rounded-xl h-full" />
                </div>
                <div className="w-full h-96 grid grid-cols-2 items-center justify-center gap-3">
                    <img src={`https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcLK2zvqYu7SQFFOLep/AnjzvHum1pSdfWYcCEAHilkZUD00Yfpcvp/xci6Z3AnHIvw==`} alt="hotel_image" className="rounded-xl h-full" />
                    <img src={`https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcCEFubi9rHouwRuZp4uQi20xPSqh//CKB6j6ZURu8D8fqFqKTFqxbCSn9ubhYcckOA==`} alt="hotel_image" className="rounded-xl h-full" />
                    <img src={`https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcIWWBKLst4Qwe19fm/I1EZ791v7mdSo0UEvfVhe26qDYgyNyyukWsiudV1dv059kdQ==`} alt="hotel_image" className="rounded-xl h-full" />
                    <img src={`https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcHZltjsvNi1VIP0xloJrDTOYrBlObCk+APQkvGN34vAfOlYpCEp1vdb39WExIyOnxw==`} alt="hotel_image" className="rounded-xl h-full" />

                </div>
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
                    <p className="font-bold text-2xl">({(hotel?.rating?.total_rating / hotel?.rating?.total_people).toFixed(2)}/5)</p>
                </div>

                <p className="pt-3 flex gap-2 text-xl items-center font-semibold"> <FaLocationDot className='text-2xl' /> {hotel?.location} </p>

            </div>
            <div className="py-5">
                <h3 className="text-2xl font-bold">About this hotel</h3>
                <div className="py-5 space-y-3">
                    <h4 className="text-xl font-bold">General</h4>
                    <p className="">{hotel?.description}</p>
                </div>
                <div className="py-5">
                    <h3 className="text-2xl md:text-3xl font-bold">Important - Please Note:</h3>
                    <div className="pt-5">
                        <h3 className="font-bold ">Additional Facts:</h3>
                        <ul className='list-disc'>
                            <li className='flex gap-2 items-center'> <FaCheckCircle className='text-xs' />Check in from: {hotel?.additional_info?.check_in}</li>
                            <li className='flex gap-2 items-center'> <FaCheckCircle className='text-xs' />Check Out until: {hotel?.additional_info?.check_out}</li>
                        </ul>
                    </div>
                    <div className="pt-5">
                        <h3 className="font-bold ">Payment accepted by the property:</h3>
                        <ul className='list-disc'>
                            {
                                hotel?.payment_accept?.map(p => <li className='flex gap-2 items-center'> <FaCheckCircle className='text-xs' /> {p}</li>)
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden p-5 my-10'>
                <iframe title='map' className='w-full lg:w-[95vw] h-[300px] mx-auto rounded-md' id="gmap_canvas" src={`https://maps.google.com/maps?q=%20${hotel?.hotel_name}%20%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
    );
};

export default HotelDetails;