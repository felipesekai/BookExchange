import * as Dialog from "@radix-ui/react-dialog";
import { BooksModel, PostsModel } from '../utils/@Types';
import { useQuery } from "react-query";
import { api } from "../services/api";
import { useCallback, useState } from "react";

interface Props {
    post: PostsModel,
    isOpen: boolean;
    onOpenChange: (b: boolean) => void;
}

export function FormNewPost({ post, isOpen, onOpenChange }: Props) {

    const [bookSelected, setBookSelected] = useState<BooksModel>({} as BooksModel);

    const { data, isFetching } = useQuery<BooksModel[]>("findAllBooks",
        async () => {
            let listBooks: BooksModel[] = [];

            await api.get("/books/v1").then((response) => {
                listBooks = response.data
            })

            return listBooks
        },
        {
            staleTime: 1000 * 60 //1min
        }
    );


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const { value, name } = event.currentTarget
        console.log(name)

        const newPost: PostsModel = {
            postCount: post.postCount,
            userID: post.userID,
            date: post.date,
            bookID: bookSelected,
        }
        api.post('posts/v1', newPost).then(() => {
            window.alert("post Realizado livro " + bookSelected.title)
        }).catch(() => {
            window.alert("post error")

        });

    };

    const onChangeSelect = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
        const targetInput = event.currentTarget
        const { value, name } = targetInput
        console.log(data)
        data?.filter((book) => {
            if (book.id?.toString() === value) {
                setBookSelected(book)
                console.log(book)
            }

        })

    }, [isFetching])

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5 w-[55vh]'>

            <label className='text-white text-lg'>Selecione um livro</label>
            {isFetching ? <p>carregando...</p> :
                <select onChange={onChangeSelect} required className="bg-bgColorSecondary
              text-white
                 text-base
               py-3 px-4 rounded outline-none shadow-md border-none" name="select">
                    {data && data.map(book => {
                        return <option key={book.id?.toString()} value={book.id}>{book.title}</option>
                    })}

                </select>
            }

            <div className="flex gap-2 flex-col">
                <p className="text-white">Se o livro que você deseja não está na lista voce pode cadastrar aqui</p>

                <button
                    onClick={() => onOpenChange(!isOpen)}
                    className='w-full bg-white py-3 px-5 rounded-md text-secondary font-bold hover:bg-slate-200 shadow-md'>
                    Cadastrar Novo Livro
                </button>

            </div>

            <footer className='flex gap-3 justify-end'>

                <Dialog.Close className='text-white shadow-md py-3 px-5 rounded hover:bg-bgColor'>
                    Cancelar
                </Dialog.Close>
                <button className='bg-secondary py-3 px-5 rounded-md text-white  hover:bg-bgColor shadow-md'>
                    Publicar
                </button>
            </footer>

        </form>

    );
}