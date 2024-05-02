import React from 'react';
import ContactDetails from './ContactDetails';
import PageTitle from '../../components/others/PageTitle';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';


const ContactUS = () => {
    return (
        <div className=''>

            {/* title */}

            <PageTitle title="Contact Us"></PageTitle>

            {/* end */}

            <div className="bg-gradient-to-tr from-purple-400 relative to-green-700 h-[25rem] lg:h-[30rem] w-full bg-cover bg-center">
                <img
                    src="https://www.wallpapertip.com/wmimgs/9-90686_desktop-backgrounds-hd-travel.jpg"
                    alt=""
                    className="h-full w-full object-cover absolute mix-blend-overlay"
                />
                <div className="flex flex-col justify-center items-center h-full w-full text-white text-2xl font-bold">
                    <div className="flex-col py-5">
                        <h3 className="text-5xl lg:text-8xl font-bold">Contact</h3>
                    </div>
                    <ul className="flex">
                        <li className="">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-2xl mx-2 mt-1.5">
                            <IoIosArrowForward />
                        </li>
                        <li className="">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ContactDetails />
        </div>
    );
};

export default ContactUS;