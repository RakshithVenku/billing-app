import React from 'react'
import {useDispatch} from 'react-redux'
import {startAddProduct} from '../../actions/usersAction'
import ProductsForm from './ProductsForm'

const AddProduct = (props) => {
    const dispatch = useDispatch()
   
    const formSubmit = (product) => {
        dispatch(startAddProduct(product))
    }

    return (
        <div>
            <hr />
            <h2>Add a Product</h2>
            <ProductsForm
              formSubmit={formSubmit}
            />
        </div>
    )
}

export default AddProduct