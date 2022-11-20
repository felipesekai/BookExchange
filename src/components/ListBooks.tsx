import { Carousel } from '@trendyol-js/react-carousel';
import { ArrowSquareRight, ArrowSquareLeft, Books } from 'phosphor-react';
import { BookDetail } from './BookDetail';
import { BOOKS } from '../utils/mocklistbooks';
import { useEffect, useState } from 'react';
import { BooksModel, PostsModel } from '../utils/Types';
import { api } from '../services/api';
import { useQuery } from 'react-query';



export const ListBooks = () => {

    // const [books, setBooks] = useState<BooksModel[]>([]);

    const { data, isFetching } = useQuery<BooksModel[]>(
        "findAllPosts",
        async () => {
            const response = await api.get("posts/v1");
            const posts: PostsModel[] = response.data
            const listBooks: BooksModel[] = posts.map(post => { return post.bookID })
            return listBooks
        },
        {
            staleTime: 1000 * 60, // 1 minuto
        }
    );

    return (
        <div className='py-2 px-5'>
            <h2 className='font-bold ml-8'>Livros disponiveis para trocas</h2>
            {isFetching ? <div className="py-2 grid grid-flow-col grid-cols-6 ">
                <p>Carregando...</p>
            </div> :
                data ? <Carousel className='mt-3 items-center'
                    show={5} slide={1}
                    leftArrow={<button><ArrowSquareLeft size={32} /></button>}
                    rightArrow={<button><ArrowSquareRight size={32} /></button>} infinite >
                    {data!!.map((book) => {
                        return <BookDetail key={book.id}
                            title={book.title}
                            author={book.author}
                            publisher={book.publisher}
                            resume={book.resume}
                            imgUrl={book.imgURL}
                            children={<button className='max-w-[181px]'
                            ><img className='max-h-[270px] '
                                alt={`Imagem do livro ${book.title}`}
                                src={book.imgURL} />
                            </button>} />
                    })
                    }
                </Carousel> :
                    <div>no books</div>}






        </div>
    );
}