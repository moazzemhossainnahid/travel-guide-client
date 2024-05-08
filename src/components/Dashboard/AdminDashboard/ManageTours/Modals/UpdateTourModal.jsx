import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateTourModal = ({ updateTour, setNumber, number }) => {
    const { name, country, duration, price, image, departureDate, returnDate, description, _id } = updateTour && updateTour;
    // console.log(updateTour);
    const { register, handleSubmit, reset } = useForm();

    const handleUpdateTour = async (data) => {
        const tour = {
            name: data.name,
            country: data.country,
            duration: data.duration,
            price: data.price,
            image: data.image,
            departureDate: data.departureDate,
            returnDate: data.returnDate,
            description: data.description,
        };

        // send to database
        fetch(`http://localhost:5000/api/v1/tours/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tour),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === "Successful") {
                    toast.success("Tour Update Successfully");
                    reset();
                    setNumber(number + 1);
                    closeModal();
                } else {
                    toast.error("Failed to Update Tour");
                }
            });
    };

    const closeModal = () => {
        window.location.reload();
    };


    return (
        <div>
            <input type="checkbox" id="update-tour-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-tour-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>
                        ✕
                    </label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Update Tour</h1>
                    <div className="w-full gap-3">
                        <form onSubmit={handleSubmit(handleUpdateTour)} className="py-3">
                            <input
                                {...register("name")}
                                defaultValue={name}
                                type="text"
                                placeholder="Enter Tour Package Name"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <div className="flex flex-col md:flex-row justify-between items-center md:gap-3">
                                <input
                                    {...register("country")}
                                    defaultValue={country}
                                    type="text"
                                    required
                                    placeholder="Enter Tour Country"
                                    className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                                />
                                <input
                                    {...register("duration")}
                                    defaultValue={duration}
                                    type="text"
                                    required
                                    placeholder="Enter Tour Duration"
                                    className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                                />
                            </div>
                            <input
                                {...register("price")}
                                defaultValue={price}
                                type="text"
                                required
                                placeholder="Enter Tour Price"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <input
                                {...register("image")}
                                defaultValue={image}
                                type="text"
                                required
                                placeholder="Enter Tour Image URL"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <input
                                {...register("departureDate")}
                                defaultValue={departureDate?.slice(0, 10)}
                                type="date"
                                required
                                placeholder="Enter Tour departureDate"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <input
                                {...register("returnDate")}
                                value={returnDate?.slice(0, 10)}
                                type="date"
                                required
                                placeholder="Enter Tour returnDate"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <textarea
                                {...register("description")}
                                defaultValue={description}
                                type="text"
                                required
                                placeholder="Enter Tour Description"
                                className="input bg-slate-100 my-2 input-ghost w-full h-20 block mx-auto"
                            />
                            <input
                                className="btn px-7 btn-primary mt-5 block mx-auto"
                                type="submit"
                                value="Update Tour"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTourModal;
