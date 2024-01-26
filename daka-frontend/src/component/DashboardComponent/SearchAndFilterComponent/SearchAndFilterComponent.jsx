
import { FaRegBell  } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoGear } from "react-icons/go";

const SearchAndFilterComponent = ({ text = null }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-4 py-2  border-b-[0.5px] border-gray-300">
        
        <div className="flex flex-row items-center justify-center gap-5">
            <h1 className="text-gray-500 font-sm text-sm">OctoberFest</h1>

            { 
                text &&
                <div className="border-l-[1px] border-gray-300 pl-5">
                    <h1 className="text-gray-500 font-bold text-sm">{text}</h1>
                </div>
            }


        </div>

        <div className="flex flex-row items-center justify-center gap-10">

            <div className="flex flex-row">
                <input type="text" placeholder="Search" className="w-full pl-3 pr-32 py-1 rounded border-[2px] border-gray-150"/>
            </div>
            
            <div className="flex flex-row gap-7">
                    <span className="text-gray-600 text-[20px] cursor-pointer"><FaRegBell/></span>
                    <span className="text-gray-600 text-[20px] cursor-pointer"><FaRegQuestionCircle/></span>
                    <span className="text-gray-600 text-[20px] cursor-pointer"><GoGear /></span>
            </div>

        </div> 
     

    </div>
  )
}

export default SearchAndFilterComponent
