import React from 'react'
import ProductList from '../components/ProductList'

const User = ({product}) => {
  return (
      <>
        <main className='bg-gray-100 h-screen md:flex justify-center'>
          <div className='w-1/2 h-full p-4 flex justify-center preview'>
            <ProductList product={product}/>
          </div>
        </main>
      </>
  )
}

export default User