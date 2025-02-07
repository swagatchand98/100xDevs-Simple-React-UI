import Sidebar from "../component/sidebar"
import Profile from "../component/profile"
import Calender from "../component/calender"
import JoinCard from "../component/joinCard"

const Home = () => {

    return <div className="flex">
        <div className="">
        <Sidebar/>
        </div>

        <div className="bg-[url('https://s1.bwallpapers.com/thumbs2/2014/07/13/abstract-background_103144712.jpg')] bg-cover bg-center flex items-end">
            <div className="bg-white flex h-190 w-390">
              <div className="h-190 z-20 -translate-y-25">
                  <Profile/>
              </div>
      
              <div className="h-190">
                <div className="px-6 pt-7">
                    <div className="text-xl py-2">Monday,14 October</div>
                    <div className="text-4xl pt-2 text-blue-900">
                        Good monring, Prabhleen! &#x1F44B;
                    </div>
                </div>
                  <Calender/>
              </div>
      
              <div className="h-190 p-20 pt-30">
                  <JoinCard/>
              </div>
            </div>  
        </div>
    </div>
}

export default Home