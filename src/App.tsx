import './styles/main.css';
import Logo from './assets/Logo.svg';
import { ListBooks } from './components/ListBooks';
import { NewPost } from './components/NewPost';
import { FormSignup } from './components/FormSignup';
import { FromSign } from './components/FromSign';
function App() {


  return (
    <div className="bg-bgColor
    flex max-w-[1360px] flex-col
    text-lg text-white
    ">
      <div className='gap-2 flex justify-end items-end py-4 px-5'>

        {/* o formsing é o diolog com o formulario dentro */}
        <FromSign>
          <button className='bg-bgColorSecondary
           hover:bg-bgColor px-8 py-3
            text-sm font-bold rounded shadow-md'>Login</button>
        </FromSign>

        {/* o formsignup é o diolog com o formulario dentro */}
        <FormSignup>
          <button className='bg-white text-secondary
         hover:bg-slate-400 px-8 py-3 text-sm font-bold 
         rounded shadow-md'>Cadastrar-se</button>
        </FormSignup>

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
