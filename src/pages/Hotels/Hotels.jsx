import React from 'react';
import useHotels from '../../Hooks/useHotels';
import HotelsCard from '../../Components/Pages/Hotels/HotelsCard/HotelsCard';

const Hotels = () => {
    const [hotels] = useHotels("Bangladesh");

    return (
        <div className='w-full'>
            <div className="w-full py-10 p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    hotels?.map(hotel => (
                        <div key={hotel?._id} className="rounded">
                            <HotelsCard data={hotel} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hotels;