import CenterItems from "../../../../component/Container/CenterItems"
import CenterContentColumn from "../Common_Component/CenterContentColumn"

const index = () => {
  return (
    <CenterItems biggerScreen={true}>

        <div id="GredTreeWorking">
            <div id="GredTreeWorkingContent">
                
                <div className="w-full flex flex-col items-center py-14 gap-2">

                    <CenterContentColumn>   
                        <h1 className="text-5xl font-extrabold text-white mb-2">WE’VE JUMPED UP TO</h1>
                        <h1 className="text-5xl font-extrabold text-white mb-2">$5,000-$6,000 PER DAY.</h1>
                    </CenterContentColumn>

                    <p className="text-white text-md">“We’re just so much more organized. Our goal used to be running $3,500 per day.”</p>
                    
                    <div className="w-3/12 flex flex-col border-t-4 border-[#7db00e] pt-3 mt-3 items-center">
                        <h1 className='text-white font-bold text-2xl' >Greg McKitrick</h1>
                        <p className="text-white text-lg">All-Pro Tree Care</p>
                    </div>


                </div>

            </div>
            <div id="GredTreeWorkingOverlay"></div>
        </div>

    </CenterItems>

  )
}

export default index
