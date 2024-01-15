import CenterItems from "../../../../component/Container/CenterItems"
import CenterContentColumn from "../Common_Component/CenterContentColumn"

const index = () => {
  return (
    <CenterItems biggerScreen={true}>

        <div id="BannerWhyJobber">
            <div id="GredTreeWorkingContent">
                
                <div className="w-full flex flex-col items-center py-14 gap-7">

                    <CenterContentColumn>   
                        <h1 className="text-6xl font-extrabold text-white mb-2">MAKE HOME SERVICE EASY</h1>
                        <h1 className="text-6xl font-extrabold text-white mb-2">FOR EVERYONE</h1>
                    </CenterContentColumn>

                    <p className="text-white text-xl w-7/12 text-center">From the customer’s request to the moment you’re paid, Jobber brings everything together to make the entire job and customer experience seamless.</p>
                    
                    <div className="flex flex-col gap-2">

                        <div className="px-10 py-5 bg-[#7db00e] flex items-center justify-center cursor-pointer">
                            <h1 className="font-extrabold text-lg text-white">START FREE TRIAL</h1>
                        </div>

                    </div>


                </div>

            </div>

        </div>

    </CenterItems>

  )
}

export default index
