import React from 'react';
import useCountries from '../../Hooks/useCountries';

const Tours = () => {
    const [countries] = useCountries();

    console.log("countries", countries);

    

    return (
        <div>
            
        </div>
    );
};

export default Tours;