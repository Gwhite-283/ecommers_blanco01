import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from './components/Button/Button'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
        <Route path='/item/:itemid' element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
      <Button />

    </>
  )
}

export default App
