import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaRegUserCircle , FaRegListAlt , FaRegCalendar  } from "react-icons/fa";
import { BsWindowStack } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

const onlineBookingDataSecondComponent = { 

  title : 'How does online booking work in Jobber?' ,
  subHeader : 'Jobber helps you book new jobs faster and streamline your scheduling with these features:' ,
  content : [
    { title : 'Bookable Services' , Icon : <FaRegListAlt/> },
    { title : 'Team Assignment' , Icon : <FaRegUserCircle /> },
    { title : 'Schedule Preferences' , Icon : <BsWindowStack /> },
    { title : 'Schedule Efficiency' , Icon : <FaRegCalendar  /> },
    { title : 'Automated Confirmations' , Icon : <FaBell   /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'BOOKABLE SERVICES' , 
      title : 'Let customers know what they can book' , 
      contentTitle : 'Create clear descriptions of what your services include and set estimated prices and durations.Let customers see multiple service options and choose what fits their needs.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },   

    { 
      subTitle : 'TEAM ASSIGNMENT' , 
      title : 'Automatically assign team members' , 
      contentTitle : 'Jobber will automatically assign whoever is available for the appointment and get it booked in their calendar.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'SCHEDULING PREFERENCES' , 
      title : 'Stay in control of your schedule' , 
      contentTitle : 'Set controls around how soon a customer can book you, how much time should be allotted between appointments, and when booking slots are offered to your customer.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'SCHEDULING EFFICIENCY' , 
      title : 'Get bookings that save time and fuel' , 
      contentTitle : 'This way, bookings made online will automatically be scheduled around your existing appointments',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

    { 
      subTitle : 'AUTOMATED CONFIRMATIONS' , 
      title : 'Never miss a booking' , 
      contentTitle : 'When a booking is made, your customer will get an email confirmation and you’ll be notified automatically.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is online booking software?',
    subheaderOne : 'Online booking and appointment scheduling software like Jobber allows customers to book your services directly into an online calendar. Customers can fill a booking form to choose the services they want and their preferred date and time—and you’ll see that work appear in your calendar.',
    subheaderTwo : '',
    service_work : {
      title : 'Here’s what you can expect from online scheduling with Jobber:',
      bullets : [
        'Choose which services clients can book and add detailed descriptions',
        'Set availability preferences for yourself and your team',
        'Share your booking page on your website, social media, or directly with customers',
        'Get jobs automatically booked in your calendar and assigned to a team member',
      ]
    },
    business_work : [
      'Stay in control of your calendar by setting availability preferences',
      'Save time scheduling jobs without back-and-forth calls and emails',
      'Sit back and let Jobber automatically schedule and assign bookings',
    ],
    customer_work : [
      'Choose the appointment date and time that works best',
      'Select the right services and know what to expect for the booking',
      'Get an instant email confirmation once the job is booked',
    ],
  },

  trust_jobber : {
    user : {
      name : 'Ken Walker',
      company : '80205 Turnover',
    },
    sentiment : {
      messageOne : '“Jobber’s online booking feature saves us between 2-5 hours per week in scheduling time.”',
      messageTwo : 'It helps our operations run more smoothly–and our customers love it!',
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
      title : 'Scheduling Software Case Study: Furnace Pros Niagara' , 
      minutes : '6 MIN READ' , 
      details : 'Find out how scheduling with Jobber brought this HVAC business their most profitable year ever.', 
    },

  ]
    

 }


const OnlineBooking = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

           
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">An online booking system that fills your schedule with less effort</h1>

                        <p className="text-white text-md">Jobber helps you schedule field service jobs faster, avoid booking mistakes, and route visits efficiently—all while keeping your crew and customers on the same page.</p>

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
                  <h1 className="text-[#84ea00]">Online Booking System</h1>

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
        
        <ClientManagementJobber content={ onlineBookingDataSecondComponent }/>
        <IntegrationsWork content={ onlineBookingDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
            <TrialStartJobber />
            <TrustJobberHomeService content={ onlineBookingDataSecondComponent }/>
            <FreeResources content={ onlineBookingDataSecondComponent }/>
        </div>
    </div>
  )
}

export default OnlineBooking
