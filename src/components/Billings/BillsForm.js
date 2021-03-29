import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addItem, resetItems , incrementQuantity, decrementQuantity, removeItem} from '../../actions/lineItemsAction'
import {TextField,  Button, Grid} from '@material-ui/core'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const BillsForm = (props) => {
    const dispatch = useDispatch()
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const lineItems = useSelector((state) => {
        return state.lineItems
    })

    

    const {formSubmit} = props
    const [date, setDate] = useState('')
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    
    const handleCustomerChange = (e) => {
        setCustomer(e.target.value)
    }

    const handleProductChange = (e) => {
        console.log('product',e.target.value)
        setProduct(e.target.value)
    }

    const itemGenerator = (item) => {
        let quantity = 0
        const itemObj = {
            'prodName' : item.name,
            'product' : item._id,
            'quantity' : quantity
        }
        dispatch(addItem(itemObj))
        console.log('lineItems', lineItems)
    }

    const handleDecre = (id) => {
        dispatch(decrementQuantity(id))
    }

    const handleIncre = (id) => {
        dispatch(incrementQuantity(id))
    }

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

   

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
            "date" : date ,
            "customer" : customer,
            "lineItems" : lineItems
        }

        formSubmit(formData)
        setDate('')
        setCustomer('')
        setProduct('')
        dispatch(resetItems())
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
                        {products.map((item) => {
                            return <MenuItem key={item._id} 
                                             value={item._id}
                                             onClick={() => {itemGenerator(item)}}>
                                                 {item.name}
                                   </MenuItem>
                        })}
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}>
                <ul>
                    {lineItems.map((item) => {
                       return <li key={item.product}>{item.prodName} 
                               <Button size="small" color="primary"
                                  onClick={() => {handleDecre(item.product)}}> <RemoveCircleSharpIcon /> </Button>
                               {item.quantity}

                               <Button size="small" color="primary"
                                  onClick={() => {handleIncre(item.product)}}> <AddCircleSharpIcon /></Button>
                               <Button size="small" color="secondary"
                                  onClick={() => {handleRemove(item.product)}} > <CancelSharpIcon /> </Button>
                               </li>
                    })}
                </ul>
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