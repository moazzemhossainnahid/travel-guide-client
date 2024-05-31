import React from 'react';

const ViewBookedFlightsModal = ({ booked }) => {
    const { name, phone, address, email, fromAirport, toAirport, travelerClass, journeyDate, numTravelers, _id } = booked;

    return (
        <div>
            <input type="checkbox" id="view-jobapplication-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="view-jobapplication-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="">
                            <h3 className="text-lg font-bold italic underline">Booking's Information:</h3>
                            <div className="py-3 space-y-3">
                                <h3 className="text-xl font-semibold">From: <span className="font-normal">{fromAirport}</span></h3>
                                <h3 className="text-xl font-semibold">To: <span className="font-normal">{toAirport}</span></h3>
                                <h3 className="text-md font-normal">journeyDate: {journeyDate}</h3>
                                <h3 className="text-md font-normal">Travelers: {numTravelers}</h3>
                                <h3 className="text-md font-normal">Class: {travelerClass}</h3>
                            </div>
                            <h3 className="text-lg font-bold italic underline">User's Information:</h3>
                            <div className="py-3 space-y-3">
                                <h3 className="text-2xl font-bold">{name}</h3>
                                <h3 className="text-xl font-semibold">{phone}</h3>
                                <h3 className="text-md font-semibold">{email}</h3>
                                <h3 className="text-md font-normal">{address}</h3>
                                {/* <h3 className="text-md font-normal">{message}</h3> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ViewBookedFlightsModal;