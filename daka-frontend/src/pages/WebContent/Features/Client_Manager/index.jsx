import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaRegUserCircle , FaRegListAlt  } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineMoveToInbox } from "react-icons/md";

const clientManagerDataSecondComponent = { 
  title : 'How does Jobber scheduling work?' ,
  subHeader : 'Jobber makes every step of your service scheduling process easier and faster with these features:' ,
  content : [
    { title : 'Client Details' , Icon : <FaRegUserCircle/> },
    { title : 'Job History' , Icon : <FaClockRotateLeft /> },
    { title : 'Communication History' , Icon : <MdOutlineMoveToInbox /> },
    { title : 'Lead Management' , Icon : <FaRegListAlt  /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'CLIENT DETAILS' , 
      title : 'Create detailed client profiles you can access fast' , 
      contentTitle : 'Customize your client profiles to save the details that matter most to your business, then search for them easily from the office or field.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },  

    { 
      subTitle : 'JOB HISTORY' , 
      title : 'Quickly find details from past jobs' , 
      contentTitle : 'Have the full history of a client’s past jobs available at your fingertips—no more scrambling for info in the middle of a phone call.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },  

    { 
      subTitle : 'COMMUNICATION HISTORY' , 
      title : 'Keep organized records of client communication' , 
      contentTitle : 'See all past emails and text messages between you and your clients, including automated notifications, booking confirmations, and on-my-way texts.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },  

    { 
      subTitle : 'LEAD MANAGEMENT' , 
      title : 'Turn sales leads into customers' , 
      contentTitle : 'Tag contacts as leads in Jobber so you can prioritize your time and resources, managing them separately from active clients.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },


  ], 
  
  contentForBusinessCustomer : {
    title : 'What is field service CRM software?',
    subheaderOne : 'Field service CRM software like Jobber helps you keep a clean and organized client history so that you never lose touch with the core of your business—your clients.',
    subheaderTwo : 'With Jobber, your team has access to important client details from the field without phone calls back to the office. That helps you provide a professional, reliable experience to every customer.',
    service_work : null,
    business_work : [
      'Let team members self-serve the information needed to get the job done right',
      'Track the client details that matter most to your business',
      'Save time and headaches with client profiles that are always up-to-date with work and communication history',
    ],
    customer_work : [
      'Get a personalized experience and consistent customer service',
      'Avoid the hassle of providing contact details more than once',
      'Trust that personal client information is only accessible to team members who need it',
    ],
  },

  trust_jobber : {
    user : {
      name : 'Nate White',
      company : 'Patriot Pool and Spa',
    },
    sentiment : {
      messageOne : '“Information reaches my team instantly.”',
      messageTwo : 'You can do a lot of multi-tasking instead of going and writing things down with pen and paper. It’s super efficient. And that information reaches my team instantly. This has helped us grow faster.',
    }
  },

  free_resources : [

    { 
      title : '5 Ways to Stay Competitive on Customer Service' , 
      minutes : '7 MIN READ' , 
      details : 'Use these proven tips and tools to create a memorable customer experience.', 
    },

    { 
      title : '8 Free Appointment Reminder Templates' , 
      minutes : '7 MIN READ' , 
      details : 'Reduce no-shows and improve customer service using these email templates and tips.', 
    },

    { 
      title : 'CRM Software Case Study: SEF the Lawn Surgeon' , 
      minutes : '5 MIN READ' , 
      details : 'Find out how Jobber helped this lawn care entrepreneur impress and retain more customers.', 
    },

  ]

 }

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

        <ClientManagementJobber content={ clientManagerDataSecondComponent }/>
        <IntegrationsWork content={ clientManagerDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
            <TrialStartJobber />
            <TrustJobberHomeService content={ clientManagerDataSecondComponent }/>
            <FreeResources content={ clientManagerDataSecondComponent }/>
        </div>

    </div>
  )
}

export default ClientManager
