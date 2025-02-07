import Card from "./card"
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";


const JoinCard = () => {

    return <div>
        <Card>
        <JoinComp/>
        </Card>
    </div>
}

const JoinComp = () => {

    return <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5">
        <div className="">
        <div className="flex justify-center items-center"><Btn comp={<RiCalendarScheduleFill size={25}/>}/></div>
            <div className="flex justify-center items-center p-2">Schedule Webinar</div>
        </div>

        <div className="">
        <div className="flex justify-center items-center"><Btn comp={<FaPlus size={25}/>}/></div>
            <div className="flex justify-center items-center p-2">Join Webinar</div>
        </div>

        <div className="">
            <div className="flex justify-center items-center"><Btn comp={<TfiVideoClapper size={25}/>}/></div>
            <div className="flex justify-center items-center p-2">Open Recordings</div>
        </div>
    </div>
}

const Btn = ({comp}) => {

    return <div className="size-13 bg-teal-400 rounded hover:bg-teal-600 p-2 flex justify-center items-center">
        {comp}
    </div>
}

export default JoinCard