'use client';
import { FaCheck } from "react-icons/fa";

type CheckBoxProps = {
    check: boolean;
    onClick: () => void;
}
// globals.css 참조
const CheckBox = ({
    check,
    onClick
}: CheckBoxProps) => {
  return (
    <div onClick={onClick}>
        <label 
            htmlFor="check-box-1"
            className="cursor-pointer relative"
        >
            <input 
                type="checkbox" 
                id="check-box-1"  
                className="appearance-none h-4 w-4 border-2 rounded-md border-slate-950"
            />
            {check && (
                <FaCheck 
                    className="text-8xl h-4 w-4 text-slate-950 absolute left-0 top-0 text-opacity-0 check-1 transition "
                />
            )}
        </label>
    </div>
  )
}

export default CheckBox