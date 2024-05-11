import { FaCube, FaHotel, FaUser } from "react-icons/fa";
import { FaAddressBook, FaBookAtlas, FaTentArrowTurnLeft } from "react-icons/fa6";

export const SidebarData = [
    {
        title: "Dashboard",
        href: "addashboard",
        icon: <FaCube/>,
    },
    {  
        title: "Manage Users",
        href: "musers",
        icon: <FaUser/>,
    },
    {
        title: "Manage Hotels",
        href: "mhotels",
        icon: <FaHotel/>,
    },
    {
        title: "Manage Hotel Bookings",
        href: "mbookhotels",
        icon: <FaAddressBook/>,
    },
    {
        title: "Manage Tours",
        href: "mtours",
        icon: <FaTentArrowTurnLeft/>,
    },
    {
        title: "Manage Tour Bookings",
        href: "mbooktours",
        icon: <FaBookAtlas/>,
    },
];
