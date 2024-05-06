import React from 'react';
import useTours from '../../Hooks/useTours';
import Loading from '../../Components/Others/Loading';
import ToursCard from '../../Components/Pages/Tours/ToursCard/ToursCard';

const Tours = () => {
    const [tours, loading] = useTours();

    if (loading) {
       return <Loading />
    }


    console.log("tours", tours);

    return (
        <div className='w-full'>
            <div className="w-full py-10 p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    tours?.map(tour => (
                        <div key={tour?._id} className="rounded">
                            <ToursCard data={tour} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tours;