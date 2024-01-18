import { Fragment , useState } from "react";

import FeatureNavbar from "./features/index";
import IndustriesNavbar from "./industries/index";
import ResourcesNavbar from "./resources";
import AnchorTag from "./component/anchor_tag";

import CenteritemsRow from "../Container/CenteritemsRow";

import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  summaryWithoutBorder: {
    boxShadow : 'none' , position : 'static'
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [ hoverContent , setHoverContent ] = useState(1);

  const [ displaySidebar , setDisplaySideBar] = useState(false);

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
            
            <a href="/" className='text-black pr-5 font-bold cursor-pointer text-2xl' >Jobber</a>

            <div className="flex flex-row gap-3 mt-2 max-[1000px]:hidden">

                <AnchorTag target_link={"/why-jobber"} text={"Why Jobber?"} handleMouseEnter = {handleMouseLeave } handleMouseLeave={ handleMouseLeave } />
                <AnchorTag text={"Features"} handleMouseEnter={ () => handleMouseEnter(1) } />
                <AnchorTag text={"Industries"} handleMouseEnter={ () => handleMouseEnter(2) } />
                <AnchorTag text={"Pricing"} handleMouseEnter = {handleMouseLeave } handleMouseLeave={ handleMouseLeave } />
                <AnchorTag text={"Resources"} handleMouseEnter={ () => handleMouseEnter(3) } />

            </div>

          </div>
          
          <div className='flex flex-row justify-between items-center gap-5'>
            
              <div className="flex flex-row items-center">
                <h1 className='text-black pr-5 font-bold cursor-pointer hover:text-gray-400' >1-888-721-1115</h1>
                <a href="auth/registration" className='text-black bg-[#c1ff72] px-4 py-1 font-bold cursor-pointer hover:text-gray-400' >Start Free Trial</a>
              </div>

              <div className=" cursor-pointer hidden max-[1000px]:flex" onClick={ () => setDisplaySideBar(true) }>
                <span className="text-[#012939] font-semibold text-xl"><GiHamburgerMenu/></span>
              </div>
              
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

      <Drawer
        anchor={'right'}
        open={displaySidebar}
        onClose={ () => setDisplaySideBar(false) }
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
        >

          <div className="px-2 py-4 flex flex-col gap-3">

              <div className="w-full flex flex-col items-end">
                <span onClick={ () => setDisplaySideBar(false) } className="text-[#012939] font-semibold text-3xl"><IoClose/></span>
              </div>

              <h1 className='text-[#012939] pl-4 font-semibold text-xl' >Why Jobber?</h1>

              <Accordion style={{ boxShadow : 'none' , position : 'static' }}>

                <AccordionSummary
                  expandIcon={ <span className="text-[#012939]"><ExpandMoreIcon /></span>}
                  aria-controls="panel1-content"
                  id="panel1-header"

                >
               
                  <h1 className='text-[#012939] pr-5 font-semibold text-xl' >Features</h1>

                </AccordionSummary>

                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

              <Accordion style={{ boxShadow : 'none' , position : 'static' }}>

                <AccordionSummary
                  expandIcon={ <span className="text-[#012939]"><ExpandMoreIcon /></span>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
               
                  <h1 className='text-[#012939] pr-5 font-semibold text-xl' >Industries</h1>

                </AccordionSummary>

                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

              <h1 className='text-[#012939] pl-4 font-semibold text-xl' >Why Jobber?</h1>

              <Accordion style={{ boxShadow : 'none' , position : 'static' }}>

                <AccordionSummary
                  expandIcon={ <span className="text-[#012939]"><ExpandMoreIcon /></span>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
               
                  <h1 className='text-[#012939] pr-5 font-semibold text-xl' >Resources</h1>

                </AccordionSummary>

                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

      
          </div>

        </Box>
      </Drawer>

      </Fragment>
    )
  }
  
  export default NavBar
  