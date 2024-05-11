import useTours from './useTours';

const useTourDetails = (id) => {
    const [tours] = useTours();

    // console.log("id", id);
    // console.log("tours", tours);

    const tour = tours && tours?.find(tr => tr?._id === id);

    // console.log("hotel", hotel);

    return {tour};
};
 
export default useTourDetails;
