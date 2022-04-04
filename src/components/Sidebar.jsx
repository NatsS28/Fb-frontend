import React from 'react'
import SidebarItem from './SidebarItem'
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";

function Sidebar() {
  return (
      <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]'>
          <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer '>
              <img
                  src={""}
                  height={40}
                  width={40}
                  className="rounded-full cursor-pointer"
                  alt={""}
              />
              <p className="hidden sm:inline-flex font-medium">
                  Nats
              </p>
          </div>
          <SidebarItem Icon={ImUsers} value="Friends" />
          <SidebarItem Icon={MdGroups} value="Groups" />
          <SidebarItem Icon={AiOutlineShop} value="MarketPlace" />
          <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
          <SidebarItem Icon={BsStopwatch} value="Memeries" />
          <SidebarItem Icon={MdOutlineExpandMore} value="See more" />
      </div>
      
  )
}

export default Sidebar