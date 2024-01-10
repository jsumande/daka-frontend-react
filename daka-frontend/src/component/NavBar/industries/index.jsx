import { Fragment} from 'react'

import IndustriesAnchorTagContainer from './component/industries_container'

const IndustriesNavbar = () => {
  return (
    <Fragment>

        <div className='w-full shadow-md bg-gray-50 py-5 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-3 gap-4 w-7/12'>
          
        
            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>CLEANING</h1>

                <IndustriesAnchorTagContainer AnchorTitle={"Cleaning"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Janitorial Cleaning"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Pressure Washing"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Window Washing"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>GREEN</h1>

                <IndustriesAnchorTagContainer AnchorTitle={"Lawn Care"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Tree Care"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Landscaping"} />
                <IndustriesAnchorTagContainer AnchorTitle={"Snow Removal"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>CONTRACTING</h1>

                <div className='flex flex-row justify-between gap-3'>

                    <div>
                        <IndustriesAnchorTagContainer AnchorTitle={"General Contracting"} />
                        <IndustriesAnchorTagContainer AnchorTitle={"Handyman"} />
                        <IndustriesAnchorTagContainer AnchorTitle={"Electrical"} />
                        <IndustriesAnchorTagContainer AnchorTitle={"Roofing"} />
                    </div>

                    <div>
                        <IndustriesAnchorTagContainer AnchorTitle={"Plumbing"} />
                        <IndustriesAnchorTagContainer AnchorTitle={"HVAC"} />
                        <IndustriesAnchorTagContainer AnchorTitle={"Painting"} />
                    </div>

                </div>

              

            </div>


          </div>

        </div>

    </Fragment>
  )
}

export default IndustriesNavbar
