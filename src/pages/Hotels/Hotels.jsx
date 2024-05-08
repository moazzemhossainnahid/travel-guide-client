import React, { useState } from 'react';
import useHotels from '../../Hooks/useHotels';
import HotelsCard from '../../Components/Pages/Hotels/HotelsCard/HotelsCard';
import useCountries from '../../Hooks/useCountries';

const Hotels = () => {

    const [selectCountry, setSelectCountry] = useState("");
    const [selectLocation, setSelectLocation] = useState("");
    const [countries] = useCountries();

    const country = countries && countries?.find((c) => c?.country_name === selectCountry);
    const location = country && country?.locations?.find((l) => l?.location_name === selectLocation);
    const hotels = location && location?.hotels;

    console.log("countries", countries);
    console.log("location", location);
    console.log("hotels", hotels);

    const handleCountryChange = (event) => {
        const countryName = event.target.value;
        setSelectCountry(countryName);
        setSelectLocation('');
    };

    const handleLocationChange = (event) => {
        const locationName = event.target.value;
        setSelectLocation(locationName);
    };


    return (
        <div className='w-full min-h-screen'>
            <div className="w-full py-10 p-3 grid grid-cols-1 gap-5">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="busSelect" className="mr-2 font-bold">Select Country:</label>
                    <select
                        id="busSelect"
                        value={selectCountry}
                        onChange={handleCountryChange}
                        className="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded  focus:border-secondary  focus:outline-none"
                    >
                        <option value="">Select a Country</option>
                        {countries?.map((country) => (
                            <option key={country?.country_name} value={country?.country_name}>{country?.country_name}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="routeSelect" className="mr-2 font-bold">Select Location:</label>
                    {selectCountry ? (
                        <select
                            id="routeSelect"
                            value={selectLocation}
                            onChange={handleLocationChange}
                            className="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded  focus:border-secondary  focus:outline-none"
                        >
                            <option value="">Select a Location</option>
                            {country?.locations?.map((location) => (
                                <option key={location?.location_name} value={location?.location_name}>{location?.location_name}</option>
                            ))}
                        </select>
                    ) : (
                        <select
                            name="routeSelect"
                            id="routeSelect"
                            className="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded  focus:border-secondary  focus:outline-none"
                            disabled // Disable the routeSelect dropdown if no category is selected
                        >
                            <option value="">Select Country First</option>
                        </select>
                    )}

                </div>


            </div>
            {
                selectCountry && selectLocation ?
                    (<div className="w-full py-10 p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {hotels && hotels?.map(hotel => (
                            <div key={hotel?._id} className="rounded">
                                <HotelsCard data={hotel} />
                            </div>
                        ))
                        }
                    </div>)
                    : (
                        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-5">
                            <img src="https://cdn2.iconfinder.com/data/icons/travel-essentials-1/64/_Select_Country-512.png" alt="" className="w-1/3" />
                            <h3 className="text-2xl md:text-4xl font-bold p-5 md:w-2/5">Please Select Country And Location First</h3>
                        </div>
                    )
            }
        </div>
    );
};

export default Hotels;