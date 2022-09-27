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

                <Input placeholder='Nome' type='text' />
                <Input placeholder='Email' type='email' />
                <Input placeholder='Senha' type='password' />
                <Input placeholder='Repita senha' type='password' />
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