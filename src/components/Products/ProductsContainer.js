import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startProductsList} from '../../actions/usersAction'
import {Grid} from '@material-ui/core'
import ProductsList from './ProductsList'
import AddProduct from './AddProduct'

const ProductsContainer = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startProductsList())   // api call - get all products
    }, [])


    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ProductsList/>
                </Grid>

                <Grid item xs={6}>
                    <AddProduct />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductsContainer