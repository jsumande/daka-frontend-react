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

export default BookCustomer
