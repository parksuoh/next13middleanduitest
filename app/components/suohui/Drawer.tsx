'use client';

import { useState } from "react";

type DrawerProps = {
    title: string;
    items: Array<{text: string, onClick: () => void}>;
    openIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
}


const Drawer = ({
    title,
    items,
    openIcon,
    closeIcon,
}: DrawerProps) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
        {!isOpen && 
        (
            <button onClick={() => setIsOpen(true)}>
                {openIcon || '열기'}
            </button>
        )}
        <div className={`top-0 left-0 fixed bg-white w-[45vw] md:w-[300px] shadow-md h-full p-10 z-20 
                        ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'} 
                        ease-in-out duration-300`}
        >
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5"
            >
                {closeIcon || '닫기'}
            </button>
            <h2 className="text-2xl mb-4">{title}</h2>
            {items.length > 0 && items.map((item, index) => (
                <div  
                    key={index}
                    className="text-xl p-2 my-2 w-full hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={item.onClick}
                >
                    {item.text}
                </div>
            ))}
            
        </div>

    </>
  )
}

export default Drawer
