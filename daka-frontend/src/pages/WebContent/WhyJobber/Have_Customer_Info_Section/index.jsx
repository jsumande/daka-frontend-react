import CenterItems from "../../../../component/Container/CenterItems"
import SubHeader from "../../../../component/Typography/Sub-Header"

import { WhyJobberDefaultImage } from "../../../../contants/imageContants"
import CenterContentColumn from "../Common_Component/CenterContentColumn"
import CardDisplayRow from "../Common_Component/CardDisplay/CardDisplayRow"
import CardDisplayContent from "../Common_Component/CardDisplay/CardDisplayContent"

const HaveCustomerInfo = () => {
  return (
    <CenterItems biggerScreen={true}>
        <div className="bg-white w-full flex flex-col items-center gap-10 py-16">

            <CenterContentColumn classContent="gap-10">

                <CenterContentColumn>   
                    <h1 className="text-5xl font-extrabold text-[#012939] mb-2">Have customer info</h1>
                    <h1 className="text-5xl font-extrabold text-[#012939] mb-2">right when you need it</h1>
                </CenterContentColumn>


                <CenterContentColumn classContent="gap-2">
                    <p className="text-[#012939] text-xl">If a customer calls with any questions about their service, you’ll be</p>
                    <p className="text-[#012939] text-xl">ready with answers. Their complete customer history is organized</p>
                    <p className="text-[#012939] text-xl">and accessible instantly from anywhere.</p>
                </CenterContentColumn>

                <div className="h-[54px] px-8 bg-[#7db00e] flex items-center justify-center cursor-pointer">
                    <h1 className="font-bold text-md text-white">LEARN MORE</h1>
                </div>
 
            </CenterContentColumn>

            <CardDisplayRow>

                <CardDisplayContent Title={"Search"} Image={ WhyJobberDefaultImage.WJSEARCHIMAGE }>

                    <div className="flex flex-col items-start gap-2">
                        <p className="text-[#012939] text-md">Answer important questions and resolve issues in</p>
                        <p className="text-[#012939] text-md">seconds. Client, job, and billing information is always at</p>
                        <p className="text-[#012939] text-md">your fingertips, whether you’re at the office or on the road.</p>
                    </div>

                </CardDisplayContent>

                <CardDisplayContent Title={"Full client history"} Image={ WhyJobberDefaultImage.WJFULLCLIENT }>
  
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-[#012939] text-md">Take care of your customer relationships by</p>
                        <p className="text-[#012939] text-md">remembering every detail. See past quotes, jobs,</p>
                        <p className="text-[#012939] text-md">invoices, and a full billing history associated with each client.</p>
                    </div>

                </CardDisplayContent>

                <CardDisplayContent Title={"Notes and attachments"} Image={ WhyJobberDefaultImage.WJSEARCHIMAGE }>

                    <div className="flex flex-col items-start gap-2">
                        <p className="text-[#012939] text-md">Attach notes, photos or files to client profiles and never</p>
                        <p className="text-[#012939] text-md">lose a piece of important information about the work.</p>
                    </div>

                </CardDisplayContent>


            </CardDisplayRow>

        </div>
    </CenterItems>
  )
}

export default HaveCustomerInfo
