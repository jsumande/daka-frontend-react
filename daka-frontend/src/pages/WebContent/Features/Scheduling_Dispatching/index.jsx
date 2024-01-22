
import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaRegCalendarPlus } from "react-icons/fa";
import { BsWindowStack } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlinePermPhoneMsg  } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const schedulingDataSecondComponent = { 

  title : 'How does Jobber scheduling work?' ,
  subHeader : 'Jobber makes every step of your service scheduling process easier and faster with these features:' ,
  content : [
    { title : 'Online Booking' , Icon : <FaRegCalendarPlus/> },
    { title : 'Job Scheduling' , Icon : <BsWindowStack /> },
    { title : 'Calendar Management' , Icon : <IoCalendarClearOutline /> },
    { title : 'Map and Routing' , Icon : <HiOutlineMapPin  /> },
    { title : 'Team Push Notifications' , Icon : <MdOutlinePermPhoneMsg   /> },
    { title : 'Map and Routing' , Icon : <HiOutlineMapPin  /> },
    { title : 'Automated Visit Reminders' , Icon : <FaBell   /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'ONLINE BOOKING' , 
      title : 'Book customers with less effort' , 
      contentTitle : 'Save time by letting customers book an appointment with you online.When a booking is made, Jobber will automatically schedule the job based on your preferences.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'JOB SCHEDULING' , 
      title : 'Add work to your schedule faster' , 
      contentTitle : 'Create a job and assign it to your team with only a few clicks.Compare team member schedules side by side to see who’s free, choose an available time slot, and immediately schedule the work with one tap.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'CALENDAR MANAGEMENT' , 
      title : 'Make your calendar work for you' , 
      contentTitle : 'Create and manage a calendar that fits the way you work.Choose from five different views, personalize your calendar with color coding and filters, and easily reschedule jobs by clicking, dragging, and dropping.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'MAP AND ROUTING' , 
      title : 'Cut transit time to fit more work in the day' , 
      contentTitle : 'See your visits on a map and automatically generate the fastest, most fuel-efficient route. As new work comes in, you can assign it to the closest team member based on their GPS location.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'TEAM PUSH NOTIFICATIONS' , 
      title : 'Automatically send instant updates to your crew' , 
      contentTitle : 'When you make a schedule change to an employee’s current workday, they’ll get a notification on their phone with all the details.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED VISIT REMINDERS' , 
      title : 'Keep customers informed about appointments' , 
      contentTitle : 'Schedule emails or text messages to ensure customers are ready for your arrival.Customers can click through to client hub, where they can review details, view assigned team members, and confirm or request a change if necessary.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is job scheduling software?',
    subheaderOne : 'Scheduling software like Jobber lets you book and manage field service jobs in a customizable calendar, assign them to the right people, and share appointment details with your team and customers.',
    subheaderTwo : '',
    service_work : {
      title : 'Here’s how field service scheduling in Jobber works:',
      bullets : [
        'Get notified of online bookings from customers, or create a visit directly in your calendar',
        'View team availability and assign team members',
        'Easily click, drag, and drop any visits that need rescheduling',
        'Automatically generate the most efficient driving routes before dispatching workers',
        'Set automated reminders that prepare customers before their appointments',
      ]
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
      name : 'Johnny Smithard',
      company : 'Eden Tree Care & Fencing Ltd.',
    },
    sentiment : {
      messageOne : '“There’s no messy paperwork, and it gives us more brain space.”',
      messageTwo : 'It reduces phone calls from customers by at least a half, and we’re much more efficient at processing jobs in Jobber’s schedule.',
    }
  },

  free_resources : [

    { 
      title : 'How to Make a Schedule for Employees' , 
      minutes : '7 MIN READ' , 
      details : 'Follow this guide to make an employee work schedule that’s efficient, effective, and repeatable.', 
    },

    { 
      title : '8 Free Appointment Reminder Templates' , 
      minutes : '7 MIN READ' , 
      details : 'Start sending these appointment reminder emails and texts to keep your books full and your clients happy.', 
    },

    { 
      title : 'Scheduling Software Case Study: Furnace Pros Niagara' , 
      minutes : '4 MIN READ' , 
      details : 'Find out how scheduling with Jobber brought this HVAC business their most profitable year ever.', 
    },

  ]
    

 }



const SchedulingDispatching = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

      
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">Easy service scheduling software built for the field</h1>

                        <p className="text-white text-md">Jobber helps you schedule field service jobs faster, avoid booking mistakes, and route visits efficiently—all while keeping your crew and customers on the same page.</p>

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
                  <h1 className="text-[#84ea00]">Scheduling</h1>

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
                  <h1 className="text-2xl font-extrabold text-[#012939] text-center">Jobber helps you stay organized at each stage of the job.</h1>
              </div>

              <div className="w-full flex flex-row justify-evenly items-center gap-8">
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Quote</h1>
                <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Schedule</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Complete Job</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Invoice</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Get Paid</h1>
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

export default SchedulingDispatching
