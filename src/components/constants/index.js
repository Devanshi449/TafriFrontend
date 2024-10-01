import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";

import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from "react-icons/fa";

export const links = [
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


export const shortcutLink = [
  {
    title: "GO to dashboard",
    icon: GoGoal,
  },
  {
    title: "Manage Requests",
    icon: GrPlan,
  },
  {
    title: "Manage Packages",
    icon: IoIosStats,
  },
  {
    title: "Manage Users",
    icon: IoIosSettings,
  },
];
