import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-6 bg-[#1C1C1C] mt-7 rounded-xl shadow-lg'>
        <form className='flex flex-wrap w-full gap-6'>

          
          <div className='w-full md:w-[48%] space-y-4'>

            <div>
              <label className='text-sm text-gray-300'>Task Title</label>
              <input
                type="text"
                placeholder='Make a UI design'
                className='mt-1 w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-sm outline-none border border-transparent focus:border-emerald-500'
              />
            </div>

            <div>
              <label className='text-sm text-gray-300'>Date</label>
              <input
                type="date"
                className='mt-1 w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-sm outline-none border border-transparent focus:border-emerald-500'
              />
            </div>

            <div>
              <label className='text-sm text-gray-300'>Assign to</label>
              <input
                type="text"
                placeholder='Employee Name'
                className='mt-1 w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-sm outline-none border border-transparent focus:border-emerald-500'
              />
            </div>

            <div>
              <label className='text-sm text-gray-300'>Category</label>
              <input
                type="text"
                placeholder='Design, Development etc'
                className='mt-1 w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-sm outline-none border border-transparent focus:border-emerald-500'
              />
            </div>

          </div>

        
          <div className='w-full md:w-[48%]'>
            <label className='text-sm text-gray-300'>Description</label>
            <textarea
              placeholder='Write task details here...'
              rows="13"
              className='mt-1 w-full rounded-lg bg-[#2A2A2A] px-4 py-3 text-sm outline-none border border-transparent focus:border-emerald-500 resize-none'
            />
          </div>
          <div className='w-full flex justify-end'>
            <button className='bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 px-8 py-3 rounded-full font-bold text-white w-64'>
              Create Task
            </button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
