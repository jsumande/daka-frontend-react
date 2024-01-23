
import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaRegListAlt  } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const jobFormDataSecondComponent = { 

  title : 'How do Jobber’s service checklists and job forms work?' ,
  subHeader : 'Jobber helps you improve your field service operations with customizable forms such as:' ,
  content : [
    { title : 'Job Checklists' , Icon : <FaRegListAlt/> },
    { title : 'Site Inspection Forms' , Icon : <IoHammerOutline /> },
    { title : 'Service Authorization Forms' , Icon : <HiOutlinePencilSquare /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'JOB CHECKLISTS' , 
      title : 'Help your team get the job done right' , 
      contentTitle : 'After the job, share your checklists with customers to confirm the work you’ve done.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },  

    { 
      subTitle : 'SITE INSPECTION FORMS' , 
      title : 'Capture detailed information on-site' , 
      contentTitle : 'Log safety inspections, track chemicals used on the job, or capture product details and equipment requirements.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    }, 

    { 
      subTitle : 'SERVICE AUTHORIZATION FORMS' , 
      title : 'Keep a record of service authorizations' , 
      contentTitle : 'Record the service authorization date, a breakdown of services, client approval, and more.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is field service checklist software?',
    subheaderOne : 'Field service checklist software like Jobber lets you build custom job forms and checklists that ensure your team delivers consistent service.',
    subheaderTwo : 'In Jobber, you can customize forms with checkboxes, dropdowns, and long-answer fields to standardize your work. Re-use your customized forms on future jobs to ensure quality work no matter which team member is in the field.',
    service_work : {
      title : 'You and your team can use these forms to check off tasks and record important job details as you go, from any mobile device. Once the job is complete, download your completed checklist for your records or email it to your client.',
      bullets : []
    },
    business_work : [
      'Save the time and headaches of shuffling through paper forms',
      'Keep work consistent across jobs, no matter the team member',
      'Train new field workers with easy-to-follow job checklists',
    ],
    customer_work : [
      'Experience smooth service visits completed by an organized team',
      'Have peace of mind that the work was completed properly',
      'Keep a record of the work completed on past jobs at the property',
    ],
  },

  trust_jobber : {
    user : {
      name : 'Nate White',
      company : 'Patriot Pool and Spa',
    },
    sentiment : {
      messageOne : '“Information reaches my team instantly.”',
      messageTwo : 'You can do a lot of multi-tasking instead of going and writing things down with pen and paper. It’s super efficient. And that information reaches my team instantly. This has helped us grow faster..',
    }
  },

  free_resources : [

    { 
      title : '5 Job Safety Analysis Form Templates' , 
      minutes : '11 MIN READ' , 
      details : 'Equip your team with these examples of safety checklists they can use on every job.', 
    },

    { 
      title : 'HVAC Inspection Checklist (Template and Guide)' , 
      minutes : '4 MIN READ' , 
      details : 'Learn what tasks you need on every HVAC inspection checklist, then download our printable template for free.', 
    },

    { 
      title : 'Job Checklists Case Study: Guest Plumbing' , 
      minutes : '4 MIN READ' , 
      details : 'Find out how Jobber helped this plumbing business cut back on costly callbacks from customers.', 
    },

  ]
    

 }

const JobForms = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

      
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">Mobile service checklists to get jobs done right in the field</h1>

                        <p className="text-white text-md">Use Jobber’s customizable job forms and checklists to complete top-notch site inspections, assessments, and field service work every time.</p>

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
                  <h1 className="text-[#84ea00]">Job Forms and Checklists</h1>

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
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Schedule</h1>
                <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Complete Job</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Invoice</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Get Paid</h1>
              </div>

            </div>

          </CenterItems>
        </div>
        
        <ClientManagementJobber content={ jobFormDataSecondComponent }/>
        <IntegrationsWork content={ jobFormDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
            <TrialStartJobber />
            <TrustJobberHomeService content={ jobFormDataSecondComponent }/>
            <FreeResources content={ jobFormDataSecondComponent }/>
        </div>

    </div>
  )
}

export default JobForms
