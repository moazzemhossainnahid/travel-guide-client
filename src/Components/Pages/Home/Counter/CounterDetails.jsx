import React from "react";
import CountUp from "react-countup";
import { Bounce, Fade, Zoom } from "react-reveal";

const CounterDetails = ({ data }) => {
  const { icon, count, title } = data;
  
  return (
    <div>
      <Bounce left>
        <img
          src={icon}
          alt="icon"
          className="object-cover py-3 w-20 lg:w-24 mx-auto"
        />
      </Bounce>
      <Zoom right>
        <h3 className="text-4xl lg:text-6xl font-bold pt-3 lg:pt-5">
          <CountUp end={count} />
        </h3>
      </Zoom>
      <Fade top>
        <h3 className="text-xl lg:text-3xl font-bold text-gray-500">{title}</h3>
      </Fade>
    </div>
  );
};

export default CounterDetails;
