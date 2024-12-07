import Header from './assets/Components/Header'
import Corpo1 from './assets/Components/Corpo1'
import Violao_preço from './assets/Components/Violao_preço'
import Home from './assets/Components/Home'
import Baxo from './assets/Components/Baxo'
import Footer from './assets/Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <main>

        <Router>

          <Header />


          <Routes>
            <Route path='/' element={<Corpo1 />} />
            <Route path='instrumentos' element={<Violao_preço />} />
            <Route path='endereco' element={<Home />} />
            <Route path='Contato' element={<Baxo />} />
          </Routes>



          <Footer />

        </ Router>
      </main>




    </>
  )
}

export default App
