
import { FaPlus , FaHouse , FaRegCalendar , FaRegAddressBook , FaHammer , FaRegClock , FaArrowLeft } from "react-icons/fa6";
import { GoDesktopDownload , GoGraph } from "react-icons/go";
import { BsChatQuote } from "react-icons/bs";
import { TbFileDollar } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";


const SidebarContainer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between item-start">

     <div className="w-full">

        <div className="w-full p-3 border-b-[0.5px] border-gray-200">
            <h1 className="text-white font-bold text-lg">LOGO</h1>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-5 mt-5 border-b-[0.5px] border-gray-200 pb-5">

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-[#7db00e] hover:text-white">
              <span className="text-lg"><FaPlus/></span>
              <h1 className="font-semibold text-md">Create</h1>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><FaHouse/></span>
              <a href="home" className="font-semibold text-md">Home</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><FaRegCalendar/></span>
              <a href="schedule" className="font-semibold text-md">Schedule</a>
            </div>
          </div>

          
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-5 mt-5 border-b-[0.5px] border-gray-200 pb-5">

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><FaRegAddressBook/></span>
              <a href="clients" className="font-semibold text-md">Clients</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><GoDesktopDownload/></span>
              <a href="requests" className="font-semibold text-md">Requests</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><BsChatQuote/></span>
              <a href="quotes" className="font-semibold text-md">Quotes</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><FaHammer/></span>
              <a href="jobs" className="font-semibold text-md">Jobs</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><TbFileDollar/></span>
              <a href="invoices" className="font-semibold text-md">Invoices</a>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col items-start justify-start gap-5 mt-5">

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><GoGraph/></span>
              <a href="reports" className="font-semibold text-md">Reports</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><RiMoneyDollarBoxLine/></span>
              <a href="expenses" className="font-semibold text-md">Expenses</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><FaRegClock /></span>
              <a href="timesheets" className="font-semibold text-md">Timesheets</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-5 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white hover:text-gray-300">
              <span className="text-lg"><AiOutlineAppstoreAdd/></span>
              <a href="apps" className="font-semibold text-md">Apps</a>
            </div>
          </div>

        </div>

        </div>

        <div className="flex flex-col items-center justify-center w-full">
            <div className="pl-3 pb-3 flex flex-row items-center justify-start w-full cursor-pointer gap-4 text-white">
              <a href="/" className="text-lg"><FaArrowLeft/></a>
            </div>
          </div>

    </div>
  )
}

export default SidebarContainer
