import { MdMenuBook } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
import { FaCookieBite } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
interface Page {
    href: string;
    title: string;
    icon: React.ReactNode;
}

export const pages : Page[] = [
    {
        href: "/dashboard",
        title: "Dashboard",
        icon: <MdOutlineCalendarMonth size={30} />
    },
    {
        href: "/dashboard/rest-todos",
        title: "Rest Todos",
        icon: <CiSquareCheck size={30} />
    },
    {
        href: "/dashboard/server-todos",
        title: "Server Actions",
        icon: <MdMenuBook size={30} />
    },
    {
        href: "/dashboard/cookies",
        title: "Cookies",
        icon: <FaCookieBite size={30} />
    },
    {
        href: "/dashboard/products",
        title: "Products",
        icon: <BiCart size={30} />
    },
]