
import Banner from "../LandingPage/Banner_Section";
import Free_Resources from "./Free_Resources_Section";
import Start_Jobber from "./Start_Using_Jobber_Section";
import EveryStep from "./EveryStep_Section";
import HowJobberWorks from "./How_Jobber_Works_Section";
import ProvideEasy from "./Provide_An_easy_Section";
import HomeService from "./Home_Service_Section";

function LandingPage() {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Banner/>

      <div className="mt-10 mb-10">
        <HomeService/>
      </div>

      <ProvideEasy/>
      <span className="my-5"/>
      <HowJobberWorks/>
      <span className="my-5"/>
      <EveryStep/>
      <span className="my-5"/>
      <Start_Jobber/>
      <span className="my-5"/>
      <Free_Resources/>
      <span className="my-5"/>
    </div>
  )
}

export default LandingPage


