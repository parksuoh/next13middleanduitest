'use client';

type ButtonProps = {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    width?: number;
    color?: string;
    textColor?: string;
    icon?: React.ReactElement;
}

const Button = ({
    label,
    onClick,
    disabled,
    outline = false,
    small,
    width = 200,
    color = '#080808',
    textColor = '#faf0f0',
    icon,
}: ButtonProps) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        style={{
            width: width, 
            borderColor: color,
             color: textColor, 
             backgroundColor: outline ? 'white' : color
        }}
        className={`
            flex
            justify-center
            align-center
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transtion
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2'}
        `}
    >
        {icon && <div className='mr-2'>{icon}</div>}
        <h1>
            {label}
        </h1>
    </button>
  )
}

export default Button