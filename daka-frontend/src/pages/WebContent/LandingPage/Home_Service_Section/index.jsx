import CenterItems from "../../../../component/Container/CenterItems"

import { LandingPageDefaultImage } from "../../../../contants/imageContants"

const index = () => {
  return (
        <CenterItems>

            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-extrabold text-[#012939] text-center">Over <span className="underline decoration-[#c1ff72] underline-offset-8">200,000</span> home service pros in 50+ industries trust Jobber</h1>

                <div className="w-full grid grid-cols-6 max-[1000px]:grid-cols-3 items-center place-items-center mt-4 mb-2">

                    { LandingPageDefaultImage.SERVICE.map( item => (
                        <img src={item.img} key={item} style={{ width : item.width , height : item.height , objectFit : "contain" , maxHeight : "100%" , maxWidth : "100%" }} />
                    )) }

                </div>
                
            </div>

        </CenterItems>

  )
}

export default index
