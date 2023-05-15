import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {v4 as uuid} from 'uuid'
import Admin from './pages/Admin'
import User from './pages/User'
import { Link, Routes, Route } from 'react-router-dom'
export const MenuContext = createContext();


const sampleProduct = [{
  id: 1,
  name: 'mocha',
  price: '3000',
  category:2
},
  
{
  id: 2,
  name: 'latte',
  price: '3500',
  category:2
  },

  {
    id: 3,
    name: 'apple juice',
    price: '2000',
    category:1
  }

]

export const categories = [
  {
    id: 1,
    name: 'Drink'
  },
  
  {
    id: 2,
    name: 'Coffee'
  },
  
  {
    id: 3,
    name: 'Cake'
  }
  
]


function App() {

  const STORAGE_KEY = 'menuapp.product';

  const [product, setProduct] = useState(sampleProduct)

  const[selectedProductId, setSelectedProductId] = useState()

  const selectedProduct = product.find(product => product.id === selectedProductId)

  const [showError , setShowError] = useState(false)

  useEffect(() => {
    const productJson = localStorage.getItem(STORAGE_KEY)
    if (productJson === null) {
      setProduct(JSON.parse(productJson) )
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(product))
  }, [product])



  function handleProductNew() {
    setProduct([...product, newProduct])
  }

  function handleProductDelete(id) {
    setProduct(product.filter(product => product.id !== id))
    setShowError(true)
    setTimeout(() => {
      setShowError(false)
    }, 2000);
  }

  function handleProductAdd() {
    const newProduct = {
      name: '',
      price: '',
      categroy: '',
      id: uuid()
    }
    setProduct([...product, newProduct])
    setSelectedProductId(newProduct.id)
  }

  function handleProductSelect(id) {
    setSelectedProductId(id)
  }

  function handleProductDataChange(id, updatedData) {
    const newProduct = [...product]
    const productIndex = newProduct.findIndex(product => product.id === id)
    newProduct[productIndex] = updatedData
    setProduct(newProduct)
  }

  const MenuContextValue = {
    handleProductDelete,
    handleProductNew,
    handleProductAdd,
    handleProductSelect,
    handleProductDataChange

  }


  return (
    <MenuContext.Provider value={MenuContextValue}>
      <nav className='container py-2'>
        <ul className='flex justify-around text-blue-500'>
          <Link to='/'>User</Link>
          <Link to='/admin'>Admin</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<User product={product}/>} />
        <Route path='/admin' element={<Admin selectedProduct={selectedProduct}
        product={product} showError={showError}/>} />
      </Routes>
    </MenuContext.Provider>
  )
}

export default App
