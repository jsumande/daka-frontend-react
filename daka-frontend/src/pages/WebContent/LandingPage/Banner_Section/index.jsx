import { LandingPageDefaultImage } from "../../../../contants/imageContants"

import CenterItems from "../../../../component/Container/CenterItems"

import { FaCheck } from "react-icons/fa";

const index = () => {
  return (
    <div className="w-full flex flex-row h-[650px] relative">
        
        <div className="w-full flex justify-center absolute">
            <CenterItems>
                <div className="flex flex-col justify-center h-[650px]">
                    
                    <div className="flex flex-col max-[1060px]:w-7/12 max-[1060px]:gap-2 ">

                        <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Get your home service</h1>
                        <h1 className="text-5xl font-extrabold text-[#012939] mb-2">business running</h1>
                        <h1 className="text-5xl font-extrabold text-[#012939] mb-2"><span className="underline decoration-[#c1ff72] underline-offset-8">smoothly</span></h1>

                        <p className="my-8 text-[#012939] text-xl leading-8">Easier for you and your customers. Jobber helps you quote,<br/> schedule, invoice, and get paid—all in one place.</p>

                    </div>
                          
                    <div className="flex flex-row max-[1060px]:flex-col max-[1060px]:w-7/12 max-[1060px]:gap-2 ">

                        <input type={"text"} placeholder="Email" className="h-[55px] pl-6 pr-28" />

                        <div className="h-[55px] px-9 bg-[#012939] flex items-center justify-center">
                            <h1 className="font-bold text-xl text-[#c1ff72]">Try Jobber-it's free!</h1>
                        </div>

                    </div>

                    <div className="flex flex-row gap-10 mt-10">

                        <h1 className="flex flex-row gap-3 font-semibold text-md items-center text-[#012939]"><FaCheck color={"#c1ff72"}/> Get access to all features</h1>
                        <h1 className="flex flex-row gap-3 font-semibold text-md items-center text-[#012939]"><FaCheck color={"#c1ff72"}/> No credit card required</h1>

                    </div>

                </div>
            </CenterItems>
        </div>

      <div className="w-3/5 bg-[#f1f0eb] flex flex-row"></div>

      <div className="w-2/5">
        <img src={LandingPageDefaultImage.BANNERIMAGE} style={{ height : "100%" , width : "100%" , objectFit: 'cover'}} />
      </div>

    </div>
  )
}

export default index
