
import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

import { FaCheck } from "react-icons/fa";


const index = () => {
  return (
    <CenterItems>

        <div className="bg-[#84ea00] rounded px-24 py-10 flex flex-col gap-4">

            <Header text={"Start using Jobber free"}/>

            <div className="w-full flex flex-row gap-6">

                <div className="flex flex-row max-[1060px]:flex-col max-[1060px]:w-8/12 max-[1060px]:gap-2 ">

                    <input type={"text"} placeholder="Email Address" className="h-[64px] pl-6 pr-24" />

                    <div className="h-[64px] px-16 bg-[#012939] flex items-center justify-center">
                        <h1 className="font-bold text-xl text-white">START NOW</h1>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-[#012939] flex flex-row items-center gap-2"> <FaCheck/> Access to all features</h1>
                    <h1 className="text-[#012939] flex flex-row items-center gap-2"> <FaCheck/> Unlimited 1-on-1 support</h1>
                    <h1 className="text-[#012939] flex flex-row items-center gap-2"> <FaCheck/> No credit card required</h1>
                </div>

            </div>

        </div>

    </CenterItems>
  )
}

export default index
