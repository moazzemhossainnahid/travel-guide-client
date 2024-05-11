import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutCourseDetails from './CheckoutDetails';
import CheckoutForm from './CheckoutForm';
import useHotelDetails from '../../Hooks/useHotelDetails';
  
const Checkout = () => {
    const { hotelId, roomId } = useParams();
    const { hotel } = useHotelDetails(hotelId);

    const room = hotel && hotel?.rooms?.find(r => r?._id === roomId);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [entryDate, setEntryDate] = useState(new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10 + 6, 0, 0).toISOString().split('T')[0]);

    const handleEntryDateChange = (event) => {
        const newEntryDate = event.target.value;
        setEntryDate(newEntryDate);

        const nextDay = new Date(newEntryDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setExitDate(nextDay.toISOString().split('T')[0]);
    };

    const [exitDate, setExitDate] = useState(() => {
        const nextDay = new Date(entryDate);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay.toISOString().split('T')[0];
    });

    // const [exitDate, setExitDate] = useState(new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate() + 1, 12 + 6, 0, 0).toISOString().split('T')[0]);

    // const handleExitDateChange = (event) => {
    //   setExitDate(event.target.value);
    // };

    const handleExitDateChange = (event) => {
        const selectedExitDate = event.target.value;

        // Check if the selected exit date is less than the entry date
        if (selectedExitDate < entryDate) {
            // If the selected exit date is less than the entry date,
            // set the exit date to be equal to the entry date
            setExitDate(entryDate);
        } else {
            // If the selected exit date is valid, update the exit date state
            setExitDate(selectedExitDate);
        }
    };

    // Calculate the number of days of stay
    const entry = new Date(entryDate);
    const exit = new Date(exitDate);
    const numberOfDays = Math.ceil((exit - entry) / (1000 * 60 * 60 * 24));


    // console.log("hotel", hotel);
    // console.log("room", room);


    return (
        <div className='bg-white w-full'>
            <div className="bg-white py-5 ">
                <h2 className="md:container sm:px-2 mx-auto text-3xl md:text-4xl pt-7 text-black font-bold font-mono">
                    Checkout
                </h2>
            </div>
            <div className="md:container sm:px-2 mx-auto grid grid-cols-1 md:grid-cols-3 py-5 gap-y-5 md:gap-x-5">
                <CheckoutForm hotel={hotel} room={room} handleEntryDateChange={handleEntryDateChange} handleExitDateChange={handleExitDateChange} entryDate={entryDate} exitDate={exitDate} numberOfDays={numberOfDays} />
                <CheckoutCourseDetails hotel={hotel} room={room} numberOfDays={numberOfDays} />
            </div>
        </div>
    );
};

export default Checkout;