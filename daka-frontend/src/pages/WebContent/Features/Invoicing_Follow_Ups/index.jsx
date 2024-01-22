
import CenterItems from "../../../../component/Container/CenterItems"

import FreeResources from "../Common_Component/Free_Resources/Free_Resources"
import TrustJobberHomeService from "../Common_Component/Trust_Jobber_Home_Service"
import TrialStartJobber from "../Common_Component/Trial_Start_Jobber/TrialStartJobber"
import IntegrationsWork from "../Common_Component/Integrations_Work/IntegrationsWork"
import ClientManagementJobber from "../Common_Component/Client_Management_Jobber/ClientManagementJobber"

import { FeaturesDefaultImage } from "../../../../contants/imageContants"

import { FaBell } from "react-icons/fa";
import { TbFileDollar } from "react-icons/tb";
import { PiNotePencilLight } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const invoiceDataSecondComponent = { 

  title : 'How does Jobber scheduling work?' ,
  subHeader : 'Jobber makes every step of your service scheduling process easier and faster with these features:' ,
  content : [
    { title : 'Invoice Quick-create' , Icon : <PiNotePencilLight/> },
    { title : 'Job Scheduling' , Icon : <FaBell /> },
    { title : 'Batch Invoicing' , Icon : <TbFileDollar /> },
    { title : 'Automated Invoice Follow-ups' , Icon : <LiaFileInvoiceDollarSolid  /> },
  ],
  contentWithTwoRow : [
    
    { 
      subTitle : 'INVOICE QUICK-CREATE' , 
      title : 'Instantly generate accurate, professional invoices' , 
      contentTitle : 'Personalize a customer-friendly template with your company branding, contact information, and a message or disclaimer.When the job is done, instantly generate a professional, digital invoice and send it to your customers by text or email.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },    

    { 
      subTitle : 'INVOICE REMINDERS' , 
      title : 'Know when it’s time to invoice every job' , 
      contentTitle : 'See all jobs requiring invoicing in one glance.Jobber will prompt you to invoice at the right time, whether that’s after each visit, when the job is complete, or at the same time every month.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },    

    { 
      subTitle : 'BATCH INVOICING' , 
      title : 'Send multiple invoices at once' , 
      contentTitle : 'Whether you’ve fallen behind on invoicing, or you just prefer to send them all at once—batch invoicing can help.Select the jobs you’d like to create invoices for, and send them to customers with a couple of clicks.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },   
    
    { 
      subTitle : 'AUTOMATED INVOICE FOLLOW-UPS' , 
      title : 'Stop chasing payments' , 
      contentTitle : 'Jobber automatically sends a customized email or text follow-up to customers, reminding them to pay their outstanding invoice.',
      Image : FeaturesDefaultImage.FEATURESCLIENTDETAILS
    },

  ],

  contentForBusinessCustomer : {
    title : 'What is field service invoice software?',
    subheaderOne : 'Field service invoice software lets you quickly create and send invoices, track their statuses, and remind customers of outstanding payments with automated follow-up messages. Invoicing software like Jobber makes invoicing less time-consuming so you can focus on getting to the next job.',
    subheaderTwo : '',
    service_work : {
      title : 'Here’s what invoicing looks like in Jobber:',
      bullets : [
        'Customize an invoice template with your branding and contact information',
        'When the work is done, job details are transferred to a professional invoice in one click',
        'Send the invoice to your customer over email, text, or as a printed document',
        'Remind customers to pay with automated follow-up emails and texts',
        'Collect payment online, in person, or automatically from a card on file',
      ]
    },
    business_work : [
      'Save time by instantly generating one or more invoices at once',
      'Get paid on time by automating your follow-ups for unpaid invoices',
      'Know where your invoicing is at, and never fall behind again',
    ],
    customer_work : [
      'Receive invoices on time and pay them easily',
      'Convenient digital invoices received by email or text',
      'Clear and accurate invoices show customers what they’re paying for',
    ],
  },

  trust_jobber : {
    user : {
      name : 'Cody Loewen',
      company : 'Loewen Plumbing and Gasfitting',
    },
    sentiment : {
      messageOne : '“Now, we know exactly who paid”',
      messageTwo : 'My secretary would burn up a lot of time calling and sending emails trying to get payments from customers. With Jobber, we know exactly who paid right away through email.',
    }
  },

  free_resources : [

    { 
      title : 'How to Write an Invoice' , 
      minutes : '6 MIN READ' , 
      details : 'Learn how to make a professional, accurate, and simple invoice that helps you get paid faster.', 
    },

    { 
      title : 'Tips to Prevent Overdue Payments' , 
      minutes : '5 MIN READ' , 
      details : 'Unpaid invoices hurt your cash flow. Take these steps to prevent late payments from day one.', 
    },

    { 
      title : 'Invoicing Software Case Study: Field’s Tree Service' , 
      minutes : '3 MIN READ' , 
      details : 'Find out how arborist Gordon Field used Jobber to get organized, get paid, and get peace of mind.', 
    },

  ]

 }

const InvoicingFollowUps = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">

    
<div className="w-full flex flex-row h-[650px] relative">
        
        <div className="flex flex-col justify-between bottom-10 absolute w-6/12 h-full left-56">
           
                <div className="flex flex-col justify-center items-center h-full w-8/12 gap-10">
                    
                    <div className="w-full flex flex-col gap-3  ">

                        <h1 className="text-5xl font-extrabold text-white mb-2">Field service invoicing software that speeds up your cash flow</h1>

                        <p className="text-white text-md">Jobber lets you generate invoices with accurate job details in seconds. Then sit back while automated follow-ups and convenient online payments help you get paid 4x faster.</p>

                    </div>

                    <div className="w-full flex flex-col gap-3">

                      {/* <p className="text-white text-md">You’ll deliver personalized service that makes every customer feel like they’re your #1.</p> */}
                          
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
                  <h1 className="text-[#84ea00]">Field Service Invoicing Software</h1>

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
                <h1 className="text-lg font-bold text-[#012939] text-center cursor-pointer">Schedule</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Complete Job</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer underline decoration-4 underline-offset-8 decoration-[#c1ff72]">Invoice</h1>
                <h1 className="text-lg font-bold text-gray-400 text-center cursor-pointer">Get Paid</h1>
              </div>

            </div>

          </CenterItems>
        </div>
        
        <ClientManagementJobber content={ invoiceDataSecondComponent }/>
        <IntegrationsWork content={ invoiceDataSecondComponent }/>
            
        <div className="flex flex-col items-center gap-20 w-full">
          <TrialStartJobber />
            <TrustJobberHomeService content={ invoiceDataSecondComponent }/>
            <FreeResources content={ invoiceDataSecondComponent }/>
        </div>

    </div>
  )
}

export default InvoicingFollowUps
