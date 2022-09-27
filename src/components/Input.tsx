import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ ...rest }: InputProps) => {
    return (

        <input {...rest}
            className="bg-bgColorSecondary py-3 px-4 rounded text-sm placeholder:text-zinc-900" />)

}