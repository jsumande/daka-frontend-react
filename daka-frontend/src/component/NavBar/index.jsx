import { Fragment , useState } from "react";

import FeatureNavbar from "./features/index";
import IndustriesNavbar from "./industries/index";
import ResourcesNavbar from "./resources";
import AnchorTag from "./component/anchor_tag";

import CenteritemsRow from "../Container/CenteritemsRow";

const NavBar = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [ hoverContent , setHoverContent ] = useState(1);

  const handleMouseEnter = (data) => {
    setIsHovered(true);
    setHoverContent(data)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



    return (
      <Fragment>

      <div className='w-full shadow-md bg-gray-50 py-5 flex flex-col relative items-center justify-center z-20'>
          <CenteritemsRow>
          
          <div className='flex flex-row justify-between items-center'>
            
            <h1 className='text-black pr-5 font-bold cursor-pointer text-2xl' >Jobber</h1>

            <div className="flex flex-row gap-3 mt-2">

                <AnchorTag text={"Why Jobber?"} handleMouseEnter = {handleMouseLeave } handleMouseLeave={ handleMouseLeave } />
                <AnchorTag text={"Features"} handleMouseEnter={ () => handleMouseEnter(1) } />
                <AnchorTag text={"Industries"} handleMouseEnter={ () => handleMouseEnter(2) } />
                <AnchorTag text={"Pricing"} handleMouseEnter = {handleMouseLeave } handleMouseLeave={ handleMouseLeave } />
                <AnchorTag text={"Resources"} handleMouseEnter={ () => handleMouseEnter(3) } />

            </div>

          </div>
          
          <div className='flex flex-row justify-between items-center'>
              <h1 className='text-black pr-5 font-bold cursor-pointer hover:text-gray-400' >1-888-721-1115</h1>
              <h1 className='text-black bg-[#c1ff72] px-4 py-1 font-bold cursor-pointer hover:text-gray-400' >Dev</h1>
          </div>
  
          </CenteritemsRow>

      </div>
      
      <div className={`${isHovered ? 'flex' : 'hidden'}  ease-in-out delay-1000 duration-1000 h-full w-full flex-col items-center absolute z-10`}>
        <div onMouseEnter={ handleMouseLeave } className="h-full w-full absolute top-1 bg-black opacity-50 z-0"></div>

        <div className='w-full bg-white flex flex-col items-center justify-center z-10'>

            { hoverContent === 1 ? <FeatureNavbar/> : null }
            { hoverContent === 2 ? <IndustriesNavbar/> : null }
            { hoverContent === 3 ? <ResourcesNavbar/> : null }
            
            <div className='w-full shadow-md bg-gray-200 py-3 flex flex-col items-center justify-center'>
              <div className='flex flex-row justify-between items-center w-7/12'>

                <h1 className='text-[#012939] pr-5 font-bold cursor-pointer text-md' >See All Features</h1>
                { hoverContent === 1 ? 
                  <div className="flex flex-row gap-4">

                    <h1 className='text-[#012939] pr-5 font-bold cursor-pointer text-md' >Integrations</h1>

                    <h1 className='text-[#012939] pr-5 font-bold cursor-pointer text-md' >New Product Updates</h1>

                  </div>
                : null }

              </div>
            </div>

        </div>

      </div>

      </Fragment>
    )
  }
  
  export default NavBar
  