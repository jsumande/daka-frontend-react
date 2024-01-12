import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"
import SubHeader from "../../../../component/Typography/Sub-Header"

import { LandingPageDefaultImage } from "../../../../contants/imageContants"

const index = () => {
  return (
    <CenterItems>

        <div className="flex flex-col items-center w-full mb-10">
            <Header text={"We’re with you every step of the way"} />
        </div>

        <div className="w-full grid grid-cols-3 max-[1110px]:grid-cols-2 gap-4 max-[1110px]:gap-10">

            <div className="flex flex-col justify-center w-full gap-4">
                <img src={LandingPageDefaultImage.FREE_PRODUCT}/>
                <SubHeader text={"Free product coaching"} />

                <p className="text-[#012939] ">We offer free 1-on-1 product coaching to get you started and unlimited free customer support through live chat, phone, and email.</p>
            </div>

            <div className="flex flex-col justify-center w-full gap-4">
                <img src={LandingPageDefaultImage.JOBBER_GROUP}/>
                <SubHeader text={"Supportive community"} />

                <p className="text-[#012939] ">Our private Jobber Entrepreneurship Group is a space to ask questions and share advice with thousands of other business owners.</p>
            </div>

            <div className="flex flex-col justify-center w-full gap-4">
                <img src={LandingPageDefaultImage.HOME_JOBBER_APP}/>
                <SubHeader text={"Jobber mobile app"} />

                <p className="text-[#012939] ">You and your team can run your day-to-day operations from anywhere with our iOS and Android mobile apps on your phone or tablet.</p>
            </div>
        </div>
    
    </CenterItems>
  )
}

export default index
