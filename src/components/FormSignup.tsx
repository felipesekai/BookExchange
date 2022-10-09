import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Input';
import { Modal } from './Modal';

interface Props {
    children: React.ReactNode;
}

export const FormSignup = ({ children, }: Props) => {
    return (
        <Modal title='cadastrar-se' open={children}>

            <form className='flex flex-col gap-5 mt-5'>

                <Input placeholder='Nome' type='text' required />
                <Input placeholder='Email' type='email' required />
                <Input placeholder='WhatsApp' type='tel' pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" required />
                <Input placeholder='Senha' type='password' required />
                <Input placeholder='Repita senha' type='password' required />
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