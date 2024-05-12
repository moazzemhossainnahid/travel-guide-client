
import { toast } from 'react-toastify';

const DeleteTourModal = ({ deleteTour, setNumber, number }) => {
    // console.log(deleteTour);
    const { name, country, duration, price, image, departureDate, returnDate, description, _id } = deleteTour && deleteTour;


    const handleDelete = (id) => {
        const url = `http://localhost:5000/api/v1/tours/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    // console.log(data);
                    toast.success(` Tour id (${_id}) has been deleted.`);
                    setNumber(number + 1);
                } else if (data?.status === 'fail') {
                    toast.error(` Somethig Wrong...`);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-tour-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-tour-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Delete Tour</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-lg">{name ? name : "Title Not Found"}</h3>
                            <p className='my-4'>Country: {country}</p>
                            <p className='my-4'>Duration: {duration}</p>
                            <p className='my-4'>departureDate: {departureDate}</p>
                            <p className='my-4'>returnDate: {returnDate}</p>
                        </div>
                        <div className="w-full md:w-1/5 order-1 md:order-2">
                            <img src={image} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="delete-tour-modal" onClick={() => handleDelete(_id)} className="btn bg-gray-700 text-white">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteTourModal;