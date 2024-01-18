import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

const ClientManager = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

      <div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">A field service CRM that helps you wow customers at every stage</h1>

                        <p className="text-white text-md">Jobber helps you keep client information up to date and detailed—complete with job and communication history—without headaches.</p>

                    </div>

                    <div className="w-full flex flex-col gap-3">

                      <p className="text-white text-md">You’ll deliver personalized service that makes every customer feel like they’re your #1.</p>
                          
                      <div className="flex flex-row ">

                        <input type={"text"} placeholder="Email" className="h-[55px] pl-6 pr-36" />

                        <div className="h-[55px] px-9 bg-[#c1ff72] flex items-center justify-center">
                            <h1 className="font-bold text-xl text-[#012939]">{`Try Jobber- it's free!`}</h1>
                        </div>

                      </div>

                    </div>


                </div>

                <div className="flex flex-row gap-1 text-white">
                  
                  <h1 className="text-md underline decoration underline-offset-2 ">Home</h1>
                  <h1 className="text-md">/</h1>
                  <h1 className="text-md underline decoration underline-offset-2 ">Features</h1>
                  <h1 className="text-md">/</h1>
                  <h1 className="text-[#84ea00]">Field Service CRM</h1>

                </div>
           
        </div>

      <div className="w-full bg-[#012939] flex flex-row"></div>

      <div className="w-full">
        <img src={FeaturesDefaultImage.FEATURESCLIENTMANAGER} style={{ height : "100%" , width : "100%" , objectFit: 'cover'}} />
      </div>

    </div>

        <div className="w-full bg-[#f3f3f3] flex flex-col items-center py-9">
          <CenterItems>

            <div className="flex flex-col gap-5">

              <div className="w-full flex flex-col items-center gap-4">
                  <h1 className="text-2xl font-extrabold text-[#012939] text-center">Deliver a professional online experience from start to finish with Jobber.</h1>
              </div>

              <div className="w-full flex flex-row justify-evenly items-center gap-8">
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Online Booking</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Requests</h1>
                <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Client Manager</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Client Portal</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Client Communication</h1>
              </div>

            </div>

          </CenterItems>
        </div>

        <ClientManagementJobber/>
        <IntegrationsWork/>
            
        <div className="flex flex-col items-center gap-20">
            <TrialStartJobber />
            <TrustJobberHomeService/>
            <FreeResources/>
        </div>

    </div>
  )
}

export default ClientManager
