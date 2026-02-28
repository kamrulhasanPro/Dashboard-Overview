import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

const TopBar = () => {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="p-2 flex items-center justify-between gap-4">
      <label
        ref={searchRef}
        className="input outline-none rounded-full border-none"
      >
        <AiOutlineSearch size={30} />
        <input type="text" placeholder="Search task" />
        <kbd className="kbd kbd-sm">⌘F</kbd>
      </label>

      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-base-100">
          <AiOutlineMail />
        </div>

        <div className="p-2 rounded-full bg-base-100">
          <BsBell />
        </div>

        <div className="avatar">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/user-female-circle--v3.png"
            alt="user-female-circle--v3"
          />
        </div>
        <div>
          <p className="text-md text-neutral font-semibold">Totok Michael</p>
          <p className="text-sm text-secondary-content">tmichael20@mail.com</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
