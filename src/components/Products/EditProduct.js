import React from 'react'
import {useDispatch} from 'react-redux'
import ProductsForm from './ProductsForm'
import {startEditProduct} from '../../actions/usersAction'


const EditProduct = (props) => {
    const dispatch = useDispatch()
    const {id, name, price, handleToggle} = props

    const onSuccess = () => {
        handleToggle()
    }

    const formSubmit = (product) => {
        dispatch(startEditProduct(product, id, onSuccess))
    }

    return (
        <div>
            <h3>Edit Product</h3>
            <ProductsForm id={id} name={name} price={price} formSubmit={formSubmit} />
        </div>
    )
}

export default EditProduct