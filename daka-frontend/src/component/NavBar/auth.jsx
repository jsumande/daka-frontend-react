import CenteritemsRow from "../Container/CenteritemsRow"

const auth = () => {
  return (

    <div className='w-full bg-[#012939] py-3 flex flex-col items-center justify-center'>
        <CenteritemsRow>
        
        {/* <h1 className='text-white underline hover:no-underline cursor-pointer hover:text-gray-400'>Limited time offer: save up to 30% <span className='text-[#c1ff72] font-bold'>SAVE NOW</span></h1> */}
        <h1 className='text-white underline hover:no-underline cursor-pointer hover:text-gray-400'></h1>
        
        <div className='flex flex-row justify-between'>
            <h1 className='text-white pr-5 font-bold cursor-pointer hover:text-gray-400' >Español</h1>
            <a href="auth/login" className='text-white border-white border-l-[1px] pl-5 font-bold cursor-pointer hover:text-gray-400' >Log In</a>
        </div>


        </CenteritemsRow>
    </div>

  )
}

export default auth
