import {BooksModel, PostsModel} from '../utils/@Types';
import {LabelInput} from "./LabelInput";
import {FormEvent, useCallback, useState} from "react";

interface Props {
    post?: PostsModel,
    setPost?: Function,
    isOpen: boolean,
    onOpenChange: (b: boolean) => void,
}

export function FormNewBook({ isOpen, onOpenChange }: Props) {

    const [newBook, setNewBook] = useState<BooksModel>({} as BooksModel)


    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        console.log(newBook)
    },[newBook])

    const inputChange = useCallback((event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
        const {value, name} = event.currentTarget
        setNewBook({...newBook, [name]: value});
    },[newBook]);
    // useEffect(() => {
    //     console.log("teste de renderização")
    // }, [])

    return (
        // <Modal title='Publique um Livro' open={children}>
        <form className='flex flex-col gap-2 mt-5  md:w-[55vh]' onSubmit={handleSubmit} >
            <LabelInput title="Titulo" name="title" placeholder="Historias do amanhecer" onChange={inputChange} />
            <LabelInput title="Autor" name="author" placeholder="mr philips n"  onChange={inputChange} />
            <LabelInput title="Editora" name="publisher" placeholder="Editora amanhecer" onChange={inputChange} />
            <div className="flex flex-col">
                <label itemRef="resume" className="text-white">Sinopse</label>
                <textarea
                    onChange={inputChange}
                    className="bg-bgColor py-3 px-4 rounded text-sm text-white
                          outline-yellow-900 placeholder:text-zinc-200 shadow-md 
                          border-none invalid:border-red-500"
                    name="resume" placeholder="Sinopse do livro" cols={5} rows={3} maxLength={400} />

            </div>
            <LabelInput title="Informe o link da Imagem" name="imgURL" placeholder="https://minhaimagem.com/img.png "
                        onChange={inputChange} />
            {/*<LabelInput title="Livros que se interesse" name="interests" placeholder="No seu primeiro dia " />*/}

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