import { useEffect, useState } from 'react';

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state as true

    useEffect(() => {
        fetch(`https://travel-guide-server-ii.vercel.app/api/v1/countries`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setCountries(data?.data?.result);
            setLoading(false); // Set loading state to false when data is fetched
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
            setLoading(false); // Set loading state to false even if there's an error
        });
    }, []);

    return [countries, loading]; // Return countries data and loading state
};

export default useCountries;
