import CenterItems from "../../../../component/Container/CenterItems"

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
            <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Take back your time</h1>
        </CenterContentColumn>

 
        <CenterContentColumn classContent="gap-0.5">
            <p className="text-[#012939] text-xl">Where can you find the time to stay on top of all the new requests?n</p>
            <p className="text-[#012939] text-xl">Automate some of that repetitive office admin work and you’ll get</p>
            <p className="text-[#012939] text-xl">30% of your day back. You can spend that time finding new business.</p>
        </CenterContentColumn>

    </CenterContentColumn>

    <CardDisplayRow>

        <CardDisplayContent Title={"Mobile app"} Image={ WhyJobberDefaultImage.WJMOBILEAPP }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Get admin work done on the go, so that you don’t have</p>
                <p className="text-[#012939] text-md">to work evenings getting caught up.</p>
            </div>

        </CardDisplayContent>

        <CardDisplayContent Title={"One-click conversion"} Image={ WhyJobberDefaultImage.WJONECLICK }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Eliminate triple entry and errors by entering information</p>
                <p className="text-[#012939] text-md">once and converting it from quote to job to invoice</p>
                <p className="text-[#012939] text-md">automatically.</p>
            </div>

        </CardDisplayContent>

        <CardDisplayContent Title={"Batch invoicing"} Image={ WhyJobberDefaultImage.WJBATCHINVOICING }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Jobber compiles all jobs that require invoicing,</p>
                <p className="text-[#012939] text-md">generates, and sends those invoices with a single click,</p>
                <p className="text-[#012939] text-md">saving hours of billing work every week.</p>
            </div>

        </CardDisplayContent>


    </CardDisplayRow>

    <div className="flex flex-row h-[450px]">

        <img src={WhyJobberDefaultImage.WJPRESSUREWASHING} style={{ width : '545px' , height : '100%' }} />
        
        <div className="bg-[#012939] flex flex-col pl-5 pr-24 py-10 gap-3">

            <div className="flex flex-col">
                <h1 className='text-white pr-5 font-extrabold text-3xl' >IT SAVES ME OVER</h1>
                <h1 className='text-white pr-5 font-extrabold text-3xl' >$7000/MONTH IN</h1>
                <h1 className='text-white pr-5 font-extrabold text-3xl' >PAYROLL FOR OFFICE</h1>
                <h1 className='text-white pr-5 font-extrabold text-3xl' >STAFF.</h1>
            </div>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-white text-lg">Once we hit 12 people, I could no longer take the</p>
                <p className="text-white text-lg">amount of triple entry, chasing old pics in emails,</p>
                <p className="text-white text-lg">and going through the mundane chore of invoicing.</p>
                <p className="text-white text-lg">That’s when I found Jobber.</p>
            </div>

            <div className="flex flex-col border-t-2 border-[#7db00e] pt-3 mt-3">
                <h1 className='text-white pr-5 font-bold text-xl' >KRIS C</h1>
                <p className="text-white text-lg">President, Power Wash Pros</p>
            </div>
            
        </div>

    </div>

    <CenterContentColumn classContent="gap-4">

        <CenterContentColumn>   
            <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Be more efficient and</h1>
            <h1 className="text-5xl font-extrabold text-[#012939] mb-2">take on more work</h1>
        </CenterContentColumn>


        <CenterContentColumn classContent="gap-0.5">
            <p className="text-[#012939] text-xl">With the right tools for planning your week, you can fit more jobs into</p>
            <p className="text-[#012939] text-xl">each day and get more done without having to hire additional staff.</p>
            <p className="text-[#012939] text-xl">Your routes are optimized, customers receive automatic appointment</p>
            <p className="text-[#012939] text-xl">reminders, and your crews always have the job details they need in</p>
            <p className="text-[#012939] text-xl">their Jobber app.</p>
        </CenterContentColumn>

    </CenterContentColumn>

    <CardDisplayRow>

        <CardDisplayContent Title={"Scheduling and dispatching"} Image={ WhyJobberDefaultImage.WJSCHEDULINGANDDISPATCHING }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Create a job and assign it to your team with just a few clicks, and win</p>
                <p className="text-[#012939] text-md">emergency-based work over the phone by dispatching nearby crews</p>
                <p className="text-[#012939] text-md">quickly.</p>
            </div>

        </CardDisplayContent>

        <CardDisplayContent Title={"One-click conversion"} Image={ WhyJobberDefaultImage.WJONECLICKROUTE }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Eliminate triple entry and errors by entering information</p>
                <p className="text-[#012939] text-md">once and converting it from quote to job to invoice</p>
                <p className="text-[#012939] text-md">automatically.</p>
            </div>

        </CardDisplayContent>

    </CardDisplayRow>

    <CardDisplayRow>

        <CardDisplayContent Title={"Mobile app"} Image={ WhyJobberDefaultImage.WJVISITMOBILEAPP }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Give your crews the tools they need to know where to go, what to do,</p>
                <p className="text-[#012939] text-md">and how to bill, so that they can provide top-notch service on-site.</p>
            </div>

        </CardDisplayContent>

        <CardDisplayContent Title={"Appointment reminders"} Image={ WhyJobberDefaultImage.WJAPPOINTMENTREMINDERS }>

            <div className="flex flex-col items-start gap-0.5">
                <p className="text-[#012939] text-md">Prevent no-shows and cancellations by sending automated reminders</p>
                <p className="text-[#012939] text-md">to let customers know you’ll be coming.</p>
            </div>

        </CardDisplayContent>

    </CardDisplayRow>
    

</div>

</CenterItems>
  )
}

export default index
