import { useEffect, useState } from 'react';

const useTours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state as true

    useEffect(() => {
        fetch(`https://travel-guide-server-ii.vercel.app/api/v1/tours`, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setTours(data?.data?.result);
            setLoading(false); // Set loading state to false when data is fetched
        }) 
        .catch(error => {
            console.error('Error fetching tours:', error);
            setLoading(false); // Set loading state to false even if there's an error
        });
    }, []);

    return [tours, loading]; // Return countries data and loading state
};

export default useTours;
