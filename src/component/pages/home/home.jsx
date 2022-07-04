import Topbar from "./topbar/topbar"
import Sidebar from "./sidebar/sidebar"
import Feed from "./feed/feed"
import Rightbar from "../../rightbar/rightbar"


function Home() {
  return (
    <div>
      <Topbar/> 
      <div className="homeContainer flex w-[100%]   ">
      <Sidebar/>
      <Feed/>
      <Rightbar/>

      </div>
    </div>
  )
}

export default Home