import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

import { LandingPageDefaultImage } from "../../../../contants/imageContants"

const index = () => {
  return (

    <CenterItems>

        <div className="w-full flex flex-col">

            <div className="w-full flex flex-col">
                <Header text={"Free Resources"} />
                <h1 className="text-black my-2">Resources and support to make running your business easier.</h1>
            </div>

            <div className="w-full flex flex-col items-end bg-">

                <div className="w-2/12 max-[1050px]:w-4/12 cursor-pointer border-2 flex items-center flex-col border-[#012939] rounded py-1 hover:bg-[#012939]">
                    <h1 className="text-black text-lg font-md hover:text-white">See All Resources</h1>
                </div>
            
            </div>
    
        </div>

        <div className="w-full grid grid-cols-2 max-[1050px]:grid-cols-1 my-3 gap-3">

        <div className="border-[3px] border-[#6cbf01] flex flex-col rounded gap-3 w-full h-[330px] relative top-1">

            <div className="px-10 mt-8" style={{ zIndex: 5 }}>

            <Header text={"Salary Guides"} />

            <h1 className="text-black my-5">Up-to-date U.S. salary reports to help your service business hire and retain a great team.</h1>

            <div className="w-3/12 cursor-pointer bg-[#c1ff72] flex items-center flex-col rounded py-2">
                <h1 className="text-[#012939] text-md font-md font-bold">See Guides</h1>
            </div>

            </div>

            <img src={LandingPageDefaultImage.SALARY_GUIDES} className="absolute bottom-0 h-full w-full" style={{ zIndex: 3 }}/>
        
        </div>

        <div className="flex flex-row max-[750px]:flex-col justify-between w-full gap-4">

            <div className="flex flex-col gap-2 w-full">

                <div className="bg-[#f3f3f3] flex flex-col px-5 py-8 rounded relative cursor-pointer">

                <h1 className="font-semibold text-sm text-gray-500">FREE TOOL</h1>
                <h1 className="font-bold text-xl text-[#012939]">Invoice</h1>
                <h1 className="font-bold text-xl text-[#012939]">Generator</h1>
    
                </div>

                <div className="bg-[#f3f3f3] flex flex-col px-5 py-8 rounded relative cursor-pointer">

                <h1 className="font-semibold text-sm text-gray-500">FREE TOOL</h1>
                <h1 className="font-bold text-xl text-[#012939]">Invoice</h1>
                <h1 className="font-bold text-xl text-[#012939]">Generator</h1>
    
                </div>

            </div>

            <div className="flex flex-col max-[750px]:flex-row flex-wrap w-full">

                <div className="flex flex-col px-5 py-6 rounded relative cursor-pointer">

                <h1 className="font-semibold text-sm text-gray-500">6 MIN READ</h1>
                <h1 className="font-bold text-md text-[#012939]">How to Write an Invoice:7</h1>
                <h1 className="font-bold text-md text-[#012939]">Easy Steps</h1>

                </div>

                <div className="flex flex-col px-5 py-6 rounded relative cursor-pointer">

                <h1 className="font-semibold text-sm text-gray-500">6 MIN READ</h1>
                <h1 className="font-bold text-md text-[#012939]">How to Write an Invoice:7</h1>
                <h1 className="font-bold text-md text-[#012939]">Easy Steps</h1>

                </div>
                
                <div className="flex flex-col px-5 py-6 rounded relative cursor-pointer">

                <h1 className="font-semibold text-sm text-gray-500">6 MIN READ</h1>
                <h1 className="font-bold text-md text-[#012939]">How to Write an Invoice:7</h1>
                <h1 className="font-bold text-md text-[#012939]">Easy Steps</h1>

                </div>

            </div>

        </div>

        </div>

  </CenterItems>
  )
}

export default index
