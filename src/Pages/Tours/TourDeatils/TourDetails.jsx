import { useNavigate, useParams } from 'react-router-dom';
import useTourDetails from '../../../Hooks/useTourDetails';
import { useForm } from 'react-hook-form';
import { FaCheckSquare } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TourDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { tour } = useTourDetails(id);
    const { register, handleSubmit, reset } = useForm();

    // console.log("tour", tour); 

    const handleBookingTour = async (data) => {
        const booking = {
          name: data.name,
          tourPlan: tour.name,
          phone: data.phone,
          address: data.address,
          adult: data.adult,
          children: data.children,
        };
        
    // console.log(booking);

    
        // send to database
        fetch(`https://travel-guide-server-ii.vercel.app/api/v1/tour-booking`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(booking),
        })
          .then((res) => res.json())
          .then((data) => {
            //   console.log(data);
            if (data?.status === "Successful") {
              toast.success("Tour Booked Successfully");
              reset();
            } else {
              toast.error("Faild to Booked Tour");
            }
          });
      };

    return (
        <div className="w-full">
            <div className="container py-7 w-full md:w-3/4 mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="blog-goBack w-32 rounded mx-3 justify-start px-5 py-2 flex text-indigo-600 bg-gray-200"
                >
                    <span> &#8592;</span> <span className="pl-2">Go Back</span>
                </button>
                {tour && (
                    <div className="blog-wrap pt-10 p-3">
                        <header>
                            {/* <p className="blog-date pb-5 font-semibold text-gray-500">
                Published {new Date(tour?.createdAt).toLocaleString()}
              </p> */}
                            <h1 className="text-black pb-3 text-2xl md:text-4xl font-bold">
                                {tour?.name}
                            </h1>
                            <div className="w-full flex justify-start">
                                <p className='rounded bg-gradient-to-tr from-primary to-secondary text-white text-xl px-7'>{tour?.country}</p>
                            </div>
                        </header>
                        <img className="py-5 mx-auto" src={tour?.image} alt="cover" />
                        <div className="space-y-4">
                            <h2 className="text-indigo-700 text-xs font-semibold">
                                {tour?.sku?.slice(0, 17)}
                            </h2>
                            <h3 className="text-indigo-700 text-xl font-semibold">
                                <span className="pr-3"> Starting From:</span>
                                {tour?.price}/=
                            </h3>
                            <h3 className="text-indigo-700 text-xl font-semibold">
                                <span className="pr-3"> Tour Duration:</span>
                                {tour?.duration}/=
                            </h3>

                            <div className="w-full space-y-3">
                                <h3 className="bg-gray-300 px-4 md:rounded-l-md">Highlights</h3>
                                <div className='space-y-3'>
                                    {
                                        tour?.highlights?.map(t => <p key={t} className='flex items-center gap-1'> <FaCheckSquare /> {t}</p>)
                                    }
                                </div>
                            </div>
                            <div className="w-full space-y-3">
                                <h3 className="bg-gray-300 px-4 md:rounded-l-md">Included</h3>
                                <div className='space-y-3'>
                                    {
                                        tour?.included?.map(t => <p key={t} className='flex items-center gap-1'> <FaCheckSquare /> {t}</p>)
                                    }
                                </div>
                            </div>
                            <div className="w-full space-y-3">
                                <h3 className="bg-gray-300 px-4 md:rounded-l-md">Not Included</h3>
                                <div className='space-y-3'>
                                    {
                                        tour?.notIncluded?.map(t => <p key={t} className='flex items-center gap-1'> <FaCheckSquare /> {t}</p>)
                                    }
                                </div>
                            </div>
                            <div className="w-full space-y-3"> departureDate: {new Date(tour?.departureDate).toDateString()}</div>
                            <div className="w-full space-y-3"> returnDate: {new Date(tour?.returnDate).toDateString()}</div>
                        </div>
                        <div className="">
                            <p className="blog-desc p-5 md:px-10">{tour?.description}</p>
                        </div>
                        <div className="pt-7">
                            <label
                                htmlFor="bookAppointment"
                                className="w-2/3 md:w-2/5 btn btn-outline btn-primary hover:text-white flex items-center justify-center mx-auto"
                            >
                                Apply for Booking{" "}
                            </label>
                        </div>
                    </div>
                )}
            </div>
            {/* <RelatedServices service={service} /> */}

            {/* <!-- The Book Appointment modal --> */}

            <input type="checkbox" id="bookAppointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  bg-slate-300">
                    <label
                        htmlFor="bookAppointment"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Insert Booking Information For <br /> /{tour?.name}/</h3>
                    <form
                        onSubmit={handleSubmit(handleBookingTour)}
                        action=""
                        className="py-3"
                    >
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Enter Your Name"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                            />
                            <input
                                {...register("phone")}
                                type="text"
                                placeholder="Enter Your Phone"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                            <input
                                {...register("adult")}
                                type="number"
                                placeholder="Enter Number of Adults"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                            />
                            <input
                                {...register("children")}
                                type="number"
                                placeholder="Enter Number of Children"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                {...register("address")}
                                type="text"
                                placeholder="Enter Your Address"
                                className="input bg-slate-100 resize-none my-2 input-ghost w-full h-16 block mx-auto"
                            />
                        </div>
                        <input
                            className="btn px-7 btn-warning my-5 block mx-auto"
                            type="submit"
                            value="Send Data"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;