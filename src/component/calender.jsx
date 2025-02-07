import { SlCalender } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./card";


export default function Calender(){

    return <Card>
        <CalenderComp/>
    </Card>
}

const CalenderComp = () => {

    return <div className="p-2">
            <div className="flex w-full bg-gray-300 h-10 rounded justify-between items-center px-5">
                <div>
                    <SlCalender/>
                </div>
                <div>
                    <input type="date" />
                </div>
                <div className="flex">
                    <div>
                        <FaArrowLeft size={25}/>
                    </div>
                    <div>
                        <FaArrowRight size={25}/>
                    </div>
                </div>
            </div>

            <div>
                <SheduleCard/>
            </div>
    </div>
}

const Shedule = ({isLive, Task}) => {

    return <div className="flex p-2">
        <div className="p-3">
            <div>11:30 AM</div>
            <div>11:30 AM</div>
        </div>

        <div className="w-0.5 h-20 bg-gray-300" />

        <div className="p-3">
            <div>{isLive}</div>
            <div>{Task}</div>
        </div>
    </div> 
}

const SheduleCard = () => {

    return <div className="w-150">

        <Shedule isLive={'Live'} Task={'Ux Webinar'}/>
        <div className="w-full h-0.5 bg-gray-300" />
        <Shedule isLive={'Live'} Task={'My first Webinar'}/>
        <div className="w-full h-0.5 bg-gray-300" />
        <Shedule isLive={'Live'} Task={'Important Webinar'}/>
        <div className="w-full h-0.5 bg-gray-300" />
        <Shedule isLive={'Live'} Task={'Webinar 1'}/>
    </div>
}