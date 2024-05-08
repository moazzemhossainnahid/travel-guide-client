
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../../../firebase.init";
import { FaArrowAltCircleRight, FaHotel, FaUsers } from "react-icons/fa";
import { FaAddressBook, FaBookAtlas, FaCity, FaTentArrowTurnLeft } from "react-icons/fa6";

const DBCards = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [tours, setTours] = useState([]);
  const [tourBooking, setTourBooking] = useState([]);
  const [countries, setCountries] = useState([]);
  const [bookedHotel, setBookedHotel] = useState([]);
  const [user] = useAuthState(auth);

  const allHotels = countries?.flatMap(country =>
    country?.locations?.flatMap(location => location?.hotels)
);

  useEffect(() => {
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/tours`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTours(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/countries`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCountries(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/tour-booking`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTourBooking(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/orders`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookedHotel(data?.data?.result));
  }, []);


  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-5 py-10 text-start">
        {/* Registered Users */}
        <div className="">
          <div className="flex items-center justify-between bg-[#252525] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {users?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Users</h3>
            </div>
            <div className="">
              <FaUsers className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/musers")}
            className="bg-[#1e1e1e] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>
        {/* Total Countries */}
        <div className="">
          <div className="flex items-center justify-between bg-[#17A2BB] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {countries?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Countries</h3>
            </div>
            <div className="">
              <FaCity className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mcountries")}
            className="bg-[#0c93ab] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>
        {/* Total Hotels */}
        <div className="">
          <div className="flex items-center justify-between bg-[#219422] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {allHotels?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Hotels</h3>
            </div>
            <div className="">
              <FaHotel className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mhotels")}
            className="bg-[#186e1a] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>

        {/* Total Hotel Booking */}
        <div className="">
          <div className="flex items-center justify-between bg-[#572194b9] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {bookedHotel?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Booked Hotels</h3>
            </div>
            <div className="">
              <FaAddressBook className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mbookhotels")}
            className="bg-[#572194ea] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>

        {/* Total Tour Plan */}
        <div className="">
          <div className="flex items-center justify-between bg-[#ad5530] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {tours?.length}{" "}
              </h3>
              <h3 className="text-md font-bold text-white">Total Tour Plan</h3>
            </div>
            <div className="">
              <FaTentArrowTurnLeft className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mtours")}
            className="bg-[#8f4626] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>

        {/* Total Tour Booking */}
        <div className="">
          <div className="flex items-center justify-between bg-[#ad303c] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {tourBooking?.length}{" "}
              </h3>
              <h3 className="text-md font-bold text-white">Total Booked Tour</h3>
            </div>
            <div className="">
              <FaBookAtlas className="text-[#42424281] text-3xl md:text-4xl" />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mbooktours")}
            className="bg-[#8f2632] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white flex items-center justify-center gap-2">
              More Info{" "}
              <FaArrowAltCircleRight className="pl-2 text-2xl" />{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBCards;
