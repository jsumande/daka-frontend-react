
import CenterItems from "../../../../../component/Container/CenterItems"

// import { FaRegUserCircle , FaRegListAlt  } from "react-icons/fa";
// import { FaClockRotateLeft } from "react-icons/fa6";
// import { MdOutlineMoveToInbox } from "react-icons/md";

// import { FeaturesDefaultImage } from "../../../../../contants/imageContants";

const ClientManagementJobber = ({ content }) => {
  return (
    <CenterItems biggerScreen={true}>
    
        <div className="w-full py-10 flex flex-col gap-10">

            <div className="w-full flex flex-col items-center gap-4">

                <h1 className="text-5xl font-extrabold text-[#012939] text-center">{content?.title}</h1>
                <p className="text-[#012939] font-md text-md text-center">{content?.subHeader}</p>

            </div>

            <div className="w-full grid grid-flow-col gap-4 mt-5">

                { content?.content?.map(  (item , key ) => (
                    <div key={key} className="w-full flex flex-col item-center justify-center border-2 rounded">

                        <div className="w-full px-6 py-8 flex flex-col items-center gap-2">
                
                            <span className="text-[#84ea00] text-2xl">{item?.Icon}</span>
                            <h1 className="font-bold text-md text-gray-700 text-center">{item?.title}</h1>
                
                        </div>
                
                    </div>
                )) }

            </div>


            { content?.contentWithTwoRow?.map( (item , key ) => 
                    
                 (key + 2) % 2 === 0 ? 

                    (
                    <div key={key} className="w-full flex flex-row gap-10 mt-5">

                        <div className="w-full flex flex-col item-start justify-center gap-8">

                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-lg text-[#012939]">{ item?.subTitle }</h1>
                                <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">{ item?.title }</h1>
                            </div>
                            
                            <p className="text-[#012939] text-md font-md w-8/12">{ item?.contentTitle }</p>

                            
                            <div className="flex flex-col items-start w-full justify-center">

                                <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                                    <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                                </div>

                            </div>

                        </div>

                        <img src={item?.Image}  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />

                    </div>
                    )
                     : 
 
                    (

                    <div key={key}  className="w-full flex flex-row gap-10 mt-5">

                        <img src={ item?.Image }  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />
        
                        <div className="w-full flex flex-col item-start justify-center gap-8">
        
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-lg text-[#012939]">{ item?.subTitle }</h1>
                                <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">{ item?.title }</h1>
                            </div>
                            
                            <p className="text-[#012939] text-md font-md w-8/12">{ item?.contentTitle }</p>
        
                            
                            <div className="flex flex-col items-start w-full justify-center">
        
                                <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                                    <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                                </div>
        
                            </div>
        
                        </div>
        
                    </div>
                    )
                

            ) }

            {/* <div className="w-full flex flex-row gap-10 mt-5">

                <div className="w-full flex flex-col item-start justify-center gap-8">

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg text-[#012939]">CLIENT DETAILS</h1>
                        <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">Create detailed client profiles you can access fast</h1>
                    </div>
                    
                    <p className="text-[#012939] text-md font-md w-8/12">Customize your client profiles to save the details that matter most to your business, then search for them easily from the office or field.</p>

                    
                    <div className="flex flex-col items-start w-full justify-center">

                        <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                            <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                        </div>

                    </div>

                </div>

                <img src={FeaturesDefaultImage.FEATURESCLIENTDETAILS}  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />

            </div>

            <div className="w-full flex flex-row gap-10 mt-5">

                <img src={FeaturesDefaultImage.FEATURESCLIENTDETAILS}  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />

                <div className="w-full flex flex-col item-start justify-center gap-8">

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg text-[#012939]">JOB HISTORY</h1>
                        <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">Quickly find details from past jobs</h1>
                    </div>
                    
                    <p className="text-[#012939] text-md font-md w-8/12">Have the full history of a client’s past jobs available at your fingertips—no more scrambling for info in the middle of a phone call.</p>

                    
                    <div className="flex flex-col items-start w-full justify-center">

                        <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                            <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                        </div>

                    </div>

                </div>

            </div>

            <div className="w-full flex flex-row gap-10 mt-5">

                <div className="w-full flex flex-col item-start justify-center gap-8">

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg text-[#012939]">COMMUNICATION HISTORY</h1>
                        <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">Keep organized records of client communication</h1>
                    </div>
                    
                    <p className="text-[#012939] text-md font-md w-8/12">See all past emails and text messages between you and your clients, including automated notifications, booking confirmations, and on-my-way texts.</p>

                    
                    <div className="flex flex-col items-start w-full justify-center">

                        <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                            <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                        </div>

                    </div>

                </div>

                <img src={FeaturesDefaultImage.FEATURESCLIENTDETAILS}  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />

            </div>

            <div className="w-full flex flex-row gap-10 mt-5 mb-14">

                <img src={FeaturesDefaultImage.FEATURESCLIENTDETAILS}  style={{ height : '100%' ,width :'100%' ,maxHeight : '535px' , maxWidth : '760px' }} />

                <div className="w-full flex flex-col item-start justify-center gap-8">

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg text-[#012939]">LEAD MANAGEMENT</h1>
                        <h1 className="font-extrabold text-5xl text-[#012939] w-10/12">Turn sales leads into customers</h1>
                    </div>
                    
                    <p className="text-[#012939] text-md font-md w-8/12">Tag contacts as leads in Jobber so you can prioritize your time and resources, managing them separately from active clients.</p>

                    
                    <div className="flex flex-col items-start w-full justify-center">

                        <div className="py-3 px-6 bg-[#012939] flex items-center justify-center rounded">
                            <h1 className="font-bold text-xl text-[#84ea00]">Start Free Trial</h1>
                        </div>

                    </div>

                </div>

            </div>  */}


        </div>
      
    </CenterItems>
  )
}

export default ClientManagementJobber
