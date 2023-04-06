'use client';

type ButtonProps = {
    toggle: boolean;
    children: React.ReactNode;
    top: number;
    postion:  "left" | "right" ;
    items: Array<{text: string, onClick: () => void}>;
    dropWidth: number;
}

const DropList = ({
    toggle, 
    children, 
    top, 
    postion,
    items,
    dropWidth,
}: ButtonProps) => {
  return (
    <div className="relative w-fit h-fit">
      <div>
        {children}
      </div>
      {toggle && (
            <div 
                style={{top: top, width: dropWidth}}
                className={`absolute rounded-xl shadow-md bg-white overflow-hidden ${postion === 'left' ? 'left-0' : 'right-0' } text-sm`}
            >
                <div className='flex flex-col cursor-pointer'>
                    <>
                    {items.length > 0 && items.map(({text, onClick}, idx) => (
                    <div 
                        onClick={onClick}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                        {text}
                    </div>
                    ))}


                    </>
                </div>
            </div>
        )}
    </div>
  )
}

export default DropList
