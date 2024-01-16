import CenterItems from "../../component/Container/CenterItems"

import { LandingPageDefaultImage , AuthDefaultImage } from "../../contants/imageContants"
import { FaCheck } from "react-icons/fa";

const RegistrationPage = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col'>

        <div className='w-full bg-white flex flex-col items-center py-5'>
            <CenterItems>

                <div className='flex flex-row justify-between items-center'>
                    <a href="/" className='text-[#012939] pr-5 font-extrabold cursor-pointer text-2xl' >JOBBER</a>
                    <h1 className='text-[#012939] pr-5 font-md cursor-pointer text-md' >Already have a Jobber account? <a href="/auth/login" className="font-bold underline text-[#7db00e]">Log In</a></h1>
                </div>

            </CenterItems>
        </div>


        <div className="w-full h-full flex flex-row relative">

            <div className="w-8/12">
                <img src={AuthDefaultImage.SIGNUPPAGEHERO} style={{ height : "100%" , width : "100%" , objectFit: 'cover'}} />
            </div>

            <div className="w-4/12 bg-[#012939] flex flex-row"></div>
        
        <div className="w-full flex justify-center absolute">
            <CenterItems biggerScreen={true}>
                <div className="w-full flex flex-row justify-around items-center gap-7">
                    
                    <div className="flex flex-col w-full">
                        <h1 className="text-5xl font-extrabold text-white mb-2">Make home service run smoothly, for you and your customers</h1>
                    </div>

                    <div className="flex flex-col w-full p-20">

                        <div className="flex flex-col items-center bg-white border-gray-300 border-8 py-10 gap-10">

                            <h1 className="bg-[#c1ff72] text-[#012939] font-extrabold text-2xl px-3 py-1 rounded">Try Jobber Free Today</h1>

                            <div className="flex flex-start flex-col w-full px-10 gap-5">
                                <input type={"email"} placeholder="Work Email" className="py-5 border border-gray-200 rounded px-4 hover:border-[#012939]"/>
                                <input type={"password"} placeholder="Add a Password" className="py-5 border border-gray-200 rounded px-4 hover:border-[#012939]"/>
                                
                                <div className="py-5 px-9 bg-[#012939] flex items-center justify-center">
                                    <h1 className="font-bold text-xl text-[#c1ff72]">Start Free Trial</h1>
                                </div>
                            
                            </div>

                            <h1 className="text-[#012939] font-bold text-md">Access all features. No credit card required.</h1>
       
                        </div>
                       
                    </div>


                </div>
            </CenterItems>
        </div>

        <div className="w-full flex justify-center absolute bottom-[0.01px] bg-white text-center py-5">
        <p className="w-2/3">By clicking "Start Free Trial" I agree to Jobber’s <span className="underline text-sky-500">Terms of Service</span> and <span className="underline text-sky-500">Privacy Policy</span>. I understand that Jobber may contact my business by email, SMS and phone using the information I have provided. Message & data rates may vary. For help, reply HELP. To Opt-out, reply STOP.</p>
        </div>

    </div>


  
    </div>
  )
}

export default RegistrationPage
