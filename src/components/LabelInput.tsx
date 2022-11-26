import { HTMLAttributes } from "react";
import { Input } from "./Input";

interface Props extends HTMLAttributes<HTMLInputElement> {
    title: string;
    name: string;
}
export function LabelInput({ title, name, ...rest }: Props) {
    return (
        <div className="flex flex-col">
            <label itemRef={name} className="text-white">{title}</label>
            <Input name={name} type='text' {...rest} required />
        </div>
    );
}