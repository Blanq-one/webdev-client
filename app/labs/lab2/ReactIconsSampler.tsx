import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { IoGameController } from "react-icons/io5";
import { PiSoccerBall } from "react-icons/pi";
import { MdSettings } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div className="flex gap-3 mt-2">
        <IoGameController className="text-4xl text-green-600" />
        <PiSoccerBall className="text-4xl text-green-600" />
      </div>
      <div id="wd-ai-icons" className="flex gap-3 mt-2">
        <MdSettings className="text-4xl text-blue-600" />
        <HiOutlineBell className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
