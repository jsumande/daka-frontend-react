import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

import { WhyJobberDefaultImage } from "../../../../contants/imageContants"
import CenterContentColumn from "../Common_Component/CenterContentColumn"
import CardDisplayRow from "../Common_Component/CardDisplay/CardDisplayRow"
import CardDisplayContent from "../Common_Component/CardDisplay/CardDisplayContent"

const index = () => {
  return (
    <CenterItems biggerScreen={true}>

        <div className="bg-white w-full flex flex-col items-center gap-14 py-16">
            
            <CenterContentColumn classContent="gap-4">

                <CenterContentColumn>   
                    <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Stay on track today and</h1>
                    <h1 className="text-5xl font-extrabold text-[#012939] mb-2">improve for tomorrow</h1>
                </CenterContentColumn>


                <CenterContentColumn classContent="gap-0.5">
                    <p className="text-[#012939] text-xl">With more jobs being done daily, you’re able to ensure they stay on</p>
                    <p className="text-[#012939] text-xl">track without all the micro-managing. You can see exactly where</p>
                    <p className="text-[#012939] text-xl">crews are and get notified when a job’s done. For every job you</p>
                    <p className="text-[#012939] text-xl">complete, you’ll add more data to your reporting so that you can fine-</p>
                    <p className="text-[#012939] text-xl">tune your process and keep getting even better.</p>
                </CenterContentColumn>

            </CenterContentColumn>

            <CardDisplayRow>

                <CardDisplayContent Title={"Job tracking"} Image={ WhyJobberDefaultImage.WJJOBTRACKING }>

                    <div className="flex flex-col items-start gap-0.5">
                        <p className="text-[#012939] text-md">Keep an eye on time tracked, expenses, and notes all in</p>
                        <p className="text-[#012939] text-md">one place so that you can make the right decisions to</p>
                        <p className="text-[#012939] text-md">keep the job on track and profitable.</p>
                    </div>

                </CardDisplayContent>

                <CardDisplayContent Title={"Dashboard and activity feed"} Image={ WhyJobberDefaultImage.WJDASHBOARDFEED }>

                    <div className="flex flex-col items-start gap-0.5">
                        <p className="text-[#012939] text-md">Keep a finger on your business’s pulse with instant</p>
                        <p className="text-[#012939] text-md">updates right from your dashboard. See team progress,</p>
                        <p className="text-[#012939] text-md">company activity, and get recommended actions.</p>
                    </div>

                </CardDisplayContent>

                <CardDisplayContent Title={"20+ pre-built reports"} Image={ WhyJobberDefaultImage.WJPROJECTED }>

                    <div className="flex flex-col items-start gap-0.5">
                        <p className="text-[#012939] text-md">Use your financial and customer data to see projected</p>
                        <p className="text-[#012939] text-md">income, sales trends, and identify your happiest</p>
                        <p className="text-[#012939] text-md">customers.</p>
                    </div>

                </CardDisplayContent>


            </CardDisplayRow>

            <div className="flex flex-row h-[363px]">

                <img src={WhyJobberDefaultImage.WJGREGWORKING} style={{ width : '545px' , height : '100%' }} />
                
                <div className="bg-[#012939] flex flex-col pl-5 pr-24 py-10 gap-3">

                    <div className="flex flex-col">
                        <h1 className='text-white pr-5 font-extrabold text-3xl' >WE’VE BEEN ABLE TO CUT</h1>
                        <h1 className='text-white pr-5 font-extrabold text-3xl' >OUR NON-BILLABLE</h1>
                        <h1 className='text-white pr-5 font-extrabold text-3xl' >HOURS BY 50%.</h1>
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                        <p className="text-white text-lg">The crew logs their hours into each job they’re</p>
                        <p className="text-white text-lg">working on, which gives me better estimates, which</p>
                        <p className="text-white text-lg">leads to more sales.</p>
                    </div>

                    <div className="flex flex-col border-t-2 border-[#7db00e] pt-3 mt-3">
                        <h1 className='text-white pr-5 font-bold text-xl' >GREG PILOTTI</h1>
                        <p className="text-white text-lg">Greg Pilotti Furniture Makers</p>
                    </div>
                    
                </div>

            </div> 

            <div className="w-full flex flex-row justify-evenly">

                <div className="w-full flex flex-col gap-6">

                    <div className="flex flex-col ml-10 gap-2">

                        <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Get paid faster</h1>

                        <div className="flex flex-col gap-0.5">
                            <p className="text-[#012939] font-semibold text-lg">You’ll deliver 5-star service every step of the way, and your customers</p>
                            <p className="text-[#012939] font-semibold text-lg">will be happy to pay you for it. Instantly in-person, online within 24 hours,</p>
                            <p className="text-[#012939] font-semibold text-lg">or automatically every month.</p>
                        </div>

                    </div>

                    <div className="flex flex-col ml-10 gap-2">
                        <Header text={"Card reader"} />
                        <p className="text-[#012939] text-md">Take payments on the spot by swiping credit and debit cards in person. (US only)</p>
                    </div>
                    
                    <div className="flex flex-col ml-10 gap-2">

                        <Header text={"Online payments"} />

                        <div className="flex flex-col gap-0.5">
                            <p className="text-[#012939] text-md">Get paid 10x faster than checks on average by offering online invoice payments.</p>
                            <p className="text-[#012939] text-md">Payments are deposited into your bank account in seconds, 24/7—even on weekends</p>
                            <p className="text-[#012939] text-md">and holidays.</p>
                        </div>

                    </div>    

                    <div className="flex flex-col ml-10 gap-2">

                        <Header text={"Automatic payments"} />

                        <div className="flex flex-col gap-0.5">
                            <p className="text-[#012939] text-md">Make recurring revenue for recurring work by automatically generating an invoice when</p>
                            <p className="text-[#012939] text-md">a job is complete, and charging your client’s credit card saved on file.</p>
                        </div>

                    </div>

                    <div className="flex flex-col ml-10 gap-2">

                        <div className="w-3/12 py-2 bg-[#7db00e] flex items-center justify-center cursor-pointer">
                            <h1 className="font-bold text-md text-white">LEARN MORE</h1>
                        </div>

                    </div>

                </div>

                <img src={WhyJobberDefaultImage.WJGETPAIDFASTER} style={{ maxHeight : '711px' , maxWidth : '722px' }} />
                
            </div>

        </div>
      
    </CenterItems>
  )
}

export default index
