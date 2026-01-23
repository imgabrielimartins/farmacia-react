import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/Categoria/listacategoria/ListaCategoria'
import FormCategoria from './components/Categoria/formcategoria/FormCategoria'
import DeleteCategoria from './components/Categoria/deletecategoria/DeleteCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListaCategorias />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route path='/deletarcategoria/:id' element={<DeleteCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App