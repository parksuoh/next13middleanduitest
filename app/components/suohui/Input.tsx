'use client';

type InputProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    width?: number;
    small?: boolean;
    disabled?: boolean;
    required?: boolean;
}

const Input = ({
    label,
    value,
    onChange,
    type = "text",
    width = 200,
    small = false,
    disabled = false,
    required = false,

}: InputProps) => {
  return (
    <div 
        style={{width: width}}
        className='relative'
    >
      <input 
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder=" "
        type={type}
        required={required}
        className={`
            peer
            w-full
            ${small ? 'pb-2' : 'p-4'}
            ${small ? 'pt-2' : 'pt-6'}
            font-light
            bg-white
            border-2
            rounded-md
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            pl-4
            border-neutral-300
            focus:border-black
        `}
      />
      <label
        className={`
            absolute
            ${small ? 'text-sm' : 'text-md'}
            duration-150
            transform
            -translate-y-3
            ${small ? 'top-3' : 'top-5'}
            left-4
            z-10
            origin-[0]
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
