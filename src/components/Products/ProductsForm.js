import React, {useState} from 'react'
import {TextField,  Button, Grid} from '@material-ui/core'

const ProductsForm = (props) => {
    const {formSubmit, name : productName, price : productPrice} = props
    const [name, setName] = useState(productName ? productName : '')
    const [price, setPrice] = useState(productPrice ? productPrice : '')

    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            "name" : name,
            "price" : price
        }

        formSubmit(formData)
        setName('')
        setPrice('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                <TextField variant="outlined"  type="text" placeholder="name" value={name} onChange={handleNameChange} /><br/>
                </Grid>

                <Grid item xs={12}> 
                <TextField variant="outlined" type="text" placeholder="price" value={price} onChange={handlePriceChange} /><br/>
                </Grid>
                
                <Grid item xs={12}> 
                <Button type="submit" variant="contained" color="primary"> add </Button>
                </Grid>
            </Grid>
               
            </form>
        </div>
    )
}

export default ProductsForm