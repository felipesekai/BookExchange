import * as Dialog from '@radix-ui/react-dialog';


interface Props extends Dialog.DialogProps {
    title: string;
    children: React.ReactNode;
    open: React.ReactNode;
}

export const Modal = ({ children, title, open }: Props) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {open}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

                <Dialog.Content className='bg-bgColorSecondary py-8 px-10
               
                fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                rounded-lg
                shadow-lg
                 shadow-black/25'>
                    <Dialog.Title className='font-bold text-white'>{title.toUpperCase()}</Dialog.Title>

                    {children}


                    <Dialog.Description />

                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    );
}