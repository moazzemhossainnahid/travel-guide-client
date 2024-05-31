import React from 'react';

const ViewVisaApplicationsModal = ({ booked }) => {
    const { name, phone, address, email, country, dob, maritalStatus, nationality, nidNo, passportNo, visaDuration, visaPurpose, _id } = booked;

    return (
        <div>
            <input type="checkbox" id="view-jobapplication-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="view-jobapplication-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full flex flex-col md:flex-row gap-5">
                            <div className="">
                                <h3 className="text-lg font-bold italic underline">Visa Information:</h3>
                                <div className="py-3 space-y-3">
                                    <h3 className="text-2xl font-bold">Country: <span className="text-red-500">{country}</span></h3>
                                    <h3 className="text-xl font-semibold">visaPurpose: {visaPurpose}</h3>
                                    <h3 className="text-md font-normal">visaDuration: {visaDuration}</h3>
                                    <h3 className="text-md font-normal">nidNo: {nidNo}</h3>
                                    <h3 className="text-md font-normal">passportNo: {passportNo}</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold italic underline">Personal Information:</h3>
                                <div className="py-3 space-y-3">
                                    <h3 className="text-2xl font-bold">{name}</h3>
                                    <h3 className="text-xl font-semibold">{phone}</h3>
                                    <h3 className="text-md font-semibold">{email}</h3>
                                    <h3 className="text-md font-normal">{dob}</h3>
                                    <h3 className="text-md font-normal">{nationality}</h3>
                                    <h3 className="text-md font-normal">{maritalStatus}</h3>
                                    <h3 className="text-md font-normal">{address}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ViewVisaApplicationsModal;