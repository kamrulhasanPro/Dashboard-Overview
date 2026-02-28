import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ item }) => {
  return (
    <>
      <NavLink
        to={item?.path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 font-medium transition-all relative text-md
    ${isActive ? "before:absolute before:inset-0 before:w-1 before:bg-accent before:rounded-r-full text-neutral" : "text-secondary-content"}`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`${isActive && "text-accent"}`}>{item?.icon}</span>
            <span className={`${isActive && "font-bold"} hidden sm:block`}>{item?.label}</span>
            {item?.badge && (
              <span className="badge badge-primary badge-sm ml-auto hidden sm:block">
                {item?.badge}
              </span>
            )}
          </>
        )}
      </NavLink>
    </>
  );
};

export default MyLink;
