import { MdMenuBook } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
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
]