

const NavbarText = (text) => {
    return <h1 className='text-[#012939] font-medium pr-5 
    cursor-pointer text-sm hover:underline decoration-[#c1ff72]
    transition delay-3000 duration-3000 ease-in-out
    decoration-2 underline-offset-8'>{text}</h1>
}

const NavBar = () => {
    return (
  
      <div className='w-full bg-gray-50 py-5 flex flex-col items-center justify-center'>
          <div className='flex flex-row justify-between w-7/12'>
          
          <div className='flex flex-row justify-between items-center'>
            
            <h1 className='text-black pr-5 font-bold cursor-pointer text-2xl' >Jobber</h1>
            {/* <h1 className='text-black pl-5 font-bold cursor-pointer hover:text-gray-400' >Log In</h1> */}

            <div className="flex flex-row gap-3 mt-2">
                {NavbarText("Why Jobber?")}
                {NavbarText("Features")}
                {NavbarText("Industries")}
                {NavbarText("Pricing")}
                {NavbarText("Resources")}
            </div>


          </div>
          
          <div className='flex flex-row justify-between items-center'>
              <h1 className='text-black pr-5 font-bold cursor-pointer hover:text-gray-400' >1-888-721-1115</h1>
              <h1 className='text-black bg-[#c1ff72] px-4 py-1 font-bold cursor-pointer hover:text-gray-400' >Dev</h1>
          </div>
  
  
          </div>
      </div>
  
    )
  }
  
  export default NavBar
  