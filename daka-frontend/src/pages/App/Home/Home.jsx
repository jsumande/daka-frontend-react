import SearchAndFilterComponent from "../../../component/DashboardComponent/SearchAndFilterComponent/SearchAndFilterComponent"

const Home = () => {
  return (
    <div className="w-full h-full">

        <SearchAndFilterComponent/>
        
        <div className="p-3 w-full flex flex-col items-start justify-start gap-4">

            <div className="w-full flex flex-row items-start justify-between">

                <div className="flex flex-col">
                  <h1 className="text-[#012939] text-4xl font-extrabold">Good Day, Admin</h1>
                </div>

                <div className="flex flex-row gap-3">

                  <div className="border-[1px] border-[#7db00e] px-5 py-1 rounded cursor-pointer text-[#7db00e] ">
                    <h1 className="font-bold text-md">View Insights</h1>
                  </div>

                  <div className="border-[1px] border-[#7db00e] px-5 py-1 rounded cursor-pointer text-[#7db00e] ">
                    <h1 className="font-bold text-md">More Actions</h1>
                  </div>

                </div>

            </div>

            <div className="w-full flex flex-row items-center justify-between">

              <div className="w-full max-w-[411px] relative h-full max-h-[407px] bg-whiteflex flex-col border-t-[8px] border-[1px] border-gray-300 border-t-[#556acb] rounded">

                <div className="bg-gray-200 w-full p-4">
                  <h1 className="text-black text-xl font-bold">Requests</h1>
                </div>

                <div className="w-full h-full pt-10 pb-[100px] flex flex-col items-center justify-center">
                  <h1 className="text-gray-600 text-md font-sm text-center px-4">Record new service requests from your clients</h1>
                  <h1 className="text-gray-600 text-md font-sm text-center px-4 invisible">Record new service requests from your clients</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                  <div className="bg-[#7db00e] mb-[50px] rounded-sm cursor-pointer text-white w-full max-w-[150px] py-2 flex flex-col items-center">
                      <h1 className="font-bold text-md">Create a Request</h1>
                  </div>

                </div>
            
              </div>

              <div className="w-full max-w-[411px] relative max-h-[407px] bg-whiteflex flex-col border-t-[8px] border-[1px] border-gray-300 border-t-[#b36096] rounded">

                <div className="bg-gray-200 w-full p-4">
                  <h1 className="text-black text-xl font-bold">Quotes</h1>
                </div>

                <div className="w-full h-full pt-10 pb-[100px] flex flex-col items-center justify-center">
                  <h1 className="text-gray-600 text-md font-sm text-center px-4">Send your clients professional quotes they can approve online</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                  <div className="bg-[#7db00e] mb-[50px] rounded-sm cursor-pointer text-white w-full max-w-[150px] py-2 flex flex-col items-center">
                      <h1 className="font-bold text-md">Create a Quotes</h1>
                  </div>

                </div>
            
              </div>

              <div className="w-full max-w-[411px] relative max-h-[407px] bg-whiteflex flex-col border-t-[8px] border-[1px] border-gray-300 border-t-[#bbc520] rounded">

                <div className="bg-gray-200 w-full p-4">
                  <h1 className="text-black text-xl font-bold">Jobs</h1>
                </div>

                <div className="w-full h-full pt-10 pb-[100px] flex flex-col items-center justify-center">
                  <h1 className="text-gray-600 text-md font-sm text-center px-4">Schedule jobs with all the details you need to get them done</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                  <div className="bg-[#7db00e] mb-[50px] rounded-sm cursor-pointer text-white w-full max-w-[150px] py-2 flex flex-col items-center">
                      <h1 className="font-bold text-md">Schedule a Jobs</h1>
                  </div>

                </div>
            
              </div>

              <div className="w-full max-w-[411px] relative max-h-[407px] bg-whiteflex flex-col border-t-[8px] border-[1px] border-gray-300 border-t-[#8870c4] rounded">

                <div className="bg-gray-200 w-full p-4">
                  <h1 className="text-black text-xl font-bold">Invoices</h1>
                </div>

                <div className="w-full h-full pt-10 pb-[100px] flex flex-col items-center justify-center">
                  <h1 className="text-gray-600 text-md font-sm text-center px-4">Send your clients professional invoices they can pay online</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                  <div className="bg-[#7db00e] mb-[50px] rounded-sm cursor-pointer text-white w-full max-w-[150px] py-2 flex flex-col items-center">
                      <h1 className="font-bold text-md">Create an Invoice</h1>
                  </div>

                </div>
            
              </div>
              
            </div>

            <div className="w-full bg-white flex flex-col border-[1px] border-gray-300 rounded">

                <div className="bg-gray-200 w-full p-4">
                  <h1 className="text-black text-xl font-bold">Today's Appointments</h1>
                </div>

                <div className="w-full flex flex-row items-center justify-between px-4 pb-4">

                  <div className="w-full max-w-[405px] flex flex-row items-center justify-start py-3 gap-3">
                    
                      <div className="bg-[#012939] px-7 py-2 flex flex-col items-center justify-center rounded">
                        <h1 className="text-md text-white font-extrabold font-sm">0</h1>
                      </div>

                      <div className="flex flex-col">
                          <h1 className="text-md text-gray-600 font-sm">Total</h1>
                          <h1 className="text-md text-gray-600 font-sm">₱0.00</h1>
                      </div>

                  </div>

                  <div className="w-full max-w-[405px] flex flex-row items-center justify-start py-3 gap-3">
                    
                      <div className="bg-[#767676] px-7 py-2 flex flex-col items-center justify-center rounded">
                        <h1 className="text-md text-white font-extrabold font-sm">0</h1>
                      </div>

                      <div className="flex flex-col">
                          <h1 className="text-md text-gray-600 font-sm">To Go</h1>
                          <h1 className="text-md text-gray-600 font-sm">₱0.00</h1>
                      </div>

                  </div>

                  <div className="w-full max-w-[405px] flex flex-row items-center justify-start py-3 gap-3">
                    
                      <div className="bg-[#3ca2e0] px-7 py-2 flex flex-col items-center justify-center rounded">
                        <h1 className="text-md text-white font-extrabold font-sm">0</h1>
                      </div>

                      <div className="flex flex-col">
                          <h1 className="text-md text-gray-600 font-sm">Active</h1>
                          <h1 className="text-md text-gray-600 font-sm">₱0.00</h1>
                      </div>

                  </div>
                  
                  <div className="w-full max-w-[405px] flex flex-row items-center justify-start py-3 gap-3">
                    
                      <div className="bg-[#7db00e] px-7 py-2 flex flex-col items-center justify-center rounded">
                        <h1 className="text-md text-white font-extrabold font-sm">0</h1>
                      </div>

                      <div className="flex flex-col">
                          <h1 className="text-md text-gray-600 font-sm">Complete</h1>
                          <h1 className="text-md text-gray-600 font-sm">₱0.00</h1>
                      </div>

                  </div>

                </div>

            
              </div>

      
        </div>

    </div>
  )
}

export default Home
