import React, { useRef } from 'react'
import InputBox from './InputBox'
import Modal from './Modal';

export default function AddNewProject({onData, onCancel}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handelData = () => {
        const titleData = title.current.value;
        const descriptionData = description.current.value;
        const dueDateData = dueDate.current.value;
        // console.log({titleData, descriptionData, dueDateData})

        //Validation
        if (titleData.trim()==='' || descriptionData.trim()==='' || dueDateData.trim()===''){
            modal.current.open();
            return;
        }

        onData({
            title: titleData,
            description: descriptionData,
            dueDate: dueDateData
        });
    }

  return (
    <div className='w-full'>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-950 mb-3'>Invalid Input</h2>
            <p className='text-stone-900 mb-2'>Oops! Looks like you forgot to enter a value.</p>
            <p className='text-stone-900'>Please make sure you provide a valid value for every field.</p>
        </Modal>

        <div className='text-center flex flex-col h-screen justify-center items-center'>      
            <form action="" className='w-1/3'>
                <InputBox ref={title} label="Title:"/>
                <InputBox ref={description} label="Description: " textarea/>
                <InputBox ref={dueDate} label="Due Date: " type="date"/>
            </form>
            <menu className='flex gap-3 justify-end w-1/3'>
                <li>
                    <button className='bg-red-600 hover:bg-red-700 text-stone-50 px-2 py-1 rounded' onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button className='bg-stone-800 hover:bg-stone-950 text-stone-50 px-2 py-1 rounded' onClick={handelData}>Save</button>
                </li>           
            </menu>
        </div>
    </div>
  )
}
