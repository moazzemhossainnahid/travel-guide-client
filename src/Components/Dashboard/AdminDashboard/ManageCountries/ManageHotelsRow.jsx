import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const ManageHotelsRow = ({ hotel, index, setDeleteHotel, setUpdateHotel }) => {

    const { hotel_name, image, rooms, location } = hotel;

    // console.log(hotel);

    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                {index + 1}
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Banner</span>
                <img src={image} alt="" className="w-12 h-12 rounded-full p-1" />
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                {hotel_name} <br />
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Rooms</span>
                {rooms?.length}
            </td>
            <td className="w-full lg:w-auto font-bold text-gray-700 text-sm text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Location</span>
                {location}
            </td>
            <td className="w-full lg:w-auto text-xs text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <div className="flex justify-center pb-1 items-center gap-2">
                    <label htmlFor="update-hotel-modal" onClick={() => setUpdateHotel(hotel)} className=" text-black rounded shadow px-2 py-1 cursor-pointer text-xs bg-danger "><FaPen className='text-green-700' /></label>
                    <label htmlFor="delete-hotel-modal" onClick={() => setDeleteHotel(hotel)} className=" text-black rounded shadow px-2 py-1 cursor-pointer text-xs bg-danger "><FaTrash className='text-red-700' /></label>
                </div>

            </td>
        </tr>
    );
};

export default ManageHotelsRow;