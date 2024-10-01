import { IconType } from "react-icons";

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

const LinkItem =({link} : {link : Link })=>{

    const IconComponent = link.icon;

    return (
        <li>
            <a href={link.href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IconComponent className="mr-3"/>
                <span className="flex-1 me-3">{link.text}</span>
                {link.badge && (
                    <span className={`inline-flex items-center justify-center px-2 ms-2 text-sm font-medium rounded-full ${link.badge?.color} ${link.badge?.darkColor}`}>
                        {link.badge?.text}
                        
                    </span>
                )}
            </a>
        </li>
    )
};

export default LinkItem;