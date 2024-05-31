import React, { useEffect, useState } from "react";


import ManageVisaApplicationsRow from "./ManageVisaApplicationsRow";
import ViewVisaApplicationsModal from "./Modals/ViewVisaApplicationsModal";

const ManageVisaApplications = () => {
  const [visaApplication, setVisaApplication] = useState(null);
  const [viewData, setViewData] = useState(null);
 
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/visa-application", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setVisaApplication(data?.data?.result));
  }, []);

  // console.log(visaApplication);

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Visa Applications: {visaApplication?.length || 0}
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
                  Visa
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

              {visaApplication?.map((booked, index) => (
                <ManageVisaApplicationsRow
                  key={booked?._id}
                  booked={booked}
                  setViewData={setViewData}
                  index={index}
                ></ManageVisaApplicationsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {viewData && (
        <ViewVisaApplicationsModal
          booked={viewData}
        ></ViewVisaApplicationsModal>
      )}
    </div>
  );
};

export default ManageVisaApplications;
