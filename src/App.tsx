import './styles/main.css';
import Logo from './assets/Logo.svg';
import { ListBooks } from './components/ListBooks';
import { NewPost } from './components/NewPost';
import { FormSignup } from './components/FormSignup';
import { FromSign } from './components/FromSign';
import { BookDetail } from './components/BookDetail';
function App() {


  return (
    <div className="bg-bgColor
    h-[100vh]
    flex-1
    flex flex-col
    text-lg text-white
    ">
      {/* //header */}
      <div className='gap-2 flex py-4 px-5'>


        <div className='flex flex-1 gap-2 justify-end' >

          {/* o formsing é o dialog com o formulario dentro */}
          <FromSign>
            <button className='bg-bgColorSecondary
           hover:bg-bgColor px-8 py-3
            text-sm font-bold rounded shadow-md'>Login</button>
          </FromSign>

          {/* o formsignup é o dialog com o formulario dentro */}
          <FormSignup>
            <button className='bg-white text-secondary
         hover:bg-slate-400 px-8 py-3 text-sm font-bold 
         rounded shadow-md'>Cadastrar</button>
          </FormSignup>
        </div>



      </div>
      {/* logo */}
      <div className='flex justify-center'>
        <img className='xl:max-h-36 h-60 mt-4' src={Logo} />
      </div>


      <ListBooks />
      {/* <ListBooks /> */}
      <NewPost />



      <footer className='h-20 bg-white flex mt-auto items-center justify-center text-black '>
        <text>Copyright © 2022 SEkai LTDA.</text>
      </footer>

    </div>
  )
}

export default App
