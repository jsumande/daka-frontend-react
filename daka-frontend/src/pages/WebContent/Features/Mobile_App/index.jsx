import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"


import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaRegCalendarPlus } from "react-icons/fa";
import { BsGraphUpArrow  } from "react-icons/bs";
import { IoHammerOutline } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlinePermPhoneMsg  } from "react-icons/md";


const mobileDataSecondComponent = { 

  title : 'How does the Jobber mobile app work?' ,
  subHeader : 'Here’s how Jobber helps you run a smooth field service business at your fingertips:' ,
  content : [
    { title : 'Monitor Your Business' , Icon : <BsGraphUpArrow/> },
    { title : 'Schedue Visits' , Icon : <FaRegCalendarPlus /> },
    { title : 'Get the Job Done Right' , Icon : <IoHammerOutline /> },
    { title : 'Create Quotes & Invoices' , Icon : <HiOutlinePencilSquare  /> },
    { title : 'Communicate With Customers' , Icon : <MdOutlinePermPhoneMsg   /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'MONITOR YOUR BUSINESS' , 
      title : 'Keep your workday running smoothly' , 
      contentTitle : 'One glance in the Jobber app shows you each step of your workflow, how appointments are progressing, and what actions you should take to keep work moving forward.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'SCHEDULE VISITS' , 
      title : 'Make fast scheduling decisions in the field' , 
      contentTitle : 'For last minute work, view your team’s daily visits on a map to quickly assign based on location.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },  

    { 
      subTitle : 'GET THE JOB DONE RIGHT' , 
      title : 'Complete every visit exactly as planned' , 
      contentTitle : 'Access the job details you need in the field, right from the app. While you work, complete job forms and upload photos you take on-site for your records.As your team clocks in and out from the app, Jobber captures their time spent on the job to help you with timesheets and job costing.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'CREATE QUOTES & INVOICES' , 
      title : 'Quote and invoice customers on the go' , 
      contentTitle : 'Create and send a professional-looking quote from your mobile device—before you’ve even left the customer’s property.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'COMMUNICATE WITH CUSTOMERS' , 
      title : 'Keep customers informed while staying focused on the work' , 
      contentTitle : 'Customize your on-my-way text message,  and Jobber will make it easy to send it to customers on the go. Freely text with customers while on the go, knowing that conversations are stored in Jobber for you or a team member to reference.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is the Jobber mobile app?',
    subheaderOne : 'The Jobber mobile app lets you access Jobber’s field service management features—including quoting, scheduling, invoicing, collecting payment, and client communication—from anywhere on a mobile device.',
    subheaderTwo : 'The app acts as a single place for you to monitor and act on your business’s most time-sensitive work. From your mobile device, you can schedule and reassign jobs in just a few taps, access and upload important job details, send professional quotes and invoices, and communicate with customers faster. The Jobber app is also available in Spanish for select team members.',
    service_work : {
      title : 'Download Jobber from the Google Play Store (Android) or the App Store (iOS) and try it free for 14 days, no credit card required.',
      bullets : []
    },
    business_work : [
      'Reclaim time spent managing schedules',
      'Reduce back-and-forth customer communication',
      'Be prepared for upcoming work and keep track of progress',
    ],
    customer_work : [
      'Choose a convenient appointment time and request changes easily',
      'Never miss upcoming appointments or schedule changes',
      'Review appointment details online, any time',
    ],
  },

  
  trust_jobber : {
    user : {
      name : 'Matt Kispert',
      company : 'Matt’s Plowing and Lawn Care LLC',
    },
    sentiment : {
      messageOne : '“Jobber saves me 40+ hours a month.”',
      messageTwo : 'I’m able to add customers, send quotes, schedule work, send and receive payments for invoices—all from my phone or computer.',
    }
  },

  
  free_resources : [

    { 
      title : 'How to Accept Credit Card Payments on Your Phone' , 
      minutes : '6 MIN READ' , 
      details : 'Use this guide to learn how to start pricing jobs accurately and profitably.', 
    },

    { 
      title : '19 Best Small Business Apps to Help You Work Smarter' , 
      minutes : '12 MIN READ' , 
      details : 'Increasing your prices? Here’s how to tell your customers professionally without losing their business.', 
    },

    { 
      title : 'Mobile App Case Study: The Cleaning Ladies' , 
      minutes : '2 MIN READ' , 
      details : 'Find out how Jobber helped this overhead door company close more clients, work more billable hours, and grow their revenue.', 
    },

  ]

 }

const MobileApp = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

    
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">Easily run your field service business on the go</h1>

                        <p className="text-white text-md">The Jobber mobile app helps you manage your field operations from the road or the jobsite. Schedule work, manage your team, and communicate with customers no matter where you are.</p>

                    </div>

                    <div className="w-full flex flex-col gap-3">

                      <p className="text-white text-md">The Jobber app is also available in Spanish for select team members. Download from the app store today.</p>
                          
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
                  <h1 className="text-[#84ea00]">Jobber Mobile App</h1>

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
                  <h1 className="text-2xl font-extrabold text-[#012939] text-center">Jobber helps you keep a pulse on your business.</h1>
              </div>

              <div className="w-full flex flex-row justify-evenly items-center gap-8">
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Real-Time Notifications</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Business Dashboard</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Financial Management</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Job Costing</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Team Management</h1>
              </div>

            </div>

          </CenterItems>
        </div>
        
        <ClientManagementJobber content={ mobileDataSecondComponent }/>
        <IntegrationsWork content={ mobileDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
            <TrialStartJobber />
            <TrustJobberHomeService content={ mobileDataSecondComponent }/>
            <FreeResources content={ mobileDataSecondComponent }/>
        </div>

    </div>
  )
}

export default MobileApp
