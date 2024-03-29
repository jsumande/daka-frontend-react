import CenterItems from "../../../../../component/Container/CenterItems"

import { FeaturesDefaultImage } from "../../../../../contants/imageContants"

const TrustJobberHomeService = ({ content = null }) => {
  return (
    <CenterItems>

        <div className="w-full flex flex-col items-center justify-center gap-10">

                <h1 className="text-3xl font-extrabold text-[#012939] text-center ">Over <span className="underline decoration-[#c1ff72] underline-offset-8">200,000</span> home service pros trust Jobber</h1>
                
                <div className="w-full bg-[#f1f0eb] rounded py-5 flex flex-row items-center px-10">
                    
                    <div className="w-4/12 flex flex-col items-center justify-center gap-3">
                        <img src={FeaturesDefaultImage.FEATURESPATRIOTPOOLSPALOGO} className="rounded-full" style={{ maxHeight : '64px' , maxWidth : '64px' }} />
                        
                        <div className="flex flex-col items-center gap">
                            <h1 className="text-md font-extrabold text-[#012939]">{ content?.trust_jobber?.user?.name }</h1>
                            <p className="text-md font-md text-[#012939]">{ content?.trust_jobber?.user?.company }</p>
                        </div>
 
                    </div>

                    <div className="w-8/12 flex flex-col items-start justify-start gap-4">
                        <h1 className="text-2xl font-extrabold text-[#012939]">{ content?.trust_jobber?.sentiment?.messageOne }</h1>
                        <p className="text-md font-md text-[#012939]">{ content?.trust_jobber?.sentiment?.messageTwo }</p>
                    </div>

                </div>
        </div>
    </CenterItems>
  )
}

export default TrustJobberHomeService
