import { Fragment } from "react"

import { IoLogoFacebook , IoLogoTwitter , IoLogoInstagram , IoLogoYoutube , IoLogoLinkedin  } from "react-icons/io";

import Footer_Anchor_Tag from "./component/anchor_tag"
import CenterItems from "../Container/CenterItems";

import { industries_tags_set_one , industries_tags_set_two , features_tags , resources_tags , company_tags } from "../../contants"


const Footer = () => {
  return (
    <Fragment>
      <div className="w-full bg-[#4d6974] py-10 flex flex-col items-center justify-center z-0">
        <CenterItems>

          <h1 className='text-white pr-5 font-bold text-4xl' >Jobber</h1>

          <div className="grid grid-cols-3 gap-4 my-10">

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-white text-lg" >Industries We Serve</h1>

              <div className="grid grid-cols-2 gap-4">

                <div className="flex flex-col gap-2">

                  { industries_tags_set_one?.map( item => (
                    <Footer_Anchor_Tag key={item.text} tags={item?.anchor} text={ item?.text }/>
                  )) }

                </div>

                <div className="flex flex-col gap-2">

                  { industries_tags_set_two?.map( item => (
                    <Footer_Anchor_Tag key={item.text} text={ item.text }/>
                  )) }
                  
                </div>

              </div>

            </div>

            <div className="flex flex-row gap-9">

              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-white text-lg" >Features</h1>

                <div className="flex flex-col gap-2">

                  { features_tags?.map( item => (
                    <Footer_Anchor_Tag key={item.text} text={ item.text }/>
                  )) }

                </div>

              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-white text-lg" >Resources</h1>

                <div className="flex flex-col gap-2">

                  { resources_tags?.map( item => (
                    <Footer_Anchor_Tag key={item.text} text={ item.text }/>
                  )) }

                </div>

              </div>

            </div>

            <div className="flex flex-row gap-9">

              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-white text-lg" >Company</h1>

                <div className="flex flex-col gap-2">

                  { company_tags?.map( item => (
                    <Footer_Anchor_Tag key={item.text} text={ item.text }/>
                  )) }

                  <h1 className="mt-5 text-sm text-white cursor-pointer hover:underline hover:text-gray-300">1-888-721-1115</h1>
                  
                  <h1 className="text-sm text-white cursor-pointer hover:underline hover:text-gray-300">hello@getjobber.com</h1>

                  <div className="flex flex-row gap-2 mt-2">

                    <span className="text-gray-300 text-3xl"><IoLogoFacebook/></span>
                    <span className="text-gray-300 text-3xl"><IoLogoTwitter/></span>
                    <span className="text-gray-300 text-3xl"><IoLogoInstagram/></span>
                    <span className="text-gray-300 text-3xl"><IoLogoYoutube/></span>
                    <span className="text-gray-300 text-3xl"><IoLogoLinkedin/></span>

                  </div>

                </div>

              </div>

              <div className="flex flex-col gap-2">
                <img style={{ width : "113px" , height : "38px"}} src="https://getjobber.com/wp-content/themes/jobber-bold/assets/images/appstore.svg" />
                <img src="https://getjobber.com/wp-content/themes/jobber-bold/assets/images/googleplay.svg" />
              </div>

            </div>

          </div>

          <hr className="text-white"/>

          <div className="flex flex-row justify-end items-center gap-4 mt-3">
            <h1 className="text-md text-white cursor-pointer" >© Jobber 2024</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Privacy</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Accessibility</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Cookie Settings</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Terms of Service</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Security</h1>
            <h1 className="text-md text-white cursor-pointer underline hover:no-underline hover:text-gray-300" >Sitemap</h1>
          </div>

        </CenterItems>
      </div>
    </Fragment>
  )
}

export default Footer
