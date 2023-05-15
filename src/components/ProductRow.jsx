import React, { useContext } from 'react'
import { MenuContext } from '../App'
import { motion } from 'framer-motion'

const ProductRow = ({ product, isAdmin = false }) => {
  const { handleProductDelete,handleProductSelect} = useContext(MenuContext)
  return (
      <>
        <div className="collapse">
                <input type="checkbox" />
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="collapse-title text-xl font-medium">
                        <div className='flex justify-between text-lg text-semibold'>
                            <h2>{product.name}</h2>
                            <h2>{product.price}</h2>
                        </div>
                    </motion.div>

        {isAdmin && (
                <div className="collapse-content flex justify-end">
                  <button className="btn btn-primary btn-xs mr-1" onClick={() => handleProductSelect(product.id)}>Edit</button>
                  <button className="btn btn-danger btn-xs" onClick={() => handleProductDelete(product.id)}>Delete</button>
                </div>
        )}
        </div>
      </>
  )
}

export default ProductRow