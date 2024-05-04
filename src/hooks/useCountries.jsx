import { useEffect, useState } from 'react';


const useCountries = () => {
    const [countries, setCountries] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/countries`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setCountries(data?.data?.result))
    }, []);

    // console.log(profile);

    return [countries];
};

export default useCountries;
