import React from 'react'
import No_Project from '/image/NoProject.png'
import Button from './Button'

export default function NoProject() {
  return (
    <div className='w-3/4 text-center'>
      <img src={No_Project} alt="No Project Selected" className='h-28 w-28 mt-28 mx-auto' />
      <p className='mt-4 text-xl font-bold text-stone-700'>No Project Selected</p>
      <p>Select a project or create a new one!</p>
      <Button className='bg-stone-900 hover:bg-stone-950 text-stone-50 mt-2 px-3 py-1 rounded'>Create New Project</Button>
    </div>
  )
}
