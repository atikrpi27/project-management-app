import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-1/3 h-full px-8 pt-10 bg-stone-900 text-stone-50 md:w-1/5 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
        <ul></ul>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>+ Add Project</button>
    </div>
  )
}
