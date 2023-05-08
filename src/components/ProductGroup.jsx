import React from 'react'
import ProductRow from './ProductRow'
import { categories } from '../App'

const ProductGroup = ({ product }) => {
  
  const currentCategory = categories.find(category => category.id === product.id)
  return (
      <>
        <div className='mt-4'>
            <div className='flex justify-between text-2xl text-bold'>
            <h2>{currentCategory?.name}</h2>
            <h2>Price</h2>
        </div>

            <ProductRow product={product} />
           
  
        </div>

      </>
  )
}

export default ProductGroup