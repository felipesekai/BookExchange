import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Input';
import { Modal } from './Modal';

interface Props extends Dialog.DialogProps {
    children: React.ReactNode;
}

export const FromSign = ({ children }: Props) => {
    return (
        <Modal title='Login' open={children}>
            <form className='flex flex-col gap-5 mt-5'>

                <Input placeholder='Email' type='email' />
                <Input placeholder='Senha' type='password' />
                <footer className='flex gap-3 justify-end'>
                    <Dialog.Close className='text-white shadow-md py-3 px-5 rounded hover:bg-bgColor'>
                        Cancelar
                    </Dialog.Close>
                    <button className='bg-secondary py-3 px-5 rounded-md text-white hover:bg-bgColor shadow-md'>
                        Confirmar
                    </button>
                </footer>

            </form>
        </Modal>


    );
}