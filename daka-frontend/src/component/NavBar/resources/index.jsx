import { Fragment} from 'react'

import ResourcesAnchorTagContainer from './component/resources_container'

const ResourcesNavbar = () => {
  return (
    <Fragment>

        <div className='w-full shadow-md bg-gray-50 py-5 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-3 gap-4 w-7/12'>
          
        
            <div className='flex flex-col justify-start items-start'>
        
                <ResourcesAnchorTagContainer AnchorTitle={"Jobber Academy"}/>
                <ResourcesAnchorTagContainer AnchorTitle={"Free Tools"}/>
              
            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <ResourcesAnchorTagContainer AnchorTitle={"Jobber Submit"}/>
                <ResourcesAnchorTagContainer AnchorTitle={"Jobber Grants"}/>

            </div>

            <div className='flex flex-col justify-start items-start'>
            
                <ResourcesAnchorTagContainer AnchorTitle={"Help Center"}/>
                <ResourcesAnchorTagContainer AnchorTitle={"Podcast"}/>

            </div>

          </div>

        </div>

    </Fragment>
  )
}

export default ResourcesNavbar
