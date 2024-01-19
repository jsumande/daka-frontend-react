import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

import { WhyJobberDefaultImage } from "../../../../contants/imageContants"
import CenterContentColumn from "../Common_Component/CenterContentColumn"
import CardDisplayRow from "../Common_Component/CardDisplay/CardDisplayRow"
import CardDisplayContent from "../Common_Component/CardDisplay/CardDisplayContent"

const BookCustomer = () => {
  return (
    <CenterItems biggerScreen={true}>

    <div className="bg-white w-full flex flex-col items-center gap-14 py-16">

        <CenterContentColumn classContent="gap-4">

            <CenterContentColumn>   
                <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Book customers with</h1>
                <h1 className="text-5xl font-extrabold text-[#012939] mb-2">less effort</h1>
            </CenterContentColumn>


            <CenterContentColumn classContent="gap-0.5">
                <p className="text-[#012939] text-xl">Save time by letting customers book an appointment with you online.</p>
                <p className="text-[#012939] text-xl">When a booking is made, Jobber will automatically schedule the job</p>
                <p className="text-[#012939] text-xl">based on your preferences.</p>
            </CenterContentColumn>

        </CenterContentColumn>

        <CardDisplayRow>

            <CardDisplayContent Title={"Choose your bookable services"} Image={ WhyJobberDefaultImage.WJBOOKINGSERVICES }>

                <div className="flex flex-col items-start gap-0.5">
                    <p className="text-[#012939] text-md">Create clear descriptions of what your services include and set</p>
                    <p className="text-[#012939] text-md">estimated prices and durations. Then control your schedule by setting</p>
                    <p className="text-[#012939] text-md">preferences around your earliest availability and buffer times between</p>
                    <p className="text-[#012939] text-md">bookings.</p>
                </div>

            </CardDisplayContent>

            <CardDisplayContent Title={"Set notifications and confirmation emails"} Image={ WhyJobberDefaultImage.WJNOTIFICATION }>

                <div className="flex flex-col items-start gap-0.5">
                    <p className="text-[#012939] text-md">Prevent no-shows and always be ready for upcoming jobs. You’ll get</p>
                    <p className="text-[#012939] text-md">notified when a booking is made, and your customer will receive an email</p>
                    <p className="text-[#012939] text-md">confirmation.</p>
                </div>

            </CardDisplayContent>

        </CardDisplayRow>

        
        <div className="w-full flex flex-row justify-evenly">

<div className="w-full flex flex-col gap-6">

    <div className="flex flex-col ml-10 gap-2">

        <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Win more jobs</h1>

        <div className="flex flex-col gap-0.5">
            <p className="text-[#012939] font-semibold text-lg">Get back to potential customers faster than anyone else can,</p>
            <p className="text-[#012939] font-semibold text-lg">and get more business. Within an hour of an online request</p>
            <p className="text-[#012939] font-semibold text-lg">coming in, send back a professional quote that they can</p>
            <p className="text-[#012939] font-semibold text-lg">approve online—immediately. No one else is doing that.</p>
        </div>

    </div>

    <div className="flex flex-col ml-10 gap-2">
        <Header text={"Send quotes by text message"} />
        <p className="text-[#012939] text-md">Text messages close twice as many quotes as emails, in half the time.</p>
    </div>
    
    <div className="flex flex-col ml-10 gap-2">

        <Header text={"Professional quotes"} />

        <div className="flex flex-col gap-0.5">
            <p className="text-[#012939] text-md">Create branded quotes that customers can review and approve online,</p>
            <p className="text-[#012939] text-md">heard back on, and close deals you might have otherwise missed.</p>
        </div>

    </div>    

    <div className="flex flex-col ml-10 gap-2">

        <Header text={"Automatic follow-ups"} />

        <div className="flex flex-col gap-0.5">
            <p className="text-[#012939] text-md">Send automated follow-up email or text messages for quotes you haven’t</p>
            <p className="text-[#012939] text-md">a job is complete, and charging your client’s credit card saved on file.</p>
        </div>

    </div>
 
    <div className="flex flex-col ml-10 gap-2">

        <div className="w-3/12 py-2 bg-[#7db00e] flex items-center justify-center cursor-pointer">
            <h1 className="font-bold text-md text-white">LEARN MORE</h1>
        </div>

    </div>

</div>

<img src={WhyJobberDefaultImage.WJWINRATE} style={{ maxHeight : '711px' , maxWidth : '722px' }} />

</div>

    </div>

    </CenterItems>
  )
}

export default BookCustomer
