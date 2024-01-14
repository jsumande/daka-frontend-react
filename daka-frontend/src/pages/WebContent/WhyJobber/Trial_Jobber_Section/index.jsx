import CenterItems from "../../../../component/Container/CenterItems"
import Header from "../../../../component/Typography/Header"

const TrialJobber = () => {
  return (
    <CenterItems biggerScreen={true}>
        <div className="bg-[#7db00e] w-full flex flex-row items-center justify-center gap-6 py-10">
            
            <div className="flex flex-col gap-2 items-start gap-3">
              <h1 className="font-bold text-xl text-[#012939]">TRY JOBBER FREE</h1>
              <Header text={"FREE 14-DAY TRIAL."} />
              <Header text={"NO CREDIT CARD REQUIRED."} />
            </div>

            <div className="h-[64px] px-16 bg-[#012939] flex items-center justify-center">
                <h1 className="font-bold text-xl text-white">START FREE TRIAL</h1>
            </div>

        </div>
    </CenterItems>
  )
}

export default TrialJobber
