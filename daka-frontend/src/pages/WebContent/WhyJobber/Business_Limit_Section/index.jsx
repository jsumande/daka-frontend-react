import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

const BusinessWithOutLimit = () => {
  return (
    <CenterItems biggerScreen={true}>
        <div className="bg-[#7db00e] w-full flex flex-col items-center gap-9 py-20">
            
            <Header text={"YOUR BUSINESS WITHOUT LIMITS"} />

            <div className="flex flex-col gap-2 items-center">

                <p className="text-[#012939] text-xl">Power your business with Jobber and grow your revenue an average of 37% in your first year.</p>
                <p className="text-[#012939] text-xl">Free up your evenings so you can be with friends and family, and get back to dreaming about</p>
                <p className="text-[#012939] text-xl">where you’ll take your</p>
                <p className="text-[#012939] text-xl">business next.</p>

            </div>

            <div className="h-[64px] px-16 bg-[#012939] flex items-center justify-center">
                <h1 className="font-bold text-xl text-white">START FREE TRIAL</h1>
            </div>

        </div>
    </CenterItems>
  )
}

export default BusinessWithOutLimit
