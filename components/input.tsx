import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <div className='relative'>
      <input
        onChange={onChange}
        id={id}
        value={value}
        type={type}
        className='
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-base
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
        '
        placeholder='  '
      />
      <label
        className='
          absolute
          text-base
          text-zinc-400
          duration-200
          transform
          -translate-y-5
          scale-75
          top-5
          left-6
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-5
        '
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
