
import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { IoHammerOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const schedulingDataSecondComponent = { 

  title : 'How does Jobber’s client hub work?' ,
  subHeader : 'Client hub lets your customers self-serve the information they need, 24/7, with the help of these features:' ,
  content : [
    { title : 'Request Work' , Icon : <IoHammerOutline/> },
    { title : 'Approve Quotes' , Icon : <HiOutlinePencilSquare /> },
    { title : 'View Appointment Details' , Icon : <FaBell /> },
    { title : 'Make Payments' , Icon : <LiaFileInvoiceDollarSolid  /> },
    { title : 'Refer Friends' , Icon : <IoMdSend   /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'REQUEST WORK' , 
      title : 'Let customers request work online' , 
      contentTitle : 'Jobber helps you collect, track, and manage those requests without breaking a sweat.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'APPROVE QUOTES' , 
      title : 'Helps customers approve quotes faster' , 
      contentTitle : 'Customers can approve or request changes to quotes online in client hub, and you’ll get notified when it happens.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'VIEW APPOINTMENT DETAILS' , 
      title : 'Ensure that clients are ready for your visit' , 
      contentTitle : 'Your clients can see the details of their past and upcoming appointments, as well as photos of the team members assigned to the work.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'MAKE PAYMENTS' , 
      title : 'Make it easy for customers to pay you online' , 
      contentTitle : 'Customers can pay invoices or deposits online in client hub—and even reward you for your excellent service with a tip.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'REFER FRIENDS' , 
      title : 'Help customers make referrals with less effort' , 
      contentTitle : 'Jobber prompts customers to share booking links with their friends and family, so you never miss an opportunity to generate quality leads.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is client hub?',
    subheaderOne : 'Client hub is an online portal for your customers, branded to look like your business but powered by Jobber.',
    subheaderTwo : 'Through client hub, customers can interact with your business at their convenience without back-and-forth phone calls—and you’ll stand out by offering a smooth online experience.',
    service_work : null,
    business_work : [
      'Keep customers informed while you stay focused on the work',
      'Save time by reducing calls and emails with customers',
      'Keep working moving forward with faster quote approvals and payments',
    ],
    customer_work : [
      'Easily request new work without phone calls or emails',
      'Quickly find quotes, invoices, and billing history online',
      'Avoid surprises about appointments by reviewing the details online',
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
      title : 'Is Online Booking Right For You?' , 
      minutes : '6 MIN READ' , 
      details : 'Learn more about the benefits of online booking—and find out if it’s a good fit for your business.', 
    },

    { 
      title : '8 Best Appointment Booking Apps' , 
      minutes : '8 MIN READ' , 
      details : 'Use this list to find the best booking and scheduling app for your team and customers.', 
    },

    { 
      title : 'CRM Software Case Study: SEF the Lawn Surgeon' , 
      minutes : '5 MIN READ' , 
      details : 'Find out how Jobber helped this lawn care entrepreneur impress and retain more customers.', 
    },

  ]
    

 }

const ClientHub = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

      
    <div className="w-full flex flex-row h-[650px] relative">
            
            <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
               
                    <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                        
                        <div className="w-full flex flex-col gap-3  ">
    
                            <h1 className="text-5xl font-extrabold text-white mb-2">A convenient online client portal that keeps work moving forward</h1>
    
                            <p className="text-white text-md">Client hub is your customer’s online portal where they can request work, approve quotes, review scheduled jobs, make payments, and refer their friends.</p>
    
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
                      <h1 className="text-[#84ea00]">Client Hub</h1>
    
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
                    <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Client Portal</h1>
                    <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Client Communication</h1>
                  </div>
    
                </div>
    
              </CenterItems>
            </div>
            
            <ClientManagementJobber content={ schedulingDataSecondComponent }/>
            <IntegrationsWork content={ schedulingDataSecondComponent }/>
                
            <div className="flex flex-col items-center gap-20 w-full">
                <TrialStartJobber />
                <TrustJobberHomeService content={ schedulingDataSecondComponent }/>
                <FreeResources content={ schedulingDataSecondComponent }/>
            </div>
    
        </div>
  )
}

export default ClientHub
