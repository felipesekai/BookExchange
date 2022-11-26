import './styles/main.css';
import {AuthProvider} from "./context/AuthProvider";
import Home from "./Pages/Home";

function App() {

  return (
      <AuthProvider>
          <Home/>
      </AuthProvider>
  )
}

export default App
