import { useState } from "react";

import SearchAndFilterComponent from "../../../component/DashboardComponent/SearchAndFilterComponent/SearchAndFilterComponent"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Quotes = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="w-full h-full">

        <SearchAndFilterComponent/>

        <div className="p-3 w-full flex flex-col items-start justify-start gap-4">

          <div className="w-full flex flex-row items-start justify-between">

              <div className="flex flex-col">
                <h1 className="text-[#012939] text-4xl font-extrabold">Quotes</h1>
              </div>

              <div className="flex flex-row gap-3">

                <div className="bg-[#7db00e] px-5 py-1 rounded cursor-pointer text-white">
                  <h1 className="font-bold text-md">New Quote</h1>
                </div>

                <div className="border-[1px] border-[#7db00e] px-5 py-1 rounded cursor-pointer text-[#7db00e] ">
                  <h1 className="font-bold text-md">More Actions</h1>
                </div>

              </div>

          </div>

          <div className="w-full flex flex-row gap-7">

            <div className="w-8/12 flex flex-col border-[1px] border-gray-300 rounded-sm">

                <div className="w-full flex flex-row items-center justify-between p-3 bg-gray-200 gap-4">

                    <TextField fullWidth id="outlined-basic" label="Search quotes..." variant="outlined" sx={{ bgcolor : 'white' }} />

                    <FormControl fullWidth>

                      <InputLabel id="demo-simple-select-filled-label">Created</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{ bgcolor : 'white' }}
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>

                        <MenuItem value={10}>Last 30 days</MenuItem>
                        <MenuItem value={20}>This month</MenuItem>
                        <MenuItem value={30}>Last month</MenuItem>
                        <MenuItem value={30}>This year</MenuItem>
                      </Select>
                      
                    </FormControl>

                    <FormControl fullWidth>

                      <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        sx={{ bgcolor : 'white' }}
                      >
                        <MenuItem value="">
                          <em>Status</em>
                        </MenuItem>

                        <MenuItem value={10}>Quotes number</MenuItem>
                        <MenuItem value={20}>First name</MenuItem>
                        <MenuItem value={20}>Last name</MenuItem>
                        <MenuItem value={20}>Star rating</MenuItem>

                      </Select>
                      
                    </FormControl>

                    
                    <FormControl fullWidth>

                      <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        sx={{ bgcolor : 'white' }}
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>

                        <MenuItem value={10}>Draft</MenuItem>
                        <MenuItem value={20}>Awaiting response</MenuItem>
                        <MenuItem value={20}>Changes requested</MenuItem>
                        <MenuItem value={20}>Approved</MenuItem>
                        <MenuItem value={20}>Converted</MenuItem>
                        <MenuItem value={20}>Archived</MenuItem>
                        
                      </Select>
                      
                    </FormControl>

                </div>

                <div className="w-full flex flex-col bg-white items-center justify-center pt-24 pb-96 gap-10">

                    <h1 className="text-[#012939] font-bold text-2xl">Let's create a quote and win new work</h1>

                    <div className="bg-[#7db00e] px-16 py-2 rounded-sm cursor-pointer text-white">
                      <h1 className="font-extrabold text-lg">Create Quote</h1>
                    </div>

                </div>

            </div>

            <div className="w-4/12 flex flex-col gap-2">

                <h1 className="text-[#012939] text-2xl font-bold">Overview</h1>

                <div className="w-full max-w-[405px] flex flex-row justify-start gap-3">
                    
                    <div className="bg-[#eff0f2] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-gray-700 font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Draft</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Ready to be sent</h1>
                    </div>

                </div>

                <div className="w-full max-w-[405px] flex flex-row justify-start gap-3">
                    
                    <div className="bg-[#fcefde] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-[#886b42] font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Awaiting response</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Sent to the client, but waiting to hear back</h1>
                    </div>

                </div>

                <div className="w-full max-w-[405px] flex flex-row justify-start gap-3">
                    
                    <div className="bg-[#ffe2dc] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-[#54211b] font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Changes requested</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Client has requested changes</h1>
                    </div>

                </div>

                <div className="w-full max-w-[405px] flex flex-row justify-start  gap-3">
                    
                    <div className="bg-[#ebf4d8] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-[#526a2d] font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Approved</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Ready to be converted to jobs</h1>
                    </div>

                </div>

                <div className="w-full max-w-[405px] flex flex-row justify-start  gap-3">
                    
                    <div className="bg-[#e2f2ef] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-[#4e7467] font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Converted</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Converted to jobs</h1>
                    </div>

                </div>

                <div className="w-full max-w-[405px] flex flex-row justify-start  gap-3">
                    
                    <div className="bg-[#eff0f2] px-9 py-2 flex flex-col items-center justify-center rounded">
                      <h1 className="text-xl text-gray-700 font-extrabold">0</h1>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-sm text-gray-700 font-bold">Archived</h1>
                        <h1 className="text-sm text-gray-600 font-sm">Not converted to jobs</h1>
                    </div>

                </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default Quotes
