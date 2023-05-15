import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Admin = ({selectedProduct, product, showError}) => {
    return (
        <>
        <main className='bg-gray-100 h-screen'>
        <div className="container h-screen flex flex-col md:flex-row bg-white mx-auto">

          {/* Add Form Starts */}
          <div className='md:w-1/2 p-4 flex justify-center'>
            {selectedProduct && <ProductForm selectedProduct={selectedProduct} />}
          </div>
          {/* Add Form Ends */}
          
          {/* Preview Section Starts */}
          <div className='w-1/2 p-4 flex justify-center preview'>
                <ProductList product={product} isAdmin={true} />
          </div>
          {/* Preview Section Ends */}

        </div>
        
      </main>
      
    {showError && (<div className="toast toast-top toast-end">
        <div className="alert alert-error">
          <div>
            <span>
              Product Deleted
            </span>
          </div>
        </div>
            </div>)}
</>
  )
}

export default Admin