'use client';

import { useCallback, useEffect, useState } from "react";

type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    title?: string;
    body?: string;
}

const Modal = ({
    isOpen,
    onClose,
    title,
    body,
}: ModalProps) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false)

        setTimeout(() => {
            onClose()
        }, 300)

    }, [onClose])


    if (!isOpen) return null


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-neutral-800/70">
        <div
            className="fixed inset-0 w-full h-full"
            onClick={handleClose}
        >
        </div>

        <div className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-auto lg:h-auto md:h-auto">
            {/* CONTENT */}
            <div 
                className={`
                    translate 
                    duration-300 
                    h-full 
                    ${showModal ? 'translate-y-0' : 'translate-y-full'} 
                    ${showModal ? 'opacity-100' : 'opacity-0'} 
                `}
            >
                <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                    
                    {/* HEADER */}
                    <div className="text-lg font-semibold p-4">
                        {title}
                    </div>
                    {/* BODY */}
                    <div className="p-4">
                        {body}
                    </div>
                    <button 
                        onClick={handleClose}
                        className="p-1 border-0 hover:opacity-70 transition "
                    >
                        확인
                    </button>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Modal