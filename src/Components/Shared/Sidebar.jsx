import React from "react";
import { BsListTask } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import MyLink from "./MyLink";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useAuth } from "../../Hooks/useAuth";

const menuItems = [
  {
    icon: <TbLayoutDashboardFilled size={18} />,
    label: "Dashboard",
    path: "/",
    badge: null,
  },
  {
    icon: <BsListTask size={18} />,
    label: "Tasks",
    path: "/tasks",
    badge: "12+",
  },
  {
    icon: <BsCalendar3 size={18} />,
    label: "Calendar",
    path: "/calendar",
    badge: null,
  },
  {
    icon: <IoAnalyticsSharp size={18} />,
    label: "Analytics",
    path: "/analytics",
    badge: null,
  },
  {
    icon: <HiOutlineUsers size={18} />,
    label: "Team",
    path: "/team",
    badge: null,
  },
];

const generalItems = [
  {
    icon: <IoSettingsOutline size={18} />,
    label: "Settings",
    path: "/settings",
  },
  { icon: <BiHelpCircle size={18} />, label: "Help", path: "/help" },
];

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className=" flex flex-col gap-6">
      {/* logo */}
      <div className="flex items-center gap-2 p-2">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/pulsar-gradient/48/connection-status-on.png"
          alt="connection-status-on"
        />

        <span className="text-xl font-semibold hidden sm:block">Donezo</span>
      </div>

      {/* menu section*/}
      <div>
        <p className="text-[12px] font-semibold text-base-300 px-4 pb-2 hidden sm:block">
          MENU
        </p>

        <menu>
          {menuItems.map((item, i) => (
            <MyLink item={item} key={i} />
          ))}
        </menu>
      </div>

      {/* general menu section*/}
      <div>
        <p className="text-[12px] font-semibold text-base-300 px-4 pb-2 hidden sm:block">
          GENERAL
        </p>

        <menu>
          {generalItems.map((item, i) => (
            <MyLink item={item} key={i} />
          ))}

          <button
            className="flex items-center gap-3 px-3 py-2 font-medium transition-all text-secondary-content cursor-pointer hover:text-red-400"
            onClick={() => logout()}
          >
            <span>
              <BiLogOut size={18} />
            </span>
            <span className="hidden sm:block">Logout</span>
          </button>
        </menu>
      </div>
    </div>
  );
};

export default Sidebar;
