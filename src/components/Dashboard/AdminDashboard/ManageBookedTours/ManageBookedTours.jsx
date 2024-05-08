import React, { useEffect, useState } from "react";

import ManageBookedToursRow from "./ManageBookedToursRow";
import ViewBookedToursModal from "./Modals/ViewBookedToursModal";

const ManageBookedTours = () => {
  const [tourBooking, setTourBooking] = useState(null);
  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tour-booking", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setTourBooking(data?.data?.result));
  }, []);

  // console.log(tourBooking);

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Booked Tours: {tourBooking?.length}
          </p>
          <table className="border-collapse w-full bg-slate-200">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Index
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Name
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Tour
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Phone
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {tourBooking?.map((booked, index) => (
                <ManageBookedToursRow
                  key={booked?._id}
                  booked={booked}
                  setViewData={setViewData}
                  index={index}
                ></ManageBookedToursRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {viewData && (
        <ViewBookedToursModal
          booked={viewData}
        ></ViewBookedToursModal>
      )}
    </div>
  );
};

export default ManageBookedTours;
