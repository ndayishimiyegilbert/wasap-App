import React from 'react'
import "../../App.css"

function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
      </>
    )

      
    
  }
  const ProfileRightbar=()=>{
    return (
      <>
    <h4 className='rightbarTitle'>user information</h4>
    <div className="rightbarInfo mb-[30px]">
      <div className="rightbarInfoItem  ">
        <span className="rightbarInfoKey">city</span>
        <span className="rightbarInfoValue">New york</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Releationship</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>

    
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/p1.avif" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/p2.avif" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/p3.avif" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/star2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
    </div>
    <div className='flex'>

      <div className="rightbarFollowing">
        <img src="/p4.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/p6.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/p5.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/star1.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">John Carter</span>
      </div>
    </div>
      </>
    )
  }
  return (
    <div className='rightbar'> 
       <div className="rightbarWrapper p-[20px 20px   0 0] ">
      <ProfileRightbar/>
     
       </div>

    </div>
  )
}

export default Rightbar