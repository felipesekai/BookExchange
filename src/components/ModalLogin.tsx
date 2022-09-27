import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Input';

interface Props extends Dialog.DialogProps {
    children: React.ReactNode;
}

export const ModalLogin = ({ children }: Props) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

                <Dialog.Content className='bg-white py-8 px-10
                fixed top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                rounded-lg
                shadow-lg
                 shadow-black/25'>
                    <Dialog.Title className='font-bold text-black'>LOGIN</Dialog.Title>

                    <form className='flex flex-col gap-5 mt-5'>

                        <Input placeholder='Login' />
                        <Input placeholder='Senha' />
                        <footer className='flex gap-3 justify-end'>
                            <Dialog.Close>
                                Cancelar
                            </Dialog.Close>
                            <button className='bg-secondary py-3 px-5 rounded-md text-white hover:bg-bgColor'>
                                Confirmar
                            </button>
                        </footer>

                    </form>


                    <Dialog.Description />

                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    );
}