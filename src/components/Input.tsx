import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ ...rest }: InputProps) => {
    return (

        <input {...rest}
            className="bg-bgColor py-3 px-4 rounded text-sm text-white outline-yellow-900 placeholder:text-zinc-200 shadow-md border-none " />)

}