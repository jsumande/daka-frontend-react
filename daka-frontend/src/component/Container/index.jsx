
import { Outlet } from 'react-router-dom';

import Auth from '../NavBar/auth';
import NavBar from '../NavBar';
import Footer from '../Footer';

function index () {
  return (
    <div>
      {/* AuthPart */}
      <Auth/>

      {/* Navbar Part */}
      <NavBar/>

      {/* Page Content Here */}
      <div>
        <Outlet/>
      </div>

      <Footer/>


    </div>
  )
}

export default index
