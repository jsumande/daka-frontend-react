import { Fragment} from 'react'

import AnchorTagContainer from './component/feature_container'
import GriditemsRow from '../../Container/GridItemsRow'

const FeatureNavbar = () => {
  return (
    <Fragment>

        <div className='w-full shadow-md bg-gray-50 py-5 flex flex-col items-center justify-center'>
          <GriditemsRow>
          
        
            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>JOB MANAGEMENT</h1>

                <AnchorTagContainer AnchorTitle={"Client Manager"} target_link={"/features/client-manager"} />

                <AnchorTagContainer AnchorTitle={"Scheduling and dispatching"} target_link={"/features/scheduling-dispatching"} />

                <AnchorTagContainer AnchorTitle={"Invoice and follow-ups"} target_link={"/features/invoicing-service"} />

                <AnchorTagContainer AnchorTitle={"Mobile app"}  target_link={"/features/mobile-app"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>CUSTOMER SERVICE</h1>

                <AnchorTagContainer AnchorTitle={"Online Booking"} target_link={"/features/online-booking"} />

                <AnchorTagContainer AnchorTitle={"Client hub"} target_link={"/features/client-hub"} />
                
                <AnchorTagContainer AnchorTitle={"Customer communications"} target_link={"/features/customer-communications"} />

                <AnchorTagContainer AnchorTitle={"Job forms"} target_link={"/features/job-forms"} />

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <h1 className='text-gray-400 font-bold text-xs mb-5'>BUSINESS OPERATIONS</h1>

                <AnchorTagContainer AnchorTitle={"Quoting and follow-ups"} />

                <AnchorTagContainer AnchorTitle={"Email and postcard marketing"} />

                <AnchorTagContainer AnchorTitle={"Credit card processing"} />

                <AnchorTagContainer AnchorTitle={"Reporting"} />

            </div>


          </GriditemsRow>

        </div>

    </Fragment>
  )
}

export default FeatureNavbar
