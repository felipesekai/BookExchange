import { Modal } from "./Modal";
import Img from '../assets/image1.png';
import { PaperPlaneTilt } from "phosphor-react";
import { useEffect } from "react";


interface Props {
    children: React.ReactNode;
    title?: string;
    author?: string;
    publisher?: string;
    resume?: string;
    imgUrl?: string;
}


export function BookDetail({ children, title, author, publisher, resume, imgUrl: bookImg }: Props) {


    useEffect(() => {
        // console.log(title)
    }, [])

    return (
        <Modal title="Informações do livro" open={children}>

            <div className="flex flex-col md:flex-row gap-3 mt-3">
                <img className="md:w-52 md:h-80 w-24" src={bookImg ? bookImg : Img} alt={"Imagem do livro " + { title }} />
                <div className="flex-column text-justify text-white">
                    <h1 className="font-bold md:text-3xl text-lg">{title ? title : "Titulo do Livro"} </h1>
                    <p><span className="font-bold capitalize">Autor: </span> {" " + author}</p>
                    <p><span className="font-bold capitalize">Editora:</span>{" " + publisher}</p>
                    <p className="hidden lg:block"><span className="font-bold capitalize">Sinopse:</span>{" " + resume}</p>
                    <p><span className="font-bold capitalize">Livros de interesses:</span> </p>

                </div>
            </div>
            <button className="bg-white   
            hover:bg-bgColor       
            hover:text-white
            px-3 py-4 rounded-md
            flex gap-2
            flex-row 
            ml-auto
            shadow-md mt-5 text-secondary font-bold">
                <PaperPlaneTilt size={24} />
                Solicitar troca</button>

        </Modal>
    );
}