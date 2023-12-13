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
        <dialog ref={modalDialog}>
            {children}
        <form action="" method='dialog'>
            <button>{buttonCaption}</button>
        </form>   
        </dialog>, document.querySelector('#modal-root')
    );
})

export default Modal;