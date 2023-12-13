import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal ({ children, buttonCaption }, ref) {
    const modalDialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                modalDialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={modalDialog} className='backdrop:bg-stone-900/90 p-6 rounded-md shadow-sm'>
            {children}
            <form action="" method='dialog' className='text-right mt-6'>
                <button className='bg-stone-800 hover:bg-stone-950 text-stone-50 px-2 py-1 rounded'>{buttonCaption}</button>
            </form>   
        </dialog>, document.querySelector('#modal-root')
    );
})

export default Modal;