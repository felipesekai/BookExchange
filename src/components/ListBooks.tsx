import { Carousel } from '@trendyol-js/react-carousel';
import { ArrowSquareRight, ArrowSquareLeft } from 'phosphor-react';
import { BookDetail } from './BookDetail';
import { BOOKS } from '../utils/mocklistbooks';


export const ListBooks = () => {

    return (
        <div className='py-2 px-5 '>
            <h2 className='font-bold ml-8'>Livros disponiveis para trocas</h2>

            {/* <div className="py-2 grid grid-flow-col overflow-x-scroll auto-cols-max gap-6"> */}
            {/* </div> */}
            <Carousel className='mt-3 items-center'
                show={5} slide={1}
                leftArrow={<button><ArrowSquareLeft size={32} /></button>}
                rightArrow={<button><ArrowSquareRight size={32} /></button>} infinite >
                {BOOKS.map(book => {
                    return <BookDetail
                        title={book.title}
                        author={book.author}
                        bookImg={book.imgUrl}
                        children={<button className='max-w-[181px]'
                        ><img className='max-h-[270px]' src={book.imgUrl} /></button>} />
                })}
            </Carousel>


        </div>
    );
}