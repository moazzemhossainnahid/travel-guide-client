import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateHotelsModal = ({ updateHotel }) => {
    const { hotel_name, image, location, rooms, description,additional_info,payment_accept,rating, _id } = updateHotel;

    console.log(updateHotel);

    const { register, handleSubmit, reset } = useForm();

    const imageUrlKey = "e738f1d16de6b265746b7f82cc157644";

    const handleUpdateBlog = async (data) => {


        // if (data?.photoURL[0]) {
        //     const image = data.photoURL[0];
        //     const formData = new FormData();
        //     formData.append("image", image);
        //     const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        //     fetch(url, {
        //         method: "POST",
        //         body: formData,
        //     })
        //         .then((res) => res.json())
        //         .then((result) => {
        //             if (result.success) {
        //                 const img = result.data.url;
        //                 const blog = {
        //                     title: data.title,
        //                     category: data.category,
        //                     description: data.description,
        //                     banner: img,
        //                 };

        //                 console.log(blog);

        //                 // send to database
        //                 fetch(`https://travel-guide-server-ii.vercel.app/api/v1/countries/${_id}`, {
        //                     method: "PATCH",
        //                     headers: {
        //                         "content-type": "application/json",
        //                         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //                     },
        //                     body: JSON.stringify(blog),
        //                 })
        //                     .then((res) => res.json())
        //                     .then((data) => {
        //                         console.log(data);
        //                         if (data?.status === "Successful") {
        //                             toast.success("Hotel Update Successfully");
        //                             reset();
        //                             window.location.reload();
        //                         } else {
        //                             toast.error("Faild to Update Hotel");
        //                         }
        //                     });
        //             }
        //         });
        // } else {
        //     const hotel = {
        //         title: data.title,
        //         category: data.category,
        //         description: data.description,
        //         banner: image,
        //     };


        const hotel = {
            hotel_name:data?.hotel_name,
            location:data?.location,
            description:data?.description,
            image:image,
            rooms:rooms,
            additional_info:additional_info,
            payment_accept:payment_accept,
            rating:rating,



        };

        console.log(hotel);

        // send to database
        fetch(`https://travel-guide-server-ii.vercel.app/api/v1/countries/hotels/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(hotel),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.status === "Success") {
                    toast.success("Hotel Update Successfully");
                    reset();
                    closeModal();
                } else {
                    toast.error("Faild to Update Hotel");
                }
            });


    };

    const closeModal = () => {
        window.location.reload();
    };

    return (
        <div>
            <input type="checkbox" id="update-hotel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-hotel-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>
                        ✕
                    </label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Update Hotel</h1>
                    <div className="w-full gap-3">
                        <form onSubmit={handleSubmit(handleUpdateBlog)} className="py-3">
                            <input
                                {...register("hotel_name")}
                                defaultValue={hotel_name}
                                type="text"
                                required
                                placeholder="Enter Hotel Name"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <input
                                {...register("location")}
                                defaultValue={location}
                                type="text"
                                required
                                placeholder="Enter Hotel Location"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <textarea
                                {...register("description")}
                                defaultValue={description}
                                type="text"
                                required
                                placeholder="Enter Hotel Description"
                                className="input bg-slate-100 my-2 input-ghost w-full h-28 block mx-auto"
                            />
                            {/* <div className="flex justify-between items-center gap-3">
                                <input
                                    {...register("photoURL")}
                                    type="file"
                                    required
                                    placeholder="Enter Your Image"
                                    className="file-input file-input-bordered bg-slate-100 my-2 items-center w-full mx-auto block"
                                />
                                <img src={image} alt="" className="w-16 h-16" />
                            </div> */}
                            <input
                                className="btn px-7 btn-primary mt-5 block mx-auto"
                                type="submit"
                                value="Update Hotel"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateHotelsModal;
