import React from 'react'
import InputBox from './InputBox'

export default function AddNewProject() {
  return (
    <div className='w-[35rem] pt-10'>      
        <form action="">
            <InputBox label="Title:"/>
            <InputBox label="Description: " textarea/>
            <InputBox label="Due Date: " type="date"/>
        </form>
        <menu className='flex gap-3 justify-end'>
            <li>
                <button className='bg-red-600 hover:bg-red-700 text-stone-50 px-2 py-1 rounded'>Cancel</button>
            </li>
            <li>
                <button className='bg-stone-900 hover:bg-stone-950 text-stone-50 px-2 py-1 rounded'>Save</button>
            </li>           
        </menu>
    </div>
  )
}
