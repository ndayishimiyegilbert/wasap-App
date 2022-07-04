import React from 'react'
import "../../App.css";
import {FaImages,FaTag,FaMapMarkerAlt,FaGrinBeamSweat} from 'react-icons/fa'
function Share() {
  return (
    <div className='share w-[100%] h-[170px]  '>
        <div className="shareWrapper  p-[10px]     ">
            <div className="shareTop flex items-center">
                <img src="/hom5.avif" alt="" className='shareProfileImg  w-[50px] h-[50px] rounded-full object-cover mr-[10px]  '  />
                <input type="text"className='shareInput border-none w-[80%] 'placeholder='what`s in your mind' />
            </div>
            <p className='shareHr'></p>
            {/* ________bottom______ */}
            <div className="shareBottom  flex items-center justify-between">
                  <div className="shareOptions flex ml-[20px] ">
                    <div className="shareOption flex items-center mr-[15px] cursor-pointer ">
                      <FaImages className='shareIcon text-[tomato]  mr-[6px] text-[19px] '/>
                    <span className='shareOptionTest'>photo or video</span>
                    </div>
                    <div className="shareOption flex items-center mr-[15px] cursor-pointer ">
                      <FaTag className='shareIcon text-[blue]  mr-[6px] text-[19px] '/>
                    <span className='shareOptionTest'>Tag</span>
                    </div>
                    <div className="shareOption flex items-center mr-[15px] cursor-pointer ">
                      <FaMapMarkerAlt className='shareIcon text-[green] mr-[6px] text-[19px]  '/>
                    <span className='shareOptionTest'>Location</span>
                    </div>
                    <div className="shareOption flex items-center mr-[15px] cursor-pointer ">
                      <FaGrinBeamSweat className='shareIcon text-[orange] mr-[6px] text-[19px]  '/>
                    <span className='shareOptionTest'>Feelings</span>
                    </div>
                  </div>
                  <button className="shareButton border-none p-[7px] rounded-[5px] bg-green-700 font-[500] cursor-pointer text-white ">Share</button>
            </div>
            
        </div>
    </div>
  )
}

export default Share