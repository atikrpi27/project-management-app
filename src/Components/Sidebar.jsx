import React from 'react'
import Button from './Button'

export default function Sidebar() {
  return (
    <div className='w-1/3 h-full px-8 pt-10 bg-stone-900 text-stone-50 md:w-1/5 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
        <ul></ul>
        <Button> + Add Project</Button>
    </div>
  )
}
