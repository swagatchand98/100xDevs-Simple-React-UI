import { GoHomeFill } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <div className="">
        
        <div className="md:hidden p-2" onClick={() => {setIsMenuOpen(x => !x); console.log(isMenuOpen);}}>
            {isMenuOpen ? <RxCross2 size={20}/> : <FiMenu size={20}/>}
        </div>

        <div className={`transition-all duration-500 -translate-x-85 md:translate-x-0 md:w-85 md:static fixed border-r-1 p-2.5 z-40 h-screen bg-white border-gray-300 ${isMenuOpen ? "translate-x-0 w-85 fixed " : "-translate-x-85"}`}>

              <div className={`flex justify-between rounded-2xl mb-10 mt-5 h-10`}>
                  
                  <div className="rounded-2xl h-8">
                      <img src="/src/assets/loginLogo.svg" alt="logo" />
                  </div>
      
                  <div className="rounded size-10">
                      <img src="/src/assets/pic.webp" alt="profile pic" />
                  </div>
              </div>
      
            <div className="">
              <div className=" flex justify-between rounded px-5 py-2 hover:bg-gray-200 bg-gray-200">
                  <div className="text-[#002A5A] text-xl ">
                      Home
                  </div>
                  <div>
                      <GoHomeFill className="size-6"/>
                  </div>
              </div>
      
              <div className=" flex justify-between rounded px-5 py-2 hover:bg-gray-200">
                  <div className="text-gray-400 text-xl ">
                      Webinars
                  </div>
                  <div>
                      <FaPeopleGroup className="size-6"/>
                  </div>
              </div>
      
              <div className=" flex justify-between rounded px-5 py-2 hover:bg-gray-200">
                  <div className="text-gray-400 text-xl ">
                      Billing
                  </div>
                  <div>
                      <MdOutlinePayment className="size-6"/>
                  </div>
              </div>
      
              <div className=" flex justify-between rounded px-5 py-2 hover:bg-gray-200">
                  <div className="text-gray-400 text-xl ">
                      User management
                  </div>
                  <div>
                  <TbUserSquare className="size-6"/>
                  </div>
              </div>
      
              <div className=" flex justify-between rounded px-5 py-2 hover:bg-gray-200">
                  <div className="text-gray-400 text-xl ">
                      Settings
                  </div>
                  <div>
                  <IoSettingsOutline className="size-6"/>
                  </div>
              </div>
            </div>
        </div>
    </div>
}  
  
export default Sidebar