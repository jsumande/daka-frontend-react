import CenterItems from "../../component/Container/CenterItems";

import SubHeader from "../../component/Typography/Sub-Header"

import { AuthDefaultImage } from "../../contants/imageContants";

const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col relative items-center py-9'>
        <CenterItems>

            <div className='flex flex-row justify-between items-center'>
                <a href="/" className='text-[#012939] pr-5 font-extrabold cursor-pointer text-2xl' >JOBBER</a>
            </div>

            <div className="w-full flex flex-col items-center mt-24">
                
            <div className="w-11/12 flex flex-row justify-evenly gap-3">

                <div className="flex flex-col items-center gap-5 w-full pr-6">

                    <div className="w-full flex flex-row justify-between items-center">

                        <SubHeader text={"Login"}/>
                        
                        <a href="/auth/registration" className="text-[#3ca2e0] font-bold mt-3">Sign up</a>
                    </div>


                    <div className="w-full flex flex-col gap-4">

                        <input type="email" placeholder="Email" className="py-4 px-8 rounded border"/>
                        <input type="password" placeholder="Password" className="py-4 px-8 rounded border"/>

                        <a className="cursor-pointer">Forgot Password?</a>

                        <div className="flex flex-col gap-2">

                            <div className="px-10 py-2 bg-[#7db00e] flex items-center justify-center cursor-pointer">
                                <h1 className="font-bold text-lg text-white">Log in</h1>
                            </div>

                        </div>

                        <div className="flex flex-col w-full items-center">
                            <h1 className="font-md text-lg text-gray-600">or</h1>
                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="px-10 py-2 bg-white border-2 rounded shadow-sm border-gray-200 flex items-center justify-center cursor-pointer">
                                <h1 className="font-bold text-md text-gray-500">Log in with Google</h1>
                            </div>

                            <div className="px-10 py-2 bg-gray-50 border-2 rounded shadow-sm border-gray-200 flex items-center justify-center cursor-pointer">
                                <h1 className="font-bold text-md text-gray-500">Log in with Intuit</h1>
                            </div>

                            <p className="text-gray-500 text-sm text-center">This site is protected by reCAPTCHA and the Google <span className="text-[#7db00e] underline">Privacy Policy</span> and <span className="text-[#7db00e] underline">Terms of Service</span> apply.</p>

                        </div>


                    </div>

                </div>

                <div className="w-full border-l border-black flex flex-col justify-center">

                    <div className="w-full ml-9 flex flex-col gap-3">

                        <img src={AuthDefaultImage.LOGINJOBBERFAST} style={{ maxHeight : '218px' , maxWidth : '436px' }} />

                        <h1 className='text-[#012939] pr-5 font-extrabold text-xl' >Reach new heights at Jobber Summit</h1>

                        <p className="text-sm text-gray-600">Join us at Jobber Summit on March 6, 2024! Registration is now open for our FREE online event created to strengthen the business and leadership skills of home service business owners and management teams.</p>

                    </div>

                </div>

            </div>
            </div>
        </CenterItems>
    </div>
  )
}

export default LoginPage
