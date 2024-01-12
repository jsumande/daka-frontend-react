
import CenterItems from "../../../../component/Container/CenterItems"

import Header from "../../../../component/Typography/Header"

const index = () => {
  return (
    <CenterItems>

        <div className="flex flex-row items-center w-full mb-10">
            <Header text={"How Jobber Works"} />
            <h1 className="mt-2 text-lg font-lg italic">3 minutes</h1>
        </div>

        <div className="w-full">

            <iframe className="w-full" height={550} src="https://www.youtube.com/embed/XZKvg6RxGsQ"/>

        </div>
      

    </CenterItems>
  )
}

export default index
