import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeHeader = ({ allTours, allHotel }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("hotel");
  const [text, setText] = useState("");
  const [hotelNameText, setHotelNameText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggles, setToggles] = useState(false);
  const [suggest, setSuggest] = useState([]);
  const [suggestText, setSuggestText] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [singleDataH, setSingleDataH] = useState([]);
  const [name, setName] = useState("");
  const [nameTour, setNameTour] = useState("");

  /* ----------------------------------------------------------------*/
  /*                   SEARCH FILTER FUNCTIONALITY                   */
  /* ----------------------------------------------------------------*/
  const handleSearchField = async (name) => {
    let matchesText = [];
    let matches = [];
    if (active === "hotel") {
      if (name.length > 0) {
        matches = allHotel?.filter((title) => {
          const regex = new RegExp(`${name}`, "");
          const result = title.name.match(regex);
          return result;
        });
      }

      setHotelNameText(name);
      setSuggest(matches);
    } else {
      if (name.length > 0) {
        matchesText = allTours?.filter((title) => {
          const regex = new RegExp(`${name}`, "");
          const result = title.name.match(regex);
          return result;
        });
      }
      setText(name);
      setSuggestText(matchesText);
    }
  };

  const handleText = (event) => {
    if (active === "hotel") {
      setName(event);
      setToggles(!toggles);
      const location = allHotel?.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase())
      );
      setSingleDataH(location);
      const result = allHotel?.filter(
        (item) => item.name.toLowerCase() === event.toLowerCase()
      );

      if (result.length > 0) {
        document.getElementById("suggested_item").style.display = "none";
        setSuggest([]);
      }
    } else {
      setNameTour(event);
      setToggle(!toggle);
      const location = allTours?.filter((data) =>
        data.name.toLowerCase().includes(nameTour.toLowerCase())
      );
      setSingleData(location);
      const result = allTours?.filter(
        (item) => item.name.toLowerCase() === event.toLowerCase()
      );
      if (result.length > 0) {
        document.getElementById("suggested_item_tour").style.display = "none";
        setSuggestText([]);
      }
    }
  };

  const handleButton = (id) => {
    if (active === "hotel") {
      navigate(`/hotel/details/${id}`);
    } else {
      navigate(`/tour/details/${id}`);
    }
  };
  /* ----------------------------------------------------------------*/
  /*                   FILTER FUNCTIONALITY END                      */
  /* ----------------------------------------------------------------*/

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

      <div className="flex justify-center absolute px-5 items-center w-full h-full">
        <div className="container mx-auto">
          <div className="flex  justify-center shadow-lg">
            <div className="flex p-4 px-16 lg:px-18 z-10 rounded-lg shadow-lg space-x-14 bg-gray-100">
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
                  <div className="bg-[#33D687] w-24 h-1 mt-3"></div>
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
                    Tour
                  </h5>
                </Link>
                {active === "tour" && (
                  <div className="bg-[#33D687] w-20 h-1 mt-3"></div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="-mt-4">
              {active === "hotel" && (
                <div className="p-10 rounded-2xl relative shadow-lg bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div className="leading-tight lg:col-span-3 border p-3 rounded-2xl hover:cursor-pointer">
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
                          {name.length ? (
                            <h2
                              onClick={() => setToggles(!toggles)}
                              className="text-lg md:text-xl font-semibold lg:text-2xl py-2"
                            >
                              {name}
                            </h2>
                          ) : (
                            <h2
                              onClick={() => setToggles(!toggles)}
                              className="text-lg  font-semibold md:text-xl lg:text-2xl py-2"
                            >
                              Spiritual Ramu Tour
                            </h2>
                          )}
                          {singleDataH[0]?.location ? (
                            <p className="text-xs lg:text-sm">
                              {singleDataH[0]?.location}
                            </p>
                          ) : (
                            <p className="text-sm">Station Road, Chittagong</p>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="leading-tight border p-3 rounded-2xl">
                      <p className="text-xs md:text-sm lg:text-sm pb-2">
                        CHECK IN
                      </p>
                      <input
                        className=" appearance-none py-3 border
                      border-gray-300 text-gray-700 
                      sm:text-sm rounded-lg focus:ring-red-400 
                      focus:border-red-400 block w-full p-2 h-11 
                      dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 
                       dark:focus:border-blue-500"
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
                      focus:border-red-400 block w-full p-2 h-11 
                      dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 
                       dark:focus:border-blue-500"
                        type="date"
                      />
                    </div>
                  </div>
                  <div>
                    {/* suggest part of div */}
                    {hotelNameText.length
                      ? suggest?.length !== 0 && (
                          <div
                            id="suggested_item"
                            className="bg-white rounded-lg w-5/6 lg:w-1/3 z-10 p-4 absolute"
                          >
                            {suggest
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
                        {nameTour.length ? (
                          <h2
                            onClick={() => setToggle(!toggle)}
                            className="text-lg font-semibold md:text-2xl lg:text-2xl py-2"
                          >
                            {nameTour}
                          </h2>
                        ) : (
                          <h2
                            onClick={() => setToggle(!toggle)}
                            className="text-lg font-semibold md:text-2xl lg:text-2xl py-2"
                          >
                            Spiritual Ramu Tour
                          </h2>
                        )}
                        {singleData[0]?.location ? (
                          <p className="text-xs lg:text-sm">
                            {singleData[0]?.location}
                          </p>
                        ) : (
                          <p className="text-xs lg:text-sm">{`Cox's Bazar`}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* </div> */}
                  <div>
                    {/* suggest part of div */}
                    {text.length
                      ? suggestText.length !== 0 && (
                          <div
                            id="suggested_item_tour"
                            className="bg-white rounded-lg w-5/6 lg:w-1/3 z-10 p-4 absolute"
                          >
                            {suggestText
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
              onClick={() => handleButton(singleDataH[0]?._id)}
              className="flex justify-center w-full -mt-4"
            >
              <button className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3  text-white bg-[#33D687]">
                Search
              </button>
            </div>
          ) : (
            <div
              onClick={() => handleButton(singleData[0]?._id)}
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
