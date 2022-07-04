import React from 'react'
import "../../../../App.css"
import Share from "../../../share/share"
import Post from "../../../post/post"
import {Posts} from"../../../pages/home/topbar/dumyData"
function Feed() {
  return (
    <div className='feed'>
        <div className="feedwrapper p-[20px] ">
            <Share/>
            {Posts.map(p=>(
              <Post key={p.id} Post={p} />
            ))}
          

            

        </div>

    </div>
  )
}

export default Feed