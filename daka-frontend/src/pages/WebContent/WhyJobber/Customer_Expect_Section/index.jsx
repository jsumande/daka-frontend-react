import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

import { WhyJobberDefaultImage } from "../../../../contants/imageContants"

const CustomerExpects = () => {
  return (
    <CenterItems biggerScreen={true}>

        <div className="bg-white w-full flex flex-col items-center gap-14 py-16">


        <div className="w-full flex flex-row justify-evenly">

            <div className="w-full flex flex-col gap-6">

                <div className="flex flex-col ml-10 gap-2">

                    <h1 className="text-4xl font-extrabold text-[#012939] mb-2 w-10/12">CUSTOMERS EXPECT CONVENIENCE</h1>
 
                    <div className="flex flex-col gap-5">
                        <p className="text-[#012939] font-md text-lg w-10/12">Many home service businesses are behind in meeting customer expectations, and for good reason. Thanks to a world full of streaming services and same-day deliveries, customer expectations for speed and quality of service are higher than ever. And today’s customers aren’t just comparing you to your peers—they’re measuring you against the best in the world.</p>
                        <p className="text-[#012939] font-md text-lg w-10/12">But here’s the good news: when you give customers a convenient experience from start to finish, it pays—literally.</p>
                    </div>

                </div>
    
            </div>

            <img src={WhyJobberDefaultImage.WJCUSTOMEREXPECT} style={{ maxHeight : '520px' , maxWidth : '720px' }} />

        </div>

        <div className="flex flex-col items-center w-5/12  gap-6">

            <p className="text-[#012939] font-md text-xl text-center">Prioritizing customer service can be resource-intensive, taking away from time on the job or with family. With Jobber, customers get what they need without needing your constant attention – giving your business a leg up over the competition.</p>

            <div className="flex flex-col items-start ml-10 gap-2">

                <h1 className="text-3xl font-extrabold text-[#012939] mb-2">Meet new customer expectations</h1>

                <div className="flex flex-col gap-5">
                    <p className="text-[#012939] font-md text-lg">Consistently impress your customers with experiences they have come to expect in other industries.</p>
                </div>

            </div>

            <div className="flex flex-col items-start ml-10 gap-2">

                <h1 className="text-3xl font-extrabold text-[#012939] mb-2">Get rewarded</h1>

                <div className="flex flex-col gap-5">
                    <p className="text-[#012939] font-md text-lg">Turn customer service into fuel for your business. Jobber makes it easy for customers to refer friends online, and to thank service pros with an average 15% tip.</p>
                </div>

            </div>

            <div className="flex flex-col items-start ml-10 gap-2">

                <h1 className="text-3xl font-extrabold text-[#012939] mb-2">Learn & improve</h1>

                <div className="flex flex-col gap-5">
                    <p className="text-[#012939] font-md text-lg">Follow up every job with a thank-you and feedback survey, to identify strong team members and apply learnings to future jobs.</p>
                </div>

            </div>
            
    
        </div>
        </div>

        <div className="bg-[#7db00e] w-full flex flex-row items-center justify-center gap-6 py-10">
            
            <h1 className="font-extrabold text-3xl text-[#012939]">33%of people say they’d pay 20% more for a convenient experience.</h1>

        </div>

    </CenterItems>
  )
}

export default CustomerExpects
