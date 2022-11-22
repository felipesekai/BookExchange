import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Input';
import { Modal } from './Modal';
import React, {FormEvent, useCallback, useState} from "react";
import {api} from "../services/api";

export type Credentials = {
    email: string,
    password: string,
}

interface formSignProps extends Dialog.DialogProps {
    children: React.ReactNode;

}


export const FromSign = ({ children }: formSignProps) => {

    const [formDate, setFormDate] = useState<Credentials>({} as Credentials)

    const inputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const {value, name} = event.currentTarget
        setFormDate({...formDate, [name]: value});
    },[formDate]);

    const handleSign = useCallback((event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        api.post("/auth/sign", formDate).then((response)=>{
            console.log(response.data)
            window.alert(response.data.email)
        })
    },[formDate]);

    return (
        <Modal title='Login' open={children}>
            <form className='flex flex-col gap-5 mt-5'
                  onSubmit={handleSign}
            >

                <Input placeholder='Email' name='email' type='email' onChange={inputChange} />
                <Input placeholder='Senha' name='password' type='password' onChange={inputChange} />
                <footer className='flex gap-3 justify-end'>
                    <Dialog.Close className='text-white shadow-md py-3 px-5 rounded hover:bg-bgColor'>
                        Cancelar
                    </Dialog.Close>
                    <button type='submit' className='bg-secondary py-3 px-5 rounded-md text-white hover:bg-bgColor shadow-md'>
                        Confirmar
                    </button>
                </footer>

            </form>
        </Modal>


    );
}