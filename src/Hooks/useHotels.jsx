import useCountries from './useCountries';

const useHotels = (countryName) => {
    const [countries] = useCountries();

    const country = countries?.find(cnt => cnt?.country_name === countryName);

    const hotels = country && country?.locations?.flatMap(location => location?.hotels);

    return [hotels];
};
 
export default useHotels;
