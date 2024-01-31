import SearchAndFilterComponent from "../../../component/DashboardComponent/SearchAndFilterComponent/SearchAndFilterComponent"

const Reports = () => {
  return (
    <div className="w-full h-full">

        <SearchAndFilterComponent text={"Reports"}/>

        <div className="p-3 w-full h-full flex flex-col flex-nowrap items-start justify-start gap-4">

            <div className="w-full flex flex-row items-start justify-between">

                <div className="flex flex-col">
                  <h1 className="text-[#012939] text-4xl font-extrabold">Reports</h1>
                </div>

            </div>

            <div className="w-full flex flex-row justify-start gap-10">

              <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-sm">

                <div className="w-full flex flex-col p-3 bg-gray-200">
                    <h1 className="text-[#012939] font-bold text-lg">Financial reports</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Projected income</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Projected income from invoices awaiting payment</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Transaction list</h1>
                    <h1 className="text-gray-600 font-sm text-sm">All transactions from invoices, payments & deposits</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Invoices</h1>
                    <h1 className="text-gray-600 font-sm text-sm">New invoices report with additional client data</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Taxation</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Tax totals, total awaiting collection, and total by tax rate</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Aged receivables</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Invoices that are late by 30, 60, and 90+ days</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Bad debt</h1>
                    <h1 className="text-gray-600 font-sm text-sm">All invoices marked as bad debt</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Client balance summary</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Full list of customer account balances</h1>
                </div>

              </div>

              <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-sm">

                <div className="w-full flex flex-col p-3 bg-gray-200">
                    <h1 className="text-[#012939] font-bold text-lg">Work reports</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Visits</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Detailed list of past and upcoming visits</h1>
                </div>
                
                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">One-off jobs</h1>
                    <h1 className="text-gray-600 font-sm text-sm">New one-off job report with additional client and job data</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">One-off jobs (Legacy)</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Detailed list of all one-off jobs</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Recurring jobs</h1>
                    <h1 className="text-gray-600 font-sm text-sm">New recurring jobs report with additional client data</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Recurring jobs (Legacy)</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Detailed list of all recurring jobs</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Requests</h1>
                    <h1 className="text-gray-600 font-sm text-sm">New requests and assessments report</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Quotes</h1>
                    <h1 className="text-gray-600 font-sm text-sm">New quotes report with additional client data</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Quotes created (Legacy)</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Detailed list of all created quotes</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Quotes converted (Legacy)</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Detailed list of quotes that have been converted into jobs</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Products & Services</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Full usage of products & services on quotes, jobs, and invoices</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Waypoints</h1>
                    <h1 className="text-gray-600 font-sm text-sm">Full list of GPS waypoints logged</h1>
                </div>

                <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
                    <h1 className="text-[#012939] font-bold text-md">Timesheets</h1>
                    <h1 className="text-gray-600 font-sm text-sm">All time tracked for the team</h1>
                </div>
              
              </div>

              <div className="w-full flex flex-col gap-10">

                <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-sm">

                  <div className="w-full flex flex-col p-3 bg-gray-200">
                      <h1 className="text-[#012939] font-bold text-lg">Client reports</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Client communications</h1>
                      <h1 className="text-gray-600 font-sm text-sm">All email messages sent through Jobber</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Job follow-up emails</h1>
                      <h1 className="text-gray-600 font-sm text-sm">All job follow-up emails sent to clients</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Client contact info</h1>
                      <h1 className="text-gray-600 font-sm text-sm">All clients and their contact info</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer border-b-[0.5px] border-gray-300 hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Property list</h1>
                      <h1 className="text-gray-600 font-sm text-sm">All properties and their details</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Client re-engagement</h1>
                      <h1 className="text-gray-600 font-sm text-sm">Detailed list of clients that haven't had a closed job in the past 12 months</h1>
                  </div>

                </div>

                <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-sm">

                  <div className="w-full flex flex-col p-3 bg-gray-200">
                      <h1 className="text-[#012939] font-bold text-lg">Expense reports</h1>
                  </div>

                  <div className="w-full flex flex-col pl-3 py-2 bg-white cursor-pointer hover:bg-gray-50">
                      <h1 className="text-[#012939] font-bold text-md">Expenses</h1>
                      <h1 className="text-gray-600 font-sm text-sm">All tracked expenses and their details</h1>
                  </div>

                </div>

              </div>

            </div>

        </div>

    </div>
  )
}

export default Reports
