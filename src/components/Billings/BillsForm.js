import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addItem, resetItems , incrementQuantity, decrementQuantity, removeItem} from '../../actions/lineItemsAction'
import {TextField,  Button, Grid, Card, CardActionArea,  CardActions, CardContent, Typography} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
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
    // const [totalBill, setTotalBill] = useState(0)

    const totalBillCalculation = () => {
        let total = 0

        lineItems.forEach((item) => {
            total += (item.price * item.quantity)
        })

        return total
    }
    

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
        let quantity = 1
        const itemObj = {
            'prodId' : new Date(),
            'prodName' : item.name,
            'price' : item.price,
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

                <Grid item xs={6}> 
                   <TextField type='date' variant="outlined" size="small"  placeholder="YYYY-MM-DD" value={date} onChange={handleDateChange} /><br/>
                {/* </Grid> */}

                {/* <Grid item xs={12}>  */}
                   <FormControl size="small" style={{width:"210px", marginTop: '20px'}} >
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
                   </FormControl><br/>
                     {/* <Autocomplete
                           id="combo-box-demo"
                           options={customers}
                           value={customer}
                           onChange={handleCustomerChange}
                           getOptionLabel={(customer) => customer.name}
                           style={{ width: 300 }}
                           renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                         /> */}
                {/* </Grid> */}

                {/* <Grid item xs={12}>  */}
                   <FormControl size="small" style={{width:"210px",marginTop : '20px'}} >
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

                   <Grid item xs={12} style={{marginTop: '20px'}}> 
                      <Button type="submit" size="small" variant="contained" color="primary"> add </Button>
                   </Grid>
                </Grid>

                <Grid item xs={6} >
                    {lineItems.length > 0 && (
                        <div>
                            <Typography variant='h5'>Items List :</Typography>
                            <Typography variant='p'>Total Bill : ₹{totalBillCalculation()}</Typography>
                        </div>
                    )}

                    <Grid item xs={12} style={{overflowY : lineItems.length > 0 && 'scroll' , maxHeight : '400px'}}>
                       {lineItems.map((item) => {
                          return <Card elevation={4} style={{marginBottom : '20px', width:'250px'}} size="small" key={item.prodId}>
                                 <CardActionArea>
                                   <CardContent>
                                      {item.prodName} - <b>₹{item.price}</b>
                                   </CardContent>
                                   <CardActions>
                                      <Button size="small" color="primary"
                                        onClick={() => {handleDecre(item.prodId)}}> <RemoveCircleSharpIcon /> </Button>
                                     {item.quantity}
      
                                     <Button size="small" color="primary"
                                        onClick={() => {handleIncre(item.prodId)}}> <AddCircleSharpIcon /></Button>
                                     <Button size="small" color="secondary"
                                        onClick={() => {handleRemove(item.prodId)}} > <CancelSharpIcon /> </Button>
                                   </CardActions>
                                 </CardActionArea>
                                  </Card>
                       })}
                    </Grid>
                </Grid>
            </Grid>
               
            </form>
        </div>
    )
}

export default BillsForm