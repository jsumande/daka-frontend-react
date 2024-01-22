
import CenterItems from "../../../../../component/Container/CenterItems"

import { IoMdArrowRoundForward } from "react-icons/io";

import { FeaturesDefaultImage } from "../../../../../contants/imageContants"

const FreeResources = ({ content }) => {
  return (
    <CenterItems biggerScreen={true}>
        <div className="w-full py-10 flex flex-col gap-10">

            <div className="w-full flex flex-col items-center gap-4">
                <h1 className="text-5xl font-extrabold text-[#012939]">Free Resources</h1>
                <p className="text-[#012939] font-md text-lg">Resources and support to make running your business easier.</p>
            </div>

            <div className="w-full grid grid-cols-4 gap-4 mt-10">

                <div className="w-full flex flex-col item-start justify-center gap-8 bg-[#012939] py-7 px-6 rounded">

                    <div className="flex flex-col">
                        <h1 className='text-white pr-5 font-extrabold text-3xl' >Free Work</h1>
                        <h1 className='text-white pr-5 font-extrabold text-3xl' >Order Template</h1>
                    </div>

                    <div className="flex flex-col items-center mb-16">
                        <img src={FeaturesDefaultImage.FEATURESFREERESOURCES} style={{ maxHeight : '253px' , maxWidth : '225px' }} />
                    </div>

                    <div className="flex flex-row items-center cursor-pointer">
                        <h1 className='text-white pr-5 font-bold text-lg' >Use Free Template</h1>
                        <span className="text-[#c1ff72] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>

                </div>

                { content?.free_resources?.map(  (item , key ) => (
                    <div key={key} className="w-full flex flex-col gap-6 bg-[#f1f0eb] rounded relative">

                        <div className="w-full h-[177px]">
                            <img src={FeaturesDefaultImage.FEATURESSTAYCOMPETITIVE} className="rounded-tl rounded-tr w-full h-full" />
                        </div>

                        <div className="flex flex-col px-6 gap-2">
                            <h1 className="text-[#012939] pr-5 font-extrabold text-2xl">{item?.title}</h1>
                            <p className="text-[#012939] font-bold text-sm">{item?.minutes}</p>
                        </div>

                        <div className="flex flex-col px-6">
                            <p className="text-[#012939] font-md text-md">{item?.details}</p>
                        </div>

                        <div className="flex flex-row items-center cursor-pointer px-6 absolute bottom-7">
                            <h1 className='text-[#012939] pr-5 font-bold text-lg' >Read Now</h1>
                            <span className="text-[#c1ff72] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                        </div>

                    </div>
                )) } 
         
                {/* <div className="w-full flex flex-col gap-6 bg-[#f1f0eb] rounded relative">

                    <div className="w-full h-[177px]">
                        <img src={FeaturesDefaultImage.FEATURESFREEAPPOINTMENT} className="rounded-tl rounded-tr w-full h-full" />
                    </div>

                    <div className="flex flex-col px-6 gap-2">
                        <h1 className="text-[#012939] pr-5 font-extrabold text-2xl">8 Free Appointment Reminder Templates</h1>
                        <p className="text-[#012939] font-bold text-sm">6 MIN READ</p>
                    </div>

                    <div className="flex flex-col px-6">
                        <p className="text-[#012939] font-md text-md">Reduce no-shows and improve customer service using these email templates and tips.</p>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer px-6 absolute bottom-7">
                        <h1 className='text-[#012939] pr-5 font-bold text-lg' >Read Now</h1>
                        <span className="text-[#c1ff72] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>

                </div>   

                <div className="w-full flex flex-col gap-6 bg-[#f1f0eb] rounded relative">

                    <div className="w-full h-[177px]">
                        <img src={FeaturesDefaultImage.FEATURESLAWNSURGEON} className="rounded-tl rounded-tr w-full h-full" />
                    </div>

                    <div className="flex flex-col px-6 gap-2">
                        <h1 className="text-[#012939] pr-5 font-extrabold text-2xl">CRM Software Case Study: SEF the Lawn Surgeon</h1>
                        <p className="text-[#012939] font-bold text-sm">5 MIN READ</p>
                    </div>

                    <div className="flex flex-col px-6">
                        <p className="text-[#012939] font-md text-md">Find out how Jobber helped this lawn care entrepreneur impress and retain more customers.</p>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer px-6 absolute bottom-7">
                        <h1 className='text-[#012939] pr-5 font-bold text-lg' >Read Now</h1>
                        <span className="text-[#c1ff72] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>

                </div> */}

            </div>

            <div className="flex flex-col items-center w-full justify-center">
                <div className="py-3 px-10 bg-[#012939] flex items-center justify-center rounded">
                    <h1 className="font-bold text-xl text-[#84ea00]">See All Free Resources</h1>
                </div>
            
            </div>
           
        </div>
    </CenterItems>
  )
}

export default FreeResources
