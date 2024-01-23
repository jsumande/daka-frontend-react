
import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { IoHammerOutline } from "react-icons/io5";
import { MdOutlinePermPhoneMsg , MdOutlineMoveToInbox  } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { LuClipboardList , LuBell } from "react-icons/lu";
import { TbFileDollar } from "react-icons/tb";

const customerCommunicationsDataSecondComponent = { 

  title : 'How does client communication work in Jobber?' ,
  subHeader : 'Here’s how Jobber helps you keep your clients informed with less effort.',
  content : [
    { title : 'Professional Text & Email Templates' , Icon : <HiOutlinePencilSquare/> },
    { title : 'Automated Quote Follow-ups' , Icon : <LuClipboardList /> },
    { title : 'Automated Visit Reminders' , Icon : <LuBell /> },
    { title : 'On-my-way Texts' , Icon : <MdOutlinePermPhoneMsg  /> },
    { title : 'Automated Job Follow-ups' , Icon : <IoHammerOutline   /> },
    { title : 'Automated Invoice Follow-ups' , Icon : <TbFileDollar  /> },
    { title : 'Two-way Text Messaging' , Icon : <MdOutlineMoveToInbox   /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'PROFESSIONAL TEXT & EMAIL TEMPLATES' , 
      title : 'Start with professional, customizable templates' , 
      contentTitle : 'Customize templates for every communication type, including booking confirmations, invoice follow-ups, and more.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED QUOTE FOLLOW-UPS' , 
      title : 'Get quote approvals faster' , 
      contentTitle : 'To help you keep work moving forward, Jobber automatically sends emails or text messages that remind clients to review and approve their quote.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED VISIT REMINDERS' , 
      title : 'Prevent no-shows and prepare clients for visits' , 
      contentTitle : 'Customers can click through to client hub, their online self-serve portal, to review details, view assigned team members, and more.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'ON-MY-WAY TEXTS' , 
      title : 'Let clients know you’re on your way' , 
      contentTitle : 'Plus, team members using the Jobber app in Spanish can send the pre-written English texts to customers to make communication even easier.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED JOB FOLLOW-UPS' , 
      title : 'Follow up after every job' , 
      contentTitle : 'Schedule follow-up emails to gather client feedback, ask for a review, or simply say thank you after every job.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED INVOICE FOLLOW-UPS' , 
      title : 'Stop chasing payments' , 
      contentTitle : 'Jobber automatically sends a customized email or text follow-up to clients, reminding them to pay their outstanding invoice.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'TWO-WAY TEXT MESSAGING' , 
      title : 'Stay on top of client conversations' , 
      contentTitle : 'Text with clients on the go, knowing that all conversations will be stored in Jobber for you (or an assigned team member) to keep track of.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is automated client communication software?',
    subheaderOne : 'Automated client communication software, like Jobber, sends automatic emails and text messages to your customers to keep them informed about your work. This way, customers know what’s going on at every stage of the job and never feel ignored.',
    subheaderTwo : 'Jobber lets you send and receive client communication in the same place you manage jobs, scheduling, quoting, and invoicing. This makes it easier to keep your customers informed on upcoming work and documents that need their attention.',
    service_work : null,
    business_work : [
      'Spend less time communicating with customers when they’re already informed',
      'Keep work moving forward by quickly reminding clients of quotes and invoices',
      'Easily access your communication history with each client',
    ],
    customer_work : [
      'Get alerted about important documents and access them easily',
      'Avoid surprises about appointments by reviewing the details online',
      'Have a personalized experience and consistent customer service',
    ],
  },

  trust_jobber : {
    user : {
      name : 'John Pack, Jr.',
      company : 'York Builders',
    },
    sentiment : {
      messageOne : '“Jobber allows me to focus on the business.”',
      messageTwo : 'There’s less resending of estimates or invoices, or customers wondering who is coming to their house and when. It’s also reduced missed appointments with automated reminders.',
    }
  },

  free_resources : [

    { 
      title : 'How to Send an Appointment Confirmation Email' , 
      minutes : '6 MIN READ' , 
      details : 'Reduce no-shows and improve customer service using these appointment confirmation tips and templates.', 
    },

    { 
      title : 'Thank You Notes for Customers (Free Templates)' , 
      minutes : '10 MIN READ' , 
      details : 'Use these thank-you notes as inspiration the next time you want to show customers appreciation after the job’s done.', 
    },

    { 
      title : 'CRM Software Case Study: SEF the Lawn Surgeon' , 
      minutes : '5 MIN READ' , 
      details : 'Find out how Jobber helped this lawn care entrepreneur impress and retain more customers.', 
    },

  ]
    

 }


const CustomerCommunications = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

      
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">Automated client communication software that keeps clients informed</h1>

                        <p className="text-white text-md">Save time and avoid miscommunication with automated customer reminders and follow-ups. You’ll stay focused on your work while email and texts from Jobber keep your customers in the loop.</p>

                    </div>

                    <div className="w-full flex flex-col gap-3">
        
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
                  <h1 className="text-[#84ea00]">Client Communication</h1>

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
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Client Manager</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Client Portal</h1>
                <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Client Communication</h1>
              </div>

            </div>

          </CenterItems>
        </div>
        
        <ClientManagementJobber content={ customerCommunicationsDataSecondComponent }/>
        <IntegrationsWork content={ customerCommunicationsDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
            <TrialStartJobber />
            <TrustJobberHomeService content={ customerCommunicationsDataSecondComponent }/>
            <FreeResources content={ customerCommunicationsDataSecondComponent }/>
        </div>

    </div>
  )
}

export default CustomerCommunications