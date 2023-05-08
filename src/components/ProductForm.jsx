import React, { useContext } from 'react'
import { MenuContext, categories } from '../App'

const ProductForm = ({ selectedProduct }) => {

  const { handleProductDataChange } = useContext(MenuContext)
  
  function handleChange(e) {
    handleProductDataChange(selectedProduct.id, {
      ...selectedProduct, [e.target.name]:e.target.value
    })
  }

  return (
    <form className='w-2/3'>
        {/* Product Name Starts */}
        <div className="form-control w-full">
        <label className="label">
        <span className="label-text">Product Name</span>
        </label>
        <input type="text" placeholder="Type here" value={selectedProduct.value} onChange={handleChange}
          className="input input-bordered w-full max-w-xs input-sm" name='name' />
        </div>
        {/* Product Name Ends */}
        
        {/* Product Price Starts */}
        <div className="form-control w-full">
        <label className="label">
        <span className="label-text">Price</span>
        </label>
        <input type="text" placeholder="Type here" value={selectedProduct.value} onChange={handleChange}
         className="input input-bordered w-full input-sm" name='price' />
        </div>
        {/* Product Price Ends */}

        {/* Select Categores Starts */}
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Categories</span>
        </label>
        <select name='cateogry' value={selectedProduct.category} onChange={(e) => {
              handleProductDataChange(selectedProduct.id, {
                ...selectedProduct, [e.target.name]:parseInt(e.target.value)
              })
        } } 
          className="select select-bordered w-full max-w-xs select-sm">
            <option disabled selected>Select Categories</option>
          {categories.map(category => (
            <option value={category.id} selected={category.id === selectedProduct.id}>{category.name}</option>
            ))}
        </select>
        </div>
        {/* Select Categoris Ends */}
        
        {/* Submit Button Starts */}
        {/* <button className="btn btn-primary btn-sm mt-4">Confirm</button> */}
        {/* Submit Button Ends  */}

  </form>
  )
}

export default ProductForm