import LinkItem from "./LinkItem";
import { IconType } from "react-icons";

  import {
    FaChartBar,
    FaCalendarAlt,
    FaFacebookMessenger,
    FaUsersCog,
    FaListAlt,
  } from "react-icons/fa";


const links = [
    {
      href: "#",
      icon: FaChartBar,
      text: "Dashboard",
    },
    {
      href: "#",
      icon: FaCalendarAlt,
      text: "Manage Supplier Requests",
      badge: {
        text: "Pro",
        color: "bg-gray-100 text-gray-800",
        darkColor: "dark:bg-gray-700 dark:text-gray-300",
      },
    },
    {
      href: "#",
      icon: FaFacebookMessenger,
      text: "Suppliers",
      badge: {
        text: "4",
        color: "bg-blue-100 text-blue-800",
        darkColor: "dark:bg-blue-900 dark:text-blue-300",
      },
    },
    {
      href: "#",
      icon: FaUsersCog,
      text: "Packages",
    },
    {
      href: "#",
      icon: FaListAlt,
      text: "Users",
    },
   
  ];
  
  
interface Link {
    href: string;
    icon: IconType;
    text: string;
    badge?: {
        text: string;
        color: string;
        darkColor: string;
    };
  }

const  Sidebar = ({isSidebarOpen} : {isSidebarOpen :boolean}) =>{
    return <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}>
        
        <div className="h-full px-3 pb-4 overflow-y-auto">
            <ul className="space-y-2 font-medium"> 
                {
                    links.map((link : Link,index : number)=>(
                        <LinkItem key={index} link={link}/>
                    ))
                }
            </ul>
        </div>
    </aside>
};

export default Sidebar;