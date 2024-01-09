
import { Outlet } from 'react-router-dom';

import Auth from '../NavBar/auth';
import NavBar from '../NavBar';

function index () {
  return (
    <div>
      {/* AuthPart */}
      <Auth/>

      {/* Navbar Part */}
      <NavBar/>

      {/* Page Content Here */}
      <div className='container mx-auto'>
        <Outlet/>
      </div>


    </div>
  )
}

export default index
