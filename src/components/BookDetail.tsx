import { Modal } from "./Modal";
import Img from '../assets/image1.png';
import { PaperPlaneTilt } from "phosphor-react";


interface Props {
    children: React.ReactNode;
    title?: string;
    author?: string;
    publisher?: string;
    resume?: string;
    bookImg?: string;
}


export function BookDetail({ children, title, author, publisher, resume, bookImg }: Props) {
    return (
        <Modal title="Informações do livro" open={children}>

            <div className="flex flex-row gap-3 mt-3">
                <img className="w-52 h-80" src={bookImg ? bookImg : Img} alt={"Imagem do livro " + { title }} />
                <div className="flex-column text-justify text-white">
                    <h1 className="font-bold text-3xl">{title ? title : "Titulo do Livro"} </h1>
                    <p><span className="font-bold capitalize">Autor: </span> Sun Tzu (Autor), Pedro Manoel Soares (Tradutor)  </p>
                    <p><span className="font-bold capitalize">Editora:</span> </p>
                    <p><span className="font-bold capitalize">Sinopse:</span> "A guerra é um assunto de importância vital para o Estado; o reino da vida ou da morte; o caminho para a sobrevivência ou a ruína. É indispensável estudá-la profundamente." Sun Tzu</p>
                    <p><span className="font-bold capitalize">Livros de interesses:</span> Sun Tzu</p>

                </div>
            </div>
            <button className="bg-white   
            hover:bg-bgColor       
            hover:text-white
            px-3 py-4 rounded-md
            flex gap-2
            flex-row 
            ml-auto
            shadow-md mt-2 text-secondary font-bold">
                <PaperPlaneTilt size={24} />
                Solicitar troca</button>

        </Modal>
    );
}