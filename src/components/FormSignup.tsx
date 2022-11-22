import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Input';
import { Modal } from './Modal';
import {FormEvent, useCallback, useEffect, useState} from "react";
import {api} from "../services/api";
import {UserModel} from "../utils/Types";



interface Props {
    children: React.ReactNode;
}

export const FormSignup = ({ children, }: Props) => {

    const [formDate, setFormDate] = useState<UserModel>({} as UserModel);
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const [validatePassword, setValidatePassword] = useState<boolean>(true);

    const inputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const {value, name} = event.currentTarget
        if(name==='passwordRepeat'){
            setPasswordRepeat(value)
        }else{
            setFormDate({...formDate, [name]: value});
        }
        console.log(formDate)
    },[formDate]);

    useEffect(() => {

        setValidatePassword(passwordRepeat.localeCompare(formDate.password) !== 0);
        console.log(validatePassword);
    },[passwordRepeat, formDate]);

    const handleSignUp = useCallback((event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        api.post("/auth/signup", formDate).then((response)=>{
            console.log(response.data)
            window.alert(response.data.email)
        })
    },[formDate]);

    return (
        <Modal title='cadastrar-se' open={children}>

            <form onSubmit={handleSignUp} className='flex flex-col gap-5 mt-5'>

                <Input name={"name"} placeholder='Nome' type='text' required onChange={inputChange} />
                <Input name={"email"} placeholder='Email' type='email' required onChange={inputChange} />
                {/*<Input name={"whatsApp"} placeholder='WhatsApp' type='tel' pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" required onChange={inputChange} />*/}
                <Input name={"password"} placeholder='Senha' type='password' required onChange={inputChange} />

                    <Input name={"passwordRepeat"} placeholder='Repita senha' type='password' required onChange={inputChange} />
                    {validatePassword && <label itemRef={"passwordRepeat"} className={"text-red-500 font-bold"}>As senhas não coincidem!!</label>}


                <footer className='flex gap-3 justify-end'>

                    <Dialog.Close className='text-white shadow-md py-3 px-5 rounded hover:bg-bgColor'>
                        Cancelar
                    </Dialog.Close>
                    <button type='submit' className='bg-secondary py-3 px-5 rounded-md text-white hover:bg-bgColor shadow-md'
                            disabled={validatePassword}
                    >
                        Confirmar
                    </button>
                </footer>

            </form>

        </Modal>



    );
}