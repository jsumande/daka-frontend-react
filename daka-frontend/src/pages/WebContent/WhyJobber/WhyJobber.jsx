import { Fragment } from "react";


import BusinessWithOutLimit from "./Business_Limit_Section";
import HaveCustomerInfo from "./Have_Customer_Info_Section";
import StayOnTrack from "./Stay_On_Track_Section";
import GreyMcKitrick from "./Greg_McKitrick";
import TakeBackYourTime from "./Take_Back_Your_Time_Section";
import TrialJobber from "./Trial_Jobber_Section";
import BookCustomer from "./Book_Customer_Section";
import CustomerExpects from "./Customer_Expect_Section";
import BannerSection from "./Banner_Section";

function WhyJobber() {
    return (
      <div className="w-full bg-[#012939] flex flex-col items-center">

        <BannerSection/>

        <CustomerExpects/>
        <BookCustomer/>
        <TrialJobber/>
 
        <TakeBackYourTime />
        <GreyMcKitrick/>

        <Fragment>
          <StayOnTrack />
          <HaveCustomerInfo />
        </Fragment>

        <BusinessWithOutLimit />
      </div>
    )
  }
  
  export default WhyJobber
  
  
  