import React from "react";
import { FaGuaraniSign, FaHeart, FaHouseCrack, FaUserDoctor } from "react-icons/fa6";
import { Bounce, Fade, Slide, Zoom } from "react-reveal";

const TopCard = () => {

const ShortAbout = [
    {
      icon: <FaGuaraniSign />,
      title: 'Best Price Guarantee',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: <FaHeart />,
      title: 'Travellers Love Us',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: <FaUserDoctor />,
      title: 'Best Travel Agent',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: <FaHouseCrack />,
      title: 'Our Dedicated Support',
      description: 'A small river named Duden flows by their place and supplies.'
    }
  ];

  return (
    <Slide bottom>
      <div className="container mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 gap-5 -mt-5 md:-mt-10 lg:-mt-10">
          {ShortAbout?.map((data, index) => (
            <div key={index} className="card bg-base-300 group shadow-xl hover:bg-primary hover:text-white group hover:-translate-y-2 hover:duration-300">
              <Zoom>
                <figure className="px-10 pt-10 text-3xl md:text-4xl text-primary group-hover:text-accent">
                  {data?.icon}
                </figure>
              </Zoom>
              <div className="card-body items-center text-center">
                <Bounce>
                  <h2 className="card-title">{data?.title}</h2>
                </Bounce>
                <Fade bottom>
                  <p>{data?.description}</p>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default TopCard;
