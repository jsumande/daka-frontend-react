import CenterItems from "../../../../../component/Container/CenterItems"
import { FaCheck } from "react-icons/fa";

import { FeaturesDefaultImage } from "../../../../../contants/imageContants";

const TrialStartJobber = () => {
  return (
    <div className="w-full bg-[#012939]  flex flex-col items-center">

        <CenterItems biggerScreen={true}>
            <div className="w-full flex flex-row gap-10 py-10">

                <div className="w-8/12 flex flex-col gap-3">
                    
                    <h1 className="text-4xl font-extrabold text-white">Start using Jobber free</h1>

                    <div className="flex flex-row">

                        <input type={"text"} placeholder="Email" className="py-5 pl-6 pr-96" />

                        <div className="py-5 px-9 bg-[#c1ff72] flex items-center justify-center">
                            <h1 className="text-xl text-[#012939]"><span className="font-bold ">Try Jobber-</span><span className="italic ">it's free!</span></h1>
                        </div>

                    </div>

                </div>

                <div className="w-4/12  flex flex-row gap-3 items-center">
                    
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="flex flex-row gap-3 font-semibold text-xl items-center text-white"><FaCheck color={"#c1ff72"}/> All the features</h1>
                        <h1 className="flex flex-row gap-3 font-semibold text-xl items-center text-white"><FaCheck color={"#c1ff72"}/> All the support</h1>
                        <h1 className="flex flex-row gap-3 font-semibold text-xl items-center text-white"><FaCheck color={"#c1ff72"}/> No credit card required</h1>
                        
                    </div>

                    <img src={FeaturesDefaultImage.FEATURESEASYTRIALJOBBER} style={{ maxHeight : '98px' , maxWidth :'206px' }}/>
                        
                </div>

            </div>
            
        </CenterItems>
      
    </div>
  )
}

export default TrialStartJobber
