import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAirports from "../../../Hooks/useAirports";
import { toast } from "react-toastify";
import { countries } from "../../../Data/Data";



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
  const [airports] = useAirports();

  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [travelerClass, setTravelerClass] = useState('Economy');
  const [numTravelers, setNumTravelers] = useState(1);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [visaDuration, setVisaDuration] = useState('3 Months');
  const [visaPurpose, setVisaPurpose] = useState('Tourism');
  const [country, setCountry] = useState('India');
  const [nationality, setNationality] = useState('Bangladeshi');
  const [dob, setDob] = useState('');
  const [vUserInfo, setVUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    nidNo: '',
    passportNo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleVisaInputChange = (e) => {
    const { name, value } = e.target;
    setVUserInfo({
      ...vUserInfo,
      [name]: value
    });
  };


  const airportsArray = Object.values(airports);

  useEffect(() => {
    // Check if either fromAirport or toAirport is non-empty
    if (fromAirport || toAirport) {
      const matches = airportsArray.filter(airport => {
        // Check if the airport matches the fromAirport or toAirport
        const fromMatch = fromAirport && (
          airport.name.toLowerCase().includes(fromAirport.toLowerCase()) ||
          airport.city.toLowerCase().includes(fromAirport.toLowerCase()) ||
          airport.country.toLowerCase().includes(fromAirport.toLowerCase()) ||
          airport.iata.toLowerCase().includes(fromAirport.toLowerCase())
        );

        const toMatch = toAirport && (
          airport.name.toLowerCase().includes(toAirport.toLowerCase()) ||
          airport.city.toLowerCase().includes(toAirport.toLowerCase()) ||
          airport.country.toLowerCase().includes(toAirport.toLowerCase()) ||
          airport.iata.toLowerCase().includes(toAirport.toLowerCase())
        );

        // Return true if the airport matches either fromAirport or toAirport
        return fromMatch || toMatch;
      }).slice(0, 10); // Limit to first 10 matches
      setFilteredAirports(matches);
    } else {
      // Reset filteredAirports if both fromAirport and toAirport are empty
      setFilteredAirports([]);
    }
  }, [fromAirport, toAirport, airportsArray]);


  const handleSearch = () => {
    // Implement your search logic here

    const info = {
      fromAirport,
      toAirport,
      journeyDate,
      travelerClass,
      numTravelers,
      ...userInfo
    }

    // console.log(info);

    // send to database
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/flight-booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        if (data?.status === "Successful") {
          toast.success("Data Submitted Successfully");
          window.location.reload();
        } else {
          toast.error("Faild to Booked Flight");
        }
      });

  };
  

  const handleApply = () => {
    // Implement your search logic here

    const info = {
      maritalStatus,
      visaPurpose,
      visaDuration,
      country,
      nationality,
      dob,
      ...vUserInfo
    }

    console.log(info);

    // send to database
    fetch(`https://travel-guide-server-ii.vercel.app/api/v1/visa-application`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        if (data?.status === "Successful") {
          toast.success("Data Submitted Successfully");
          window.location.reload();
        } else {
          toast.error("Faild to Apply for Visa");
        }
      });

  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    e.target.reset();
    setUserInfo({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    setFromAirport("");
    setToAirport("");
    setJourneyDate("");
    setNumTravelers("");
    setTravelerClass("");
  };

  const handleVisaFormSubmit = (e) => {
    e.preventDefault();
    handleApply();
    e.target.reset();
    setUserInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      nidNo:'',
      passportNo:''
    });
    setMaritalStatus("");
    setNationality("");
    setCountry("");
    setDob("");
    setVisaDuration("");
    setVisaPurpose("");
  };


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
      className={`bg-gradient-to-tr from-purple-400 to-green-700  
      h-[70rem] ${active === "visa" && "h-[80rem]"} md:h-[60rem] lg:h-[50rem] relative w-full bg-cover bg-center`}
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

              <div>
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
              </div>

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
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="-mt-4">
              {active === "flight" && (
                <div className="rounded-2xl relative">
                  <div className="grid grid-cols-1 sm:grid-cols-1 relative rounded-2xl p-10 shadow-lg bg-white">

                    <div className="w-full h-full mx-auto hover:cursor-pointer leading-tight border p-3 rounded-2xl">
                      <div className="flex flex-wrap gap-4">
                        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-3">
                          {/* From */}

                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">From</p>
                            <input
                              type="search"
                              value={fromAirport}
                              onChange={(e) => setFromAirport(e.target.value)}
                              list="from-airports"
                              placeholder="Select departure airport..."
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            />
                            <datalist id="from-airports">
                              {filteredAirports?.map((airport, index) => (
                                <option key={index} value={`${airport.name} (${airport.iata}) - ${airport.city}, ${airport.country}`} />
                              ))}
                            </datalist>
                          </div>



                          {/* To */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">To</p>
                            <input
                              type="search"
                              value={toAirport}
                              onChange={(e) => setToAirport(e.target.value)}
                              list="to-airports"
                              placeholder="Select arrival airport..."
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            />
                            <datalist id="to-airports">
                              {filteredAirports?.map((airport, index) => (
                                <option key={index} value={`${airport.name} (${airport.iata}) - ${airport.city}, ${airport.country}`} />
                              ))}
                            </datalist>
                          </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                          {/* Journey Date */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Journey Date</p>
                            <input
                              type="date"
                              value={journeyDate}
                              onChange={(e) => setJourneyDate(e.target.value)}
                              className="appearance-none py-3 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2 h-11"
                            />
                          </div>

                          {/* Traveler Class */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Traveler Class</p>
                            <select
                              value={travelerClass}
                              onChange={(e) => setTravelerClass(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              <option value="Economy">Economy</option>
                              <option value="Business">Business</option>
                              <option value="First Class">First Class</option>
                            </select>
                          </div>

                          {/* Number of Travelers */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Number of Travelers</p>
                            <input
                              type="number"
                              min="1"
                              value={numTravelers}
                              onChange={(e) => setNumTravelers(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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

            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="-mt-4">
              {active === "hotel" && (
                <div className="rounded-2xl relative">
                  <div className="grid grid-cols-1 sm:grid-cols-1 relative rounded-2xl p-10 shadow-lg bg-white">
                    <div className="w-full mx-auto hover:cursor-pointer leading-tight border p-3 rounded-2xl">
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
                              className="text-md md:text-xl font-semibold lg:text-2xl py-2"
                            >
                              {hotelName}
                            </h2>
                          ) : (
                            <h2
                              onClick={() => setToggles(!toggles)}
                              className="text-md md:text-xl font-semibold lg:text-2xl py-2"
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
                  <div className="w-full mx-auto hover:cursor-pointer leading-tight border p-3 rounded-2xl">
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
                            className="text-md md:text-xl font-semibold lg:text-2xl py-2"
                          >
                            {tourName}
                          </h2>
                        ) : (
                          <h2
                            onClick={() => setToggle(!toggle)}
                            className="text-md md:text-xl font-semibold lg:text-2xl py-2"
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
              {/* sm:w-3/2 lg:1/2 */}
              {active === "visa" && (
                <div className="rounded-2xl relative">
                  <div className="grid grid-cols-1 sm:grid-cols-1 relative rounded-2xl p-10 shadow-lg bg-white">

                    <div className="w-full h-full mx-auto hover:cursor-pointer leading-tight border p-3 rounded-2xl">
                      <div className="flex flex-wrap gap-4">
                        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-3">

                          {/* Country Selection */}
                          <div className="w-full md:w-1/2 p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Country for Visa</p>
                            <select
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              {countries?.map((country) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </div>



                          {/* Visa Purpose */}
                          <div className="w-full md:w-1/2 p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Visa Purpose</p>
                            <select
                              value={visaPurpose}
                              onChange={(e) => setVisaPurpose(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              <option value="Tourism">Tourism</option>
                              <option value="Business">Business</option>
                              <option value="Study">Study</option>
                              <option value="Work">Work</option>
                              <option value="Transit">Transit</option>
                              <option value="Medical Treatment">Medical Treatment</option>
                              <option value="Family Visit">Family Visit</option>
                              <option value="Conference">Conference</option>
                            </select>
                          </div>

                          {/* Visa Duration */}
                          <div className="w-full md:w-1/2 p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Visa Duration</p>
                            <select
                              value={visaDuration}
                              onChange={(e) => setVisaDuration(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              <option value="3 Months">3 Months</option>
                              <option value="6 Months">6 Months</option>
                              <option value="9 Months">9 Months</option>
                              <option value="1 Year">1 Year</option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">

                          {/* Nationality */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Nationality</p>
                            <select
                              value={nationality}
                              onChange={(e) => setNationality(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              <option value="Bangladeshi">Bangladeshi</option>
                              <option value="Indian">Indian</option>
                              <option value="American">American</option>
                            </select>
                          </div>

                          {/* Marital Status */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Marital Status</p>
                            <select
                              value={maritalStatus}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              className="w-full shadow appearance-none rounded-lg py-3 px-3 text-gray-700 leading-tight border border-slate-300 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                            >
                              <option value="Married">Married</option>
                              <option value="Single">Single</option>
                              <option value="Divorced">Divorced</option>
                              <option value="Widowed">Widowed</option>
                              <option value="Separated">Separated</option>
                              <option value="In a Relationship">In a Relationship</option>
                              <option value="It's Complicated">{`It's Complicated`}</option>
                            </select>
                          </div>

                          {/* Date of Birth */}
                          <div className="w-full md:w-1/2 leading-tight p-3 rounded-2xl">
                            <p className="text-xs md:text-sm lg:text-sm pb-2">Date of Birth</p>
                            <input
                              type="date"
                              required
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              className="appearance-none py-3 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2 h-11"
                            />
                          </div>


                        </div>
                      </div>
                    </div>
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
            </div>
          </div>

          {active === "flight" && (
            <div
              className="flex justify-center w-full -mt-4"
            >
              <label htmlFor="personalInfo" className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3  text-white bg-[#33D687]">
                Search Flights
              </label>
            </div>
          )}


          {active === "hotel" && (
            <div
              onClick={() => handleButton(singleHotelData[0]?._id)}
              className="flex justify-center w-full -mt-4"
            >
              <button className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3  text-white bg-[#33D687]">
                Search
              </button>
            </div>
          )}
          {active === "tour" && (
            <div
              onClick={() => handleButton(singleTourData[0]?._id)}
              className="flex justify-center w-full -mt-4"
            >
              <button className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3 text-white bg-[#33D687]">
                Search
              </button>
            </div>
          )}
          {active === "visa" && (
            <div
              className="flex justify-center w-full -mt-4"
            >
              <label htmlFor="visaApplication" className="px-14 rounded-lg text-[1.2rem] absolute font-bold py-3 text-white bg-[#33D687]">
                Apply
              </label>
            </div>
          )}
        </div>
      </div>

      {/* <!-- The flight info submit modal --> */}

      <input type="checkbox" id="personalInfo" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  bg-slate-300">
          <label
            htmlFor="personalInfo"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Insert Personal Information</h3>
          <form
            onSubmit={handleFormSubmit}
            action=""
            className="py-3"
          >
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
              <input
                value={userInfo.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter Your Phone"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
            </div>
            <div className="w-full flex flex-col  justify-between items-center gap-3">
              <input
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter Your Email"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
              />
            </div>
            <div className="w-full">
              <textarea
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Your Address"
                className="input bg-slate-100 resize-none my-2 input-ghost w-full h-16 block mx-auto"
              />
            </div>
            <input
              className="btn px-7 btn-warning my-5 block mx-auto"
              type="submit"
              value="Send Data"
            />
          </form>
        </div>
      </div>

      {/* <!-- The visa info submit modal --> */}

      <input type="checkbox" id="visaApplication" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  bg-slate-300">
          <label
            htmlFor="visaApplication"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Insert Personal Information</h3>
          <form
            onSubmit={handleVisaFormSubmit}
            action=""
            className="py-3"
          >
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
              <input
                value={vUserInfo.name}
                onChange={handleVisaInputChange}
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
              <input
                type="tel"
                name="phone"
                value={vUserInfo.phone}
                onChange={handleVisaInputChange}
                placeholder="Enter Your Phone"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
              <input
                value={vUserInfo.nidNo}
                onChange={handleVisaInputChange}
                name="nidNo"
                type="text"
                placeholder="Enter NID Number"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
              <input
                type="text"
                name="passportNo"
                value={vUserInfo.passportNo}
                onChange={handleVisaInputChange}
                placeholder="Enter Passport Number"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
              />
            </div>
            <div className="w-full flex flex-col  justify-between items-center gap-3">
              <input
                name="email"
                value={vUserInfo.email}
                onChange={handleVisaInputChange}
                type="email"
                placeholder="Enter Your Email"
                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
              />
            </div>
            <div className="w-full">
              <textarea
                name="address"
                value={vUserInfo.address}
                onChange={handleVisaInputChange}
                type="text"
                placeholder="Enter Your Address"
                className="input bg-slate-100 resize-none my-2 input-ghost w-full h-16 block mx-auto"
              />
            </div>
            <input
              className="btn px-7 btn-outline btn-neutral my-5 block mx-auto"
              type="submit"
              value="Submit Application"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
