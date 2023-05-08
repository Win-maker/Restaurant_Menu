import React, { useContext } from 'react'
import logo from '../images/brand-logo.png'
import { MenuContext } from '../App'
import ProductGroup from './ProductGroup'


const ProductList = ({product}) => {
    const { handleProductAdd} = useContext(MenuContext)
  return (
      <>
        <div className="w-2/3 mx-auto ">

            <div className='justify-center items-center'>
            <img src={logo} alt='logo' className='logo'/>
            </div>

            {/* Product Groups Starts */}

            {product.map(product => <ProductGroup product={product}  key={product.id} />)}

            <button className="btn btn-sm mt-3" onClick={handleProductAdd}>Add New Product</button>
            {/* Product Group Ends */}

        </div>
      </>
  )
}

export default ProductList