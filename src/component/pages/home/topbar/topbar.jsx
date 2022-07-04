import React from 'react'
import "../../../../App.css"
import {FaSearch,FaUserAlt,FaBell,FaBookOpen}from 'react-icons/fa'

function Topbar() {
  return (
    <div className=' topbarContainer h-[50px] w-[100%] bg-[#1877f2] flex align-middle sticky top-0 z-[999] '>
    <div className="topbarLeft  ">
      <span className="logo  text-[24px] ml-[20px] font-bold cursor-pointer text-white">wasup</span>
    </div>
    {/* ____________searchbar_________ */}
    <div className="topbarCenter mt-2 ">
      <div className="SearchBar w-[100%] bg-white h-[30px] rounded-[30px] flex text-center  ">
      <FaSearch className='search text-[20px] ml-[10px]     '/>
      <input type="text" placeholder='Search for friend,post or video' className='searchInput border-none w-[70%] flex   '/>
      </div>
    </div>


{/* _________topbabar____ */}
    <div className="topbarRight items-center justify-around text-white flex ">
    <div className="topbarLinks">
      <span className="topbarLink mr-[10px] text-[14px] cursor-pointer ">Homepage</span>
      <span className="topbarLink mr-[10px] text-[14px] cursor-pointer ">Timeline</span>
    </div>
    <div className="topbarIcons flex">
    <div className="topbarIconItem mr-[15px] cursor-pointer relative   ">
    <FaUserAlt  className='text-[18px] '/>
    <span className="topbarIconBadge w-[15px] h-[15px] bg-red-700 rounded-full absolute top-[-5px] right-[-5px] justify-center text-[12px] flex  ">1</span>
    </div>

    <div className="topbarIconItem mr-[15px] cursor-pointer relative   ">
    <FaBookOpen className='text-[18px] '/>
    <span className="topbarIconBadge w-[15px] h-[15px] bg-red-700 rounded-full absolute top-[-5px] right-[-5px] justify-center text-[12px] flex  ">2</span>
    </div>

    <div className="topbarIconItem mr-[15px] cursor-pointer relative   ">
    <FaBell  className='text-[19px] ' />
    <span className="topbarIconBadge w-[15px] h-[15px] bg-red-700 rounded-full absolute top-[-5px] text-white right-[-5px] justify-center text-[12px] flex    ">3</span>
    </div>
    </div>
    <img src="/hom1.avif"   alt="" className='topbarimg w-[32px] h-[33px] rounded-full object-cover cursor-pointer ' />
    </div>
    </div>
  )
}

export default Topbar