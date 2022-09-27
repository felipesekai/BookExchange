import './styles/main.css';
import Logo from './assets/Logo.svg';
import { ListBooks } from './components/ListBooks';
import { NewPost } from './components/NewPost';
import { ModalLogin } from './components/ModalLogin';
import * as Dialog from '@radix-ui/react-dialog';
function App() {


  return (
    <div className="bg-bgColor
    flex max-w-[1360px] flex-col
    text-lg text-white
    ">
      <div className='gap-2 flex justify-end items-end py-4 px-5'>
        <ModalLogin>
          <button className='bg-bgColorSecondary hover:bg-bgColor px-2 py-3 rounded shadow-sm'>Login</button>
        </ModalLogin>
        <button className='bg-white text-secondary hover:bg-slate-400 px-2 py-3 rounded shadow-sm'>Cadastrar-se</button>
      </div>
      <div className='flex justify-center'>
        <img className='max-w-xs xs:max-h-60' src={Logo} />
      </div>

      <ListBooks />
      <ListBooks />
      <NewPost />

      <footer className='h-20  bg-white flex items-center justify-center text-black mt-7'>
        <text>Copyright © 2022 SEkai LTDA.</text>
      </footer>

    </div>
  )
}

export default App
