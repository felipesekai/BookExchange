import * as Dialog from '@radix-ui/react-dialog';


type Props = {
    title: string;
    children: React.ReactNode;
    open?: React.ReactNode;
    isOpen?: boolean;
    handleOpenChange?: (b: boolean) => void;
}

export const Modal = ({ children, title, open, isOpen, handleOpenChange }: Props) => {
    return (
        <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
            <Dialog.Trigger children={open} />
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