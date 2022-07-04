import React from 'react'
import "../../../../App.css"
import Topbar from "../topbar/topbar"
import Sidebar  from '../sidebar/sidebar'
import Feed from "../feed/feed"
import Rightbar from '../../../rightbar/rightbar'



function Profile() {
  return (
    <>
      <Topbar/> 
    <div className='profile flex'>
      <Sidebar/>
      <div className="profileRight flex-[9] ">
        <div className="profileRighttop">
            <div className="profileCover h-[320px] relative  ">
 
            <img className='profileCoverimg w-[100%] h-[250px] object-cover  ' src="./m2.avif" alt="" />
            <img className='profileUserimg w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] ' src="./m3.avif" alt="" />

            </div>
            <div className="profileInfo flex  flex-col justify-center align-center ml-[45%]  mt-[-2%]  ">
                <h4 className="profileInfoName font-bold text-[20px] ">Mucyo arsene</h4>
                <div className="profileInfoDesc ml-3 ">Hello friends</div>
            </div>
        </div>
        <div className="profileRightBottom flex">

      <Feed/>
      <Rightbar profile/>
        </div>
      </div>

    </div>
    </>
  )
}

export default Profile