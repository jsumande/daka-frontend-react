import CenterItems from "../../../../../component/Container/CenterItems"

import { IoMdArrowRoundForward } from "react-icons/io";

import { FeaturesDefaultImage } from "../../../../../contants/imageContants"

const IntegrationsWork = () => {
  return (
    <div className="w-full bg-[#f3f3f3] flex flex-col items-center">
    <CenterItems biggerScreen={true}>

    <div className="w-full py-10 flex flex-col gap-10">
            
            <div className="w-full flex flex-col items-center gap-4">
                <h1 className="text-5xl font-extrabold text-[#012939] text-center">What is field service CRM <br/>software?</h1>
                
                <p className="text-[#012939] font-md text-md text-center">Field service CRM software like Jobber helps you keep a clean and organized client history so that you <br/> never lose touch with the core of your business—your clients.</p>
                <p className="text-[#012939] font-md text-md text-center">With Jobber, your team has access to important client details from the field without phone calls back to the <br/> office. That helps you provide a professional, reliable experience to every customer.</p>
            
            </div>

            <div className="w-full grid grid-cols-2 gap-4 mt-5">

                <div className="w-full flex flex-col item-center bg-white rounded">

                    <div className="w-full flex flex-col bg-[#012939] py-4 px-7">
                        <h1 className='text-white font-extrabold text-3xl' >For your <span className="underline decoration-[#84ea00]">Business</span>:</h1>
                    </div>

                    <div className="w-full px-10 py-4 flex flex-col">

                        <ul className="list-disc flex flex-col gap-5">
                            <li className="font-md text-md text-[#012939]">Let team members self-serve the information needed to get the job done right</li>
                            <li className="font-md text-md text-[#012939]">Track the client details that matter most to your business</li>
                            <li className="font-md text-md text-[#012939]">Save time and headaches with client profiles that are always up-to-date with work and communication history</li>
                        </ul>

                    </div>

                </div>

                <div className="w-full flex flex-col item-center bg-white rounded">

                    <div className="w-full flex flex-col bg-[#012939] py-4 px-7">
                        <h1 className='text-white font-extrabold text-3xl' >For your <span className="underline decoration-[#84ea00]">Customer</span>:</h1>
                    </div>

                    <div className="w-full px-10 py-4 flex flex-col">

                        <ul className="list-disc flex flex-col gap-5">
                            <li className="font-md text-md text-[#012939]">Get a personalized experience and consistent customer service</li>
                            <li className="font-md text-md text-[#012939]">Avoid the hassle of providing contact details more than once</li>
                            <li className="font-md text-md text-[#012939]">Trust that personal client information is only accessible to team members who need it</li>
                        </ul>

                    </div>

                </div>

            </div>
            
        </div>

        <div className="w-full py-10 flex flex-col gap-10">
            
            <div className="w-full flex flex-col items-center gap-4">
                <h1 className="text-5xl font-extrabold text-[#012939]">Integrations that fit the way you work</h1>
                <p className="text-[#012939] font-md text-lg">Jobber connects with your favorite apps and software to save you time.</p>
            </div>

            <div className="w-full grid grid-cols-4 gap-4 mt-10">

                <div className="w-full flex flex-col item-center justify-center gap-6 bg-white py-5 px-6 rounded relative">

                    <div className="w-full flex items-center justify-center flex-col">
                        <img src={FeaturesDefaultImage.FEATURESQUICKBOOKS}  style={{ maxHeight : '115px' , maxWidth : '250px' }} />
                    </div>

                    <p className="text-center text-black text-md ">Easily sync customer, invoice, and payment information between Jobber and QuickBooks Online.</p>

                    <div className="flex flex-row items-center justify-center cursor-pointer px-6 mb-5">
                        <h1 className='text-[#012939] pr-2 font-bold text-lg' >Learn More</h1>
                        <span className="text-[#84ea00] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>
        
                </div>

                <div className="w-full flex flex-col item-center justify-center gap-6 bg-white py-5 px-6 rounded relative">

                    <div className="w-full flex items-center justify-center flex-col">
                        <img src={FeaturesDefaultImage.FEATURESFLEETSHARP}  style={{ maxHeight : '115px' , maxWidth : '250px' }} />
                    </div>

                    <p className="text-center text-black text-md ">Use FleetSharp’s live GPS tracking to know where your team is in real time.</p>

                    <div className="flex flex-row items-center justify-center cursor-pointer px-6 mb-5">
                        <h1 className='text-[#012939] pr-2 font-bold text-lg' >Learn More</h1>
                        <span className="text-[#84ea00] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>
        
                </div>

                <div className="w-full flex flex-col item-center justify-center gap-6 bg-white py-5 px-6 rounded relative">

                    <div className="w-full flex items-center justify-center flex-col">
                        <img src={FeaturesDefaultImage.FEATURESZAPIER}  style={{ maxHeight : '115px' , maxWidth : '250px' }} />
                    </div>

                    <p className="text-center text-black text-md ">Save time when you move info automatically between Jobber and 1,500+ web apps.</p>

                    <div className="flex flex-row items-center justify-center cursor-pointer px-6 mb-5">
                        <h1 className='text-[#012939] pr-2 font-bold text-lg' >Learn More</h1>
                        <span className="text-[#84ea00] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>
        
                </div>

                <div className="w-full flex flex-col item-center justify-center gap-6 bg-white py-5 px-6 rounded relative">

                    <div className="w-full flex items-center justify-center flex-col">
                        <img src={FeaturesDefaultImage.FEATURESMAILCHIMP}  style={{ maxHeight : '115px' , maxWidth : '250px' }} />
                    </div>

                    <p className="text-center text-black text-md ">Find more customers with ready-to-run email marketing campaigns, postcards, Facebook ads, and more.</p>

                    <div className="flex flex-row items-center justify-center cursor-pointer px-6 mb-5">
                        <h1 className='text-[#012939] pr-2 font-bold text-lg' >Learn More</h1>
                        <span className="text-[#84ea00] text-2xl mt-1"><IoMdArrowRoundForward /></span>
                    </div>
        
                </div>


            </div>
            

            <div className="flex flex-col items-center w-full justify-center">

                <div className="py-3 px-10 bg-[#012939] flex items-center justify-center rounded">
                    <h1 className="font-bold text-xl text-[#84ea00]">See All Integrations</h1>
                </div>
            
            </div>
           

        </div>

    </CenterItems>
    </div>
  )
}

export default IntegrationsWork
