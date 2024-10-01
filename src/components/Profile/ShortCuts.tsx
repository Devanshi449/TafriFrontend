import Title from "../ui/Title";
import {
    IoIosStats,
    IoIosSettings,
} from "react-icons/io";

import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";


const shortcutLink = [
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

const ShortCuts = () =>{
    return (
        <div className="flex gap-4 flex-col bg-white rounded-lg p-4 dark:bg-gray-600">
            <Title>Shortcuts</Title>
            {shortcutLink.map((list : any,index : number) => (
                <div key={index} className="flex justify-between items-center cursor-pointer rounded-sm">
                    <div className="flex gap-4 items-center">
                        <h3 className="font-medium dark:text-gray-300">{list.title}</h3>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default ShortCuts;