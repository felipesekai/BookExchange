import { Book } from 'phosphor-react';

export const NewPost = () => {
    return (
        <div className="mx-auto my-7
         bg-bgColorSecondary px-6 py-4 rounded-md
         flex items-center justify-between xl:w-[70%] w-[90%]
         shadow-md
         ">
            <text className="sm:text-xl text-[12px]">Publique um novo anúncio</text>
            <button className="bg-white px-3 py-2 flex gap-2
            items-center text-secondary font-bold rounded-md
            text-[12px] md:text-xl
             hover:bg-slate-300 shadow-md">
                <Book size={24} />
                Nova Publicação
            </button>
        </div>
    );
}