import * as Dialog from '@radix-ui/react-dialog';
import {Input} from './Input';
import React, {FormEvent, useCallback, useContext, useEffect, useState} from "react";
import {UserModel} from "../utils/@Types";
import {ModalLogin} from "./ModalLogin";
import {AuthContext} from "../context/AuthProvider";


interface Props {
    children: React.ReactNode;
}

export const FormSignup = ({ children, }: Props) => {

    const [formDate, setFormDate] = useState<UserModel>({} as UserModel);
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const [validatePassword, setValidatePassword] = useState<boolean>(true);
    // @ts-ignore
    const {signUp} = useContext(AuthContext)

    const inputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const {value, name} = event.currentTarget
        if(name==='passwordRepeat'){
            setPasswordRepeat(value)
        }else{
            setFormDate({...formDate, [name]: value});
        }
    },[formDate]);
    
    const handleSignUp = useCallback((event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        signUp(formDate);

    },[formDate]);
    

    useEffect(() => {

        setValidatePassword(passwordRepeat.localeCompare(formDate.password) !== 0);


    },[passwordRepeat, formDate]);

   

    // @ts-ignore
    return (
        <ModalLogin title='cadastrar-se' open={children}>

            <form onSubmit={handleSignUp} className='flex flex-col gap-5 mt-5'>

                <Input name={"name"} placeholder='Nome' type='text' required onChange={inputChange} />
                <Input name={"email"} placeholder='Email' type='email' required onChange={inputChange} />
                {/*<Input name={"whatsApp"} placeholder='WhatsApp' type='tel' pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" required onChange={inputChange} />*/}
                <Input name={"password"} placeholder='Senha' type='password' required onChange={inputChange} />

                    <Input name={"passwordRepeat"} placeholder='Repita senha' type='password' required onChange={inputChange} />
                    {validatePassword && <label itemRef={"passwordRepeat"} className={"text-red-500 font-bold"}>As senhas não coincidem!!</label>}


                <footer className='flex gap-3 justify-end'>

                    <Dialog.Close className='bg-white py-3 px-6 rounded-md text-secondary hover:bg-amber-50 shadow-md'>
                        Cancelar
                    </Dialog.Close>
                    <button type='submit' className='enabled:bg-white disabled:bg-secondary disabled:text-white py-3 px-6 rounded-md text-secondary hover:bg-amber-50 shadow-md  '
                            disabled={validatePassword}
                    >
                        Confirmar
                    </button>
                </footer>

            </form>

        </ModalLogin>



    );
}