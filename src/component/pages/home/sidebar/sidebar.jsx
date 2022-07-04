import React from 'react'
import {FaRss,FaCommentAlt,FaPlayCircle,FaUsers,FaBookmark,FaBriefcase,FaGraduationCap,FaQuestionCircle,FaIdCard} from 'react-icons/fa'
import "../../../../App.css"
function Sidebar() {
  return (
    <div className='sidebar h-[100vh] sticky top-[50px] ' >
        <div className="sidebarWrapper p-[20px] ">
            <ul className="sidebarList">
            <li className="sidebarListItem flex">
                <FaRss className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem flex">
                <FaCommentAlt className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem flex">
                <FaPlayCircle className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem flex">
                <FaUsers className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem flex">
                <FaBookmark className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem flex">
                <FaQuestionCircle className='sidebarIcon text-[17px] '/>
                <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem flex">
                <FaBriefcase className='sidebarIcon'/>
                <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem flex">
                <FaIdCard className='sidebarIcon'/>
                <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem flex">
                <FaGraduationCap className='sidebarIcon'/>
                <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidbarB  w-[100px] h-[40px] border-none rounded-[5px] font-semibold bg-gray-300 ">show more</button>
            <hr/>
             <ul className="sidebarFriendList m-0 p-0">
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom2.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Byiringiro Fabrice</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom3.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Ntwali  jean aime</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom4.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Ingabire nathale</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom5.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Isezerano Deborah</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom6.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Iradukunda sandrine</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom7.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">mugenzi celestin </span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom2.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Mere beatrice</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom8.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Ishimwe norbert</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/img1.jpg" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Knojoc gilbert</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/img9.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Irakoze Charite</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/img10.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Muhoza divine</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom2.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Benigne Teta</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom1.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Niyigena Grace</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom4.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Dulce Bernice</span>
                </li>
                <li className="sidebarFriend flex items-center mb-[15px]  ">
                    <img src="/hom3.avif" alt="" className='freindImage w-[32px] h-[32px] rounded-full object-cover mr-[10px] ' />
                    <span className="sidebarFriendName">Ndanyuzwe Bonheur</span>
                </li>
             </ul>
        </div>
        </div> 
  )
}

export default Sidebar