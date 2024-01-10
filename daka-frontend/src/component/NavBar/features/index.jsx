import { Fragment} from 'react'

import AnchorTagContainer from './component/feature_container'

const FeatureNavbar = () => {
  return (
    <Fragment>

        <div className='w-full shadow-md bg-gray-50 py-5 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-3 gap-4 w-7/12'>
          
        
            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>JOB MANAGEMENT</h1>

                <AnchorTagContainer AnchorTitle={"Client Manager"} />

                <AnchorTagContainer AnchorTitle={"Scheduling and dispatching"} />

                <AnchorTagContainer AnchorTitle={"Invoice and follow-ups"} />

                <AnchorTagContainer AnchorTitle={"Mobile app"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>CUSTOMER SERVICE</h1>

                <AnchorTagContainer AnchorTitle={"Online Booking"} />

                <AnchorTagContainer AnchorTitle={"Client hub"} />

                <AnchorTagContainer AnchorTitle={"Customer communications"} />

                <AnchorTagContainer AnchorTitle={"Job forms"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>BUSINESS OPERATIONS</h1>

                <AnchorTagContainer AnchorTitle={"Quoting and follow-ups"} />

                <AnchorTagContainer AnchorTitle={"Email and postcard marketing"} />

                <AnchorTagContainer AnchorTitle={"Credit card processing"} />

                <AnchorTagContainer AnchorTitle={"Reporting"} />

            </div>


          </div>

        </div>

    </Fragment>
  )
}

export default FeatureNavbar
