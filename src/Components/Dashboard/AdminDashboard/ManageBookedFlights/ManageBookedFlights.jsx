import React, { useEffect, useState } from "react";

import ManageBookedFlightsRow from "./ManageBookedFlightsRow";
import ViewBookedFlightsModal from "./Modals/ViewBookedFlightsModal";

const ManageBookedFlights = () => {
  const [flightBooking, setFlightBooking] = useState(null);
  const [viewData, setViewData] = useState(null);
 
  useEffect(() => {
    fetch("https://travel-guide-server-ii.vercel.app/api/v1/flight-booking", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setFlightBooking(data?.data?.result));
  }, []);

  // console.log(flightBooking);

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Booked Flights: {flightBooking?.length}
          </p>
          <table className="border-collapse w-full bg-slate-200">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Index
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  From
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  To
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Date
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {flightBooking?.map((booked, index) => (
                <ManageBookedFlightsRow
                  key={booked?._id}
                  booked={booked}
                  setViewData={setViewData}
                  index={index}
                ></ManageBookedFlightsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {viewData && (
        <ViewBookedFlightsModal
          booked={viewData}
        ></ViewBookedFlightsModal>
      )}
    </div>
  );
};

export default ManageBookedFlights;
