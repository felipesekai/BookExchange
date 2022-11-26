import Logo from '../assets/Logo.svg';
import {ListBooks} from '../components/ListBooks';
import {NewPost} from '../components/NewPost';
import {FormSignup} from '../components/FormSignup';
import {FromSign} from '../components/FromSign';
import {useContext, useState} from 'react';
import {DialogNewPost} from "../components/DialogNewPost";
import {AuthContext} from "../context/AuthProvider";


function Home() {

    const [openNewPost, setOpenNewPost] = useState(false);

    // @ts-ignore
    const {user} = useContext(AuthContext);

    return (
        <div className="bg-bgColor
    h-[100vh]
    flex-1
    flex flex-col
    text-lg text-white
    ">
            {/* //header */}
            <div className='gap-2 flex py-4 px-5'>
                {!user ?
                    <div className='flex flex-1 gap-2 justify-end'>

                        {/* o formsing é o dialog com o formulario dentro */}
                        <FromSign>
                            <button className='bg-bgColorSecondary
                                         hover:bg-bgColor px-8 py-3
                                         text-sm font-bold rounded shadow-md'
                            >Login
                            </button>
                        </FromSign>

                        {/* o formsignup é o dialog com o formulario dentro */}
                        <FormSignup>
                            <button
                                className='bg-white text-secondary
                                  hover:bg-slate-400 px-8 py-3 text-sm font-bold
                                  rounded shadow-md'>Cadastrar
                            </button>
                        </FormSignup>
                    </div>
                    :
                    <div className='flex flex-1 justify-end'>

                        <p className='flex flex-col text-xl text-white font-bold'>
                            <span className='text-sm'>Bem-vindo!</span>
                            {user.email}
                        </p>
                    </div>
                }


            </div>
            {/* logo */}
            <div className='flex justify-center'>
                <img className='max-h-32 mt-4' src={Logo} alt={"logo do site"}/>
            </div>


            <ListBooks/>
            {/* <ListBooks /> */}
            <NewPost onChangeNewPost={setOpenNewPost} openNewPost={openNewPost}/>
            {/* dialog post */}
            {openNewPost && <DialogNewPost isOpen={openNewPost} onOpenChange={setOpenNewPost}/>}


            <footer className='h-20 bg-white flex mt-auto items-center justify-center text-black '>
                <text>Copyright © 2022 SEkai LTDA.</text>
            </footer>

        </div>
    )
}

export default Home
