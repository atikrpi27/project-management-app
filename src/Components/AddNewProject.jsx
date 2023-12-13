import React, { useRef } from 'react'
import InputBox from './InputBox'

export default function AddNewProject({onData}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handelData = () => {
        const titleData = title.current.value;
        const descriptionData = description.current.value;
        const dueDateData = dueDate.current.value;
        // console.log({titleData, descriptionData, dueDateData})

        //Validation
        if (titleData.trim()==='' || description.trim()==='' || dueDate.trim()===''){
            //show error
        }

        onData({
            title: titleData,
            description: descriptionData,
            dueDate: dueDateData
        });
    }

  return (
    <div className='w-[35rem] pt-10'>      
        <form action="">
            <InputBox ref={title} label="Title:"/>
            <InputBox ref={description} label="Description: " textarea/>
            <InputBox ref={dueDate} label="Due Date: " type="date"/>
        </form>
        <menu className='flex gap-3 justify-end'>
            <li>
                <button className='bg-red-600 hover:bg-red-700 text-stone-50 px-2 py-1 rounded'>Cancel</button>
            </li>
            <li>
                <button className='bg-stone-800 hover:bg-stone-950 text-stone-50 px-2 py-1 rounded' onClick={handelData}>Save</button>
            </li>           
        </menu>
    </div>
  )
}
