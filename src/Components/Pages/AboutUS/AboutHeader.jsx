import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    
    return (
        <div className="bg-gradient-to-tr from-purple-400 relative to-green-700 h-[25rem] lg:h-[30rem] w-full bg-cover bg-center">
            <img
                src="https://preview.colorlib.com/theme/direngine/images/bg_4.jpg.webp"
                alt=""
                className="h-full w-full object-cover bg-center absolute mix-blend-overlay"
            />
            <div className=" flex flex-col justify-center items-center h-full w-full text-white text-2xl font-bold">
                <div className="flex-col py-5">
                    <h3 className="text-6xl lg:text-8xl font-bold">About</h3>
                </div>
                <ul className="flex">
                    <li className="">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-2xl mx-2 mt-1.5">
                        <IoIosArrowForward />
                    </li>
                    <li className="">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutHeader;