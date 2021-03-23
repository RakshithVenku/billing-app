import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {TextField,  Button, Grid} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const BillsForm = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const {formSubmit} = props
    const [date, setDate] = useState('')
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    
    const handleCustomerChange = (e) => {
        setCustomer(e.target.value)
    }

    const handleProductChange = (e) => {
        setProduct(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            "date" : date ,
            "customer" : customer,
            "lineItems" : [
                {
                    "product" : product,
                    "quantity" : quantity
                }
            ]
        }

        formSubmit(formData)
        setDate('')
        setCustomer('')
        setProduct('')
        setQuantity('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>

                <Grid item xs={12}> 
                   <TextField variant="outlined" size="small"  placeholder="YYYY-MM-DD" value={date} onChange={handleDateChange} /><br/>
                </Grid>

                <Grid item xs={12}> 
                   <FormControl size="small" style={{width:"210px"}} >
                      <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={customer}
                        onChange={handleCustomerChange}
                      > 
                        {customers.map((customer) => {
                            return <MenuItem key={customer._id} value={customer._id}>{customer.name}</MenuItem>
                        })}
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}> 
                   <FormControl size="small" style={{width:"210px"}} >
                      <InputLabel id="demo-simple-select-label">Product</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={product}
                        onChange={handleProductChange}
                      > 
                        {products.map((product) => {
                            return <MenuItem key={product._id} value={product._id}>{product.name}</MenuItem>
                        })}
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}> 
                   <TextField variant="outlined" size="small"  type="number" placeholder="quantity" value={quantity} onChange={handleQuantityChange} /><br/>
                </Grid>
                
                <Grid item xs={12}> 
                   <Button type="submit" size="small" variant="contained" color="primary"> add </Button>
                </Grid>
            </Grid>
               
            </form>
        </div>
    )
}

export default BillsForm