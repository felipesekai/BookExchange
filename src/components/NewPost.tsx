import { Book } from 'phosphor-react';

export const NewPost = () => {
    return (
        <div className="mx-40 my-7
         bg-bgColorSecondary px-4 py-2 rounded 
         flex items-center justify-between
         shadow-md
         ">
            <text>Publique um novo anúncio</text>
            <button className="bg-white px-3 py-2 flex gap-2 items-center text-black rounded-md hover:bg-slate-300">
                <Book size={24} />
                Nova Publicação
            </button>
        </div>
    );
}