import {React,useState} from 'react'
import "../../App.css";
import {FaEllipsisV} from "react-icons/fa"
import {users} from "../pages/home/topbar/dumyData"



function Post({Post}) {
    const[like,setLike]=useState(Post.like)
    const[isliked,setIsliked]=useState(false)
    const likeHandler=()=>{
        setLike(isliked ? like-1 : like+1)
        setIsliked(!isliked)
    }
console.log(Post);
  return (
    <div className="all">

    <div className="Post overflow-y-scroll     ">
        <div className="postWrapper1  ">
            <div className="postWrapper p-[10px] ">

            <div className="postTop flex items-center justify-between">
                <div className="postTopLeft flex items-center">
                    <img src={users.filter((u)=>u.id===Post.userId)[0].profilePicture}  alt="" className='postProfileImg w-[32px] h-[32px] rounded-full object-cover ' />
                    <span className="postUsername text-[15px] font-[500] m-[0px 10px] mr-[5px] ml-[10px] ">{users.filter((u)=>u.id===Post.userId)[0].username} </span>
                    <span className="postDate text-[12px]  ">{Post.date}</span>
                    
                </div>
                <div className="postTopRight">
                <FaEllipsisV/>
                </div>

            </div>
            <div className="postCenter m-[20px 0] ">
                <span className="postText">{Post?.desc}</span>
                <img src={Post.photo} alt="" className='postImg min-w-[100%] h-[500px]  object-cover mt-[20px]  ' />
            </div>
            <div className="postBottom flex items-center justify-between">
                <div className="postBottomLeft flex ">
                    <img src="/like.jpg" alt="" className='likeIcon  h-[24px] w-[24px] mr-[5px] cursor-pointer  ' onClick={likeHandler} />
                    <img src="/heart.jpg" alt="" className='likeIcon h-[24px] w-[24px] mr-[5px] cursor-pointer  ' onClick={likeHandler}/>
                    <span className='postLikeCounter text-[15px]  '>{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText cursor-pointer  ">{Post.comment}</span>
                </div>
            </div>


            </div>
        </div>
    </div>
    {/* _______user2__________ */}
   
    </div>
  )
}

export default Post