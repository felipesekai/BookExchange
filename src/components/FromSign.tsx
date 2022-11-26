import * as Dialog from '@radix-ui/react-dialog';
import {Input} from './Input';
import React, {FormEvent, useCallback, useContext, useState} from "react";
import {ModalLogin} from "./ModalLogin";
import {AuthContext} from "../context/AuthProvider";

export type Credentials = {
    email: string,
    password: string,
}

interface formSignProps extends Dialog.DialogProps {
    children: React.ReactNode;

}


export const FromSign = ({ children }: formSignProps) => {

    // @ts-ignore
    const {sign} = useContext(AuthContext);

    const [formDate, setFormDate] = useState<Credentials>({} as Credentials)

    const inputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const {value, name} = event.currentTarget
        setFormDate({...formDate, [name]: value});
    },[formDate]);

    const handleSign = useCallback((event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        sign(formDate);

    },[formDate]);

    return (
        <ModalLogin title='Login' open={children}>
            <form className='flex flex-col gap-5 mt-5'
                  onSubmit={handleSign}
            >

                <Input placeholder='Email' name='email' type='email' onChange={inputChange} required />
                <Input placeholder='Senha' name='password' type='password' onChange={inputChange} required />
                <footer className='flex gap-3 justify-end'>
                    <Dialog.Close className='bg-white py-3 px-6 rounded-md text-secondary hover:bg-amber-50 shadow-md'>
                        Cancelar
                    </Dialog.Close>
                    <button type='submit' className='bg-white py-3 px-6 rounded-md text-secondary hover:bg-amber-50 shadow-md'>
                        Confirmar
                    </button>
                </footer>

            </form>
        </ModalLogin>


    );
}