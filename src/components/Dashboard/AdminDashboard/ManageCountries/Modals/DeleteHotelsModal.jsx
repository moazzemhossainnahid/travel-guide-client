
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DeleteHotelsModal = ({ deleteHotel, setNumber, number }) => {
    // console.log(deleteHotel);
    const [formattedDate, setFormattedDate] = useState('');
    const { hotel_name, image, location, rooms, description,additional_info,payment_accept,rating,createdAt , _id } = deleteHotel;


    useEffect(() => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(createdAt);
        const formattedDate = date.toLocaleDateString('en-US', options);
        setFormattedDate(formattedDate);
    }, [createdAt]);

    
    const handleDelete = (id) => {
        // send to database
    fetch(`http://localhost:5000/api/v1/countries/hotels/delete/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data?.status === "Success") {
                toast.success("Hotel Delete Successfully");
                setNumber(number + 1);
                window.location.reload();
            } else {
                toast.error("Faild to Delete Hotel");
            }
        });

    }

    return (
        <div>
            <input type="checkbox" id="delete-hotel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-hotel-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Delete Hotel</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-lg">{hotel_name}</h3>
                            <p className='my-4'>location: {location}</p>
                            <p className='my-4'>rooms: {rooms?.length}</p>
                            <p className='my-4'>Listed: {formattedDate}</p>
                            <p className='my-4'>Description: {description?.slice(0,150)}</p>
                        </div>
                        <div className="w-full md:w-1/5 order-1 md:order-2">
                            <img src={image} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="delete-hotel-modal" onClick={() => handleDelete(_id)} className="btn bg-gray-700 text-white">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteHotelsModal;