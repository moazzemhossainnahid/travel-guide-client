import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeHeader = ({ allTours, allHotel }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("hotel");
  const [tourText, setTourText] = useState("");
  const [hotelText, setHotelText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggles, setToggles] = useState(false);
  const [suggestHotel, setSuggestHotel] = useState([]);
  const [suggestTour, setSuggestTour] = useState([]);
  const [singleTourData, setSingleTourData] = useState([]);
  const [singleHotelData, setSingleHotelData] = useState([]);
  const [hotelName, setHotelName] = useState("");
  const [tourName, setTourName] = useState("");


  const handleSearchField = async (name) => {
    let matches = [];
    if (active === "hotel") {
      if (name.length > 0) {
        matches = allHotel?.filter((hotel) => {
          const hotelNameMatch = hotel.hotel_name.toLowerCase().includes(name.toLowerCase());
          const locationMatch = hotel.location.toLowerCase().includes(name.toLowerCase());
          return hotelNameMatch || locationMatch;
        });
      }
      setHotelText(name);
      setSuggestHotel(matches);
    } else {
      if (name.length > 0) {
        matches = allTours?.filter((tour) => {
          const tourNameMatch = tour.name.toLowerCase().includes(name.toLowerCase());
          const countryMatch = tour.country.toLowerCase().includes(name.toLowerCase());
          return tourNameMatch || countryMatch;
        });
      }
      setTourText(name);
      setSuggestTour(matches);
    }
  };


  const handleText = (event) => {
    if (active === "hotel") {
      setHotelName(event);
      setToggles(!toggles);
      const hotels = allHotel?.filter((data) =>
        data.hotel_name.toLowerCase().includes(event.toLowerCase()) ||
        data.location.toLowerCase().includes(event.toLowerCase())
      );

      setSingleHotelData(hotels);
      const result = allHotel?.filter(
        (item) => item.hotel_name.toLowerCase() === event.toLowerCase() ||
          item.location.toLowerCase() === event.toLowerCase()
      );

      if (result.length > 0) {
        document.getElementById("suggested_item").style.display = "none";
        setSuggestHotel([]);
      }
    } else {
      setTourName(event);
      setToggle(!toggle);
      const location = allTours?.filter((data) =>
        data.name.toLowerCase().includes(event.toLowerCase()) ||
        data.country.toLowerCase().includes(event.toLowerCase())
      );
      setSingleTourData(location);
      const result = allTours?.filter(
        (item) => item.name.toLowerCase() === event.toLowerCase() ||
          item.country.toLowerCase().includes(event.toLowerCase())
      );
      if (result.length > 0) {
        document.getElementById("suggested_item_tour").style.display = "none";
        setSuggestTour([]);
      }
    }
  };

  const handleButton = (id) => {
    if (active === "hotel") {
      navigate(`/hotels/${id}`);
    } else {
      navigate(`/tours/${id}`);
    }
  };

  return (
    <div
      className="bg-gradient-to-tr from-purple-400 to-green-700  
   h-screen sm:h-screen md:h-[50rem] lg:h-[40rem] relative w-full bg-cover bg-center"
    >
      <img
        src="https://i.ibb.co/L98m2Qc/xhero-1-jpg-pagespeed-ic-DUdgc-Mb-Ja5.webp"
        alt=""
        className="h-full w-full object-cover absolute mix-blend-overlay"
      />

      <div className="space-y-5 absolute pt-20 w-full h-full">
        <h3 className="text-5xl text-center text-white">Welcome to TravelGuide!</h3>
        <p className="text-center text-white">Find Flights, Hotels, Visa & Holidays</p>
      </div>

      <div className="flex justify-center absolute px-5 items-center w-full h-full">
        <div className="container mx-auto">
          <div className="flex  justify-center shadow-lg">
            <div className="flex p-4 px-16 lg:px-18 z-10 rounded-lg shadow-lg space-x-14 bg-gray-100">
              {/* <div>
                <Link
                  onClick={() => setActive("flight")}
                  className="flex space-x-1"
                  to=""
                >
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/0p0VD7m/plane.png"
                    alt=""
                  />
                  <h5 className="text-gray-900 text-md md:text-xl lg:text-xl leading-tight font-bold">
                    Flight
                  </h5>
                </Link>
                {active === "flight" && (
                  <div className="bg-primary w-24 h-1 mt-3"></div>
                )}
              </div> */}

              <div>
                <Link
                  onClick={() => setActive("hotel")}
                  className="flex space-x-1"
                  to=""
                >
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/HGf5ndN/skyscraper.png"
                    alt=""
                  />
                  <h5 className="text-gray-900 text-md md:text-xl lg:text-xl leading-tight font-bold">
                    Hotel
                  </h5>
                </Link>
                {active === "hotel" && (
                  <div className="bg-primary w-24 h-1 mt-3"></div>
                )}
              </div>

              <div>
                <Link
                  onClick={() => setActive("tour")}
                  className="flex space-x-1"
                  to=""
                >
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/mJrP0TT/palm-trees.png"
                    alt=""
                  />
                  <h5 className="text-gray-900 text-md md:text-xl lg:text-xl leading-tight font-bold">
                    Holidays
                  </h5>
                </Link>
                {active === "tour" && (
                  <div className="bg-primary w-20 h-1 mt-3"></div>
                )}
              </div>
{/* 
              <div>
                <Link
                  onClick={() => setActive("visa")}
                  className="flex space-x-1"
                  to=""
                >
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/QXG2hKw/6556294.png"
                    alt=""
                  />
                  <h5 className="text-gray-900 text-md md:text-xl lg:text-xl leading-tight font-bold">
                    Visa
                  </h5>
                </Link>
                {active === "visa" && (
                  <div className="bg-primary w-20 h-1 mt-3"></div>
                )}
              </div> */}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="-mt-4">
              {active === "hotel" && (
                <div className="p-10 rounded-2xl relative shadow-lg bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-1 relative rounded-2xl p-10 shadow-lg bg-white">
                  <div className="md:w-[38rem] lg:w-[55rem] hover:cursor-pointer leading-tight border p-3 rounded-2xl">
                      <p
                        onClick={() => setToggles(!toggles)}
                        className="text-xs md:text-sm lg:text-sm"
                      >
                        CITY/HOTEL/RESORT/AREA
                      </p>
                      {toggles === true ? (
                        <input
                          type="search"
                          onChange={(e) => handleSearchField(e.target.value)}
                          placeholder="type your expected hotel..."
                          className="w-full shadow appearance-none rounded-lg  py-3 px-3
                        text-gray-700 leading-tight border border-slate-300 
                        focus:outline-none focus:border-red-400 focus:ring-1
                         focus:ring-red-400"
                        />
                      ) : (
                        <div>
                          {hotelName.length ? (
                            <h2
                              onClick={() => setToggles(!toggles)}
                              className="text-lg md:text-xl font-semibold lg:text-2xl py-2"
                            >
                              {hotelName}
                            </h2>
                          ) : (
                            <h2
                              onClick={() => setToggles(!toggles)}
                              className="text-lg font-semibold md:text-xl lg:text-2xl py-2"
                            >
                              Hotel Noorjahan Grand
                            </h2>
                          )}
                          {singleHotelData[0]?.location ? (
                            <p className="text-xs lg:text-sm">
                              {singleHotelData[0]?.location}
                            </p>
                          ) : (
                            <p className="text-sm">Boroshola, Airport Road, Sylhet</p>
                          )}
                        </div>
                      )}
                    </div>
                    {/* <div className="leading-tight border p-3 rounded-2xl">
                      <p className="text-xs md:text-sm lg:text-sm pb-2">
                        CHECK IN
                      </p>
                      <input
                        className=" appearance-none py-3 border
                      border-gray-300 text-gray-700 
                      sm:text-sm rounded-lg focus:ring-red-400 
                      focus:border-red-400 block w-full p-2 h-11 "
                        type="date"
                      />
                    </div>
                    <div className="leading-tight border p-3 rounded-2xl">
                      <p className="text-xs md:text-sm lg:text-sm pb-2">
                        CHECK OUT
                      </p>
                      <input
                        className=" appearance-none py-3 border
                      border-gray-300 text-gray-700 
                      sm:text-sm rounded-lg focus:ring-red-400 
                      focus:border-red-400 block w-full p-2 h-11 "
                        type="date"
                      />
                    </div> */}
                  </div>
                  <div>
                    {/* suggest part of div */}
                    {hotelText.length
                      ? suggestHotel?.length !== 0 && (
                        <div
                          id="suggested_item"
                          className="bg-white rounded-lg w-5/6 lg:w-1/3 z-10 p-4 absolute"
                        >
                          {suggestHotel
                            ?.slice(0, 10)
                            ?.map(({ hotel_name, index }) => (
                              <div className="border-b-2 " key={index}>
                                <p
                                  onClick={() => handleText(hotel_name)}
                                  className="pt-3 divide-y hover:text-green-400 hover:cursor-pointer divide-dashed"
                                >
                                  {hotel_name}
                                </p>
                              </div>
                            ))}
                        </div>
                      )
                      : ""}
                  </div>
                </div>
              )}
              {/* sm:w-3/2 lg:1/2 */}
              {active === "tour" && (
                // <div className="w-screen flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 relative rounded-2xl p-10 shadow-lg bg-white">
                  <div className="md:w-[38rem] lg:w-[55rem] hover:cursor-pointer leading-tight border p-3 rounded-2xl">
                    <p
                      onClick={() => setToggle(!toggle)}
                      className="text-xs md:text-sm lg:text-sm"
                    >
                      CITY/HOTEL/RESORT/AREA
                    </p>
                    {toggle === true ? (
                      <input
                        type="search"
                        onChange={(e) => handleSearchField(e.target.value)}
                        placeholder="type your expected tour..."
                        className="w-full appearance-none rounded-lg py-3 mt-1 px-3
                          text-gray-700 leading-tight border border-slate-300 
                          focus:outline-none focus:border-red-400 focus:ring-1
                           focus:ring-red-400"
                      />
                    ) : (
                      <div>
                        {tourName.length ? (
                          <h2
                            onClick={() => setToggle(!toggle)}
                            className="text-lg font-semibold md:text-2xl lg:text-2xl py-2"
                          >
                            {tourName}
                          </h2>
                        ) : (
                          <h2
                            onClick={() => setToggle(!toggle)}
                            className="text-lg font-semibold md:text-2xl lg:text-2xl py-2"
                          >
                            Gardens by the Bay Tour
                          </h2>
                        )}
                        {singleTourData[0]?.country ? (
                          <p className="text-xs lg:text-sm">
                            {singleTourData[0]?.country}
                          </p>
                        ) : (
                          <p className="text-xs lg:text-sm">{`Indonesia`}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* </div> */}
                  <div>
                    {/* suggest part of div */}
                    {tourText.length
                      ? suggestTour.length !== 0 && (
                        <div
                          id="suggested_item_tour"
                          className="bg-white rounded-lg w-5/6 lg:w-1/3 z-10 p-4 absolute"
                        >
                          {suggestTour
                            ?.slice(0, 10)
                            ?.map(({ name, index }) => (
                              <div className="border-b-2 " key={index}>
                                <p
                                  onClick={() => handleText(name)}
                                  className="pt-3 divide-y hover:text-green-400 hover:cursor-pointer divide-dashed"
                                >
                                  {name}
                                </p>
                              </div>
                            ))}
                        </div>
                      )
                      : ""}
                  </div>
                </div>
              )}
            </div>
          </div>

          {active === "hotel" ? (
            <div
              onClick={() => handleButton(singleHotelData[0]?._id)}
              className="flex justify-center w-full -mt-4"
            >
              <button className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3  text-white bg-[#33D687]">
                Search
              </button>
            </div>
          ) : (
            <div
              onClick={() => handleButton(singleTourData[0]?._id)}
              className="flex justify-center w-full -mt-4"
            >
              <button className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3 text-white bg-[#33D687]">
                Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
