import { Outlet } from 'react-router-dom';

import SidebarContainer from './sidebar/SidebarContainer';

const index = () => {
  return (
    <div>

        <div className="w-full h-screen flex flex-row flex-start bg-white">

            <div className='w-[200px] bg-[#012939]'>
                <SidebarContainer/>
            </div>

            <div className='w-full '>
                <Outlet/>
            </div>
        
        </div>
        
    </div>
  )
}

export default index
