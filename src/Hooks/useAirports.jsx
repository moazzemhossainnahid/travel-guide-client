import { useEffect, useState } from 'react';

const useAirports = () => {
    const [airports, setAirports] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state as true

    useEffect(() => {
        fetch(`airportData.json`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setAirports(data);
            setLoading(false); // Set loading state to false when data is fetched
        }) 
        .catch(error => {
            console.error('Error fetching tours:', error);
            setLoading(false); // Set loading state to false even if there's an error
        });
    }, []);

    return [airports, loading]; // Return countries data and loading state
};

export default useAirports;
