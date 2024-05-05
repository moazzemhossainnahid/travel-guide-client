import React from 'react';
import useHotels from './useHotels';

const useHotelDetails = (id) => {
    const [hotels] = useHotels("Bangladesh");

    // console.log("id", id);
    // console.log("hotels", hotels);

    const hotel = hotels && hotels?.find(htl => htl?._id === id);

    // console.log("hotel", hotel);

    return {hotel};
};

export default useHotelDetails;
