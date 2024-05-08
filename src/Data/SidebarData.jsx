import { FaBook, FaDashcube, FaUser } from "react-icons/fa";

export const SidebarData = [
    {
        title: "Dashboard",
        href: "addashboard",
        icon: <FaDashcube/>,
    },
    { 
        title: "Manage Users",
        href: "musers",
        icon: <FaUser/>,
    },
    {
        title: "Manage Books",
        href: "mbooks",
        icon: <FaBook/>,
    },
    // {
    //     title: "Manage Orders",
    //     href: "morders",
    //     icon: faListCheck,
    // },
    // {
    //     title: "Manage Contacts",
    //     href: "mcontacts",
    //     icon: faContactBook,
    // },
];
