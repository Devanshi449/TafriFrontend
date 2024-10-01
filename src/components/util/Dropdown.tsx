import React, { ReactNode } from "react";

// Define the prop types
interface DropdownProps {
  button: ReactNode; 
  children: ReactNode; 
  classNames?: string; 
  animation?: string; 
}

// Hook to handle clicks outside the dropdown
function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement>, 
  setX: React.Dispatch<React.SetStateAction<boolean>>
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setX(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { button, children, classNames, animation } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [openWrapper, setOpenWrapper] = React.useState(false);

  useOutsideAlerter(wrapperRef, setOpenWrapper);

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
