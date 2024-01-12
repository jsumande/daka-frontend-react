import CenterItems from "../../../../component/Container/CenterItems"

import { LandingPageDefaultImage } from "../../../../contants/imageContants"

const index = () => {
  return (
    <div className="w-full h-svh bg-[#012939] flex flex-col items-center">

        <CenterItems>

            <div className="w-full flex flex-col items-center my-8">

                <h1 className="text-5xl font-extrabold text-white text-center ">Provide an <span className="underline decoration-[#c1ff72] underline-offset-8">easy</span> and professional customer experience</h1>
                <p className="text-center my-8 text-white text-xl leading-8">Jobber keeps things organized as you move through each stage of a job, and <br/> you only enter customer and job details once.</p>
                <img src={LandingPageDefaultImage.PROVIDE_AN_EASY}/>

                <div className="flex flex-col items-center justify-center mt-10 cursor-pointer rounded border-2 border-white text-white hover:bg-white hover:text-[#012939]">
                    <h1 className="px-40 py-3 font-bold">SEE ALL FEATURES</h1>
                </div>

            </div>


        </CenterItems>
    </div>
  )
}

export default index
