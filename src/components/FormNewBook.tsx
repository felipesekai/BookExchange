import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "./Modal";
import { PostsModel } from '../utils/Types';
import { LabelInput } from "./LabelInput";
import { useEffect } from "react";
interface Props {
    post?: PostsModel,
    setPost?: Function,
    isOpen: boolean,
    onOpenChange: (b: boolean) => void,
}

export function FormNewBook({ post, setPost, isOpen, onOpenChange }: Props) {

    useEffect(() => {
        console.log("teste de renderização")
    }, [])

    return (
        // <Modal title='Publique um Livro' open={children}>
        <form className='flex flex-col gap-5 mt-5  md:w-[55vh]'>
            <LabelInput title="Titulo" name="titulo" placeholder="Historias do amanhecer" />
            <LabelInput title="Editora" name="publisher" placeholder="Editora amanhecer" />
            <div className="flex flex-col">
                <label itemRef="resume" className="text-white">Sinopse</label>
                <textarea
                    className="bg-bgColor py-3 px-4 rounded text-sm text-white
                          outline-yellow-900 placeholder:text-zinc-200 shadow-md 
                          border-none invalid:border-red-500"
                    name="resume" placeholder="Sinopse do livro" cols={15} rows={6} maxLength={400} />

            </div>
            <LabelInput title="Livros que se interesse" name="interests" placeholder="No seu primeiro dia " />

            <footer className='flex gap-3 justify-end'>
                <button
                    onClick={() => onOpenChange(!isOpen)}
                    className='text-white shadow-md py-3 px-5 rounded hover:bg-bgColor'>
                    Cancelar
                </button>
                <button className='bg-secondary py-3 px-5 rounded-md text-white hover:bg-bgColor shadow-md'>
                    Confirmar
                </button>
            </footer>

        </form>
        // </Modal>
    );
}