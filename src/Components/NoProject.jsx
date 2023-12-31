import React from 'react'
import No_Project from '/image/NoProject.png'
import Button from './Button'

export default function NoProject({ onHandleProject }) {
  return (
    <div className='w-full text-center flex flex-col h-screen justify-center items-center'>
      <img src={No_Project} alt="No Project Selected" className='h-28 w-28 mx-auto' />
      <p className='mt-4 mb-1 text-xl font-bold text-stone-700'>No Project Selected</p>
      <p className='mb-1'>Select a project or create a new one!</p>
      <Button className='bg-stone-800 hover:bg-stone-950 text-stone-50 mt-2 px-3 py-1 rounded' onClick={ onHandleProject }>Create New Project</Button>
    </div>
  )
}
