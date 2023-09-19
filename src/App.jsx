import './App.css'

import Card from "./components/Card"
import Projetos from '../src/Pages/Projetos'
import Header from './components/Header'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Habilidades from './Pages/Habilidades'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <Header/>
      <Home/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Footer/>
    </div>
    </>
  )
}

export default App
