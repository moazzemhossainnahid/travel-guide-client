import React, { useEffect, useState } from "react";

import ManageHotelsRow from "./ManageHotelsRow";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";
import UpdateHotelsModal from "./Modals/UpdateHotelsModal";
import DeleteHotelsModal from "./Modals/DeleteHotelsModal";
import useHotels from "../../../../Hooks/useHotels";
  
const ManageHotels = () => {
  const [number, setNumber] = useState(0);
  // const [hotels, setHotels] = useState(null);
  const [updateHotel, setUpdateHotel] = useState(null);
  const [deleteHotel, setDeleteHotel] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [allHotels, setAllHotels] = useState(false);
  const [user] = useAuthState(auth);
  const [hotels] = useHotels("Bangladesh");

  const imageUrlKey = "e738f1d16de6b265746b7f82cc157644";

  // useEffect(() => {
  //   fetch("https://travel-guide-server-ii.vercel.app/api/v1/countries")
  //     .then((res) => res.json())
  //     .then((data) => setHotels(data?.data?.result));
  // }, [number]);

  // console.log(blogs);


  const handleAddHotel = async (data) => {
    const image = data.photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const hotel = {
            title: data.title,
            category: data.category,
            author: user?.displayName,
            email: user?.email,
            description: data.description,
            banner: img,
          };

          // send to database
          fetch(`https://travel-guide-server-ii.vercel.app/api/v1/countries`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(hotel),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.status === "Successful") {
                toast.success("Hotel Add Successfully");
                reset();
                setNumber(number + 1);
              } else {
                toast.error("Faild to Add Hotel");
              }
            });
        }
      });
  };

  const closeModal = () => {
    window.location.reload();
  };



  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Hotels: {hotels?.length}
          </p>
          {/* <div className="pb-5">
            <label
              for="addBlog"
              className="rounded btn btn-sm btn-primary btn-outline"
            >
              Add Hotel
            </label>
          </div> */}
          <table className="border-collapse w-full bg-slate-200">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Index
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Banner
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Title
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Rooms
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Location
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {allHotels
                ? hotels?.map((hotel, index) => (
                  <ManageHotelsRow
                    key={hotel?._id}
                    hotel={hotel}
                    index={index}
                    setUpdateHotel={setUpdateHotel}
                    setDeleteHotel={setDeleteHotel}
                  ></ManageHotelsRow>
                ))
                : hotels
                  ?.slice(0, 7)
                  ?.map((hotel, index) => (
                    <ManageHotelsRow
                      key={hotel?._id}
                      hotel={hotel}
                      index={index}
                      setUpdateHotel={setUpdateHotel}
                      setDeleteHotel={setDeleteHotel}
                    ></ManageHotelsRow>
                  ))}
            </tbody>
          </table>
          {hotels?.length > 7 && (
            <div className="pt-7">
              <button
                onClick={() => setAllHotels(!allHotels)}
                className="btn btn-outline btn-secondary flex items-center justify-center mx-auto"
              >
                {`${allHotels ? "See Less Hotels" : "See More Hotels"}`}{" "}
                <span className="text-2xl -mt-1">&#8608;</span>
              </button>
            </div>
          )}
        </div>
        {updateHotel && (
          <UpdateHotelsModal
            updateHotel={updateHotel}
            setNumber={setNumber}
            number={number}
          ></UpdateHotelsModal>
        )}
        {deleteHotel && (
          <DeleteHotelsModal
            deleteHotel={deleteHotel}
            setNumber={setNumber}
            number={number}
          ></DeleteHotelsModal>
        )}
      </div>

      {/* <!-- The add Blog modal --> */}

      <input type="checkbox" id="addBlog" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative  bg-slate-300">
          <label
            for="addBlog"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Please Add New Hotel Information</h3>
          <form
            onSubmit={handleSubmit(handleAddHotel)}
            action=""
            className="py-3"
          >
            <input
              {...register("title")}
              type="text"
              required
              placeholder="Enter Blog Title"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
            />
            <input
              {...register("category")}
              type="text"
              required
              placeholder="Enter Blog Category"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
            />
            <textarea
              {...register("description")}
              type="text"
              required
              placeholder="Enter Blog Description"
              className="input bg-slate-100 my-2 input-ghost w-full h-28 block mx-auto"
            />
            <input
              {...register("photoURL")}
              type="file"
              required
              placeholder="Enter Your Image"
              className="file-input file-input-bordered bg-slate-100 my-2 items-center w-full mx-auto block"
            />
            <input
              className="btn px-7 btn-primary mt-5 block mx-auto"
              type="submit"
              value="Add Blog"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageHotels;
