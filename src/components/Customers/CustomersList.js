import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import CustomersItem from './CustomersItem'


const CustomersList = (props) => {
    const [input, setInput] = useState('')

    let customers = useSelector((state) => {
        return state.customers
    })

    //search functionality
    const handleSearchChange = (e) => {
        setInput(e.target.value)
    }

    if(input.length>0){
        customers = customers.filter((customer)=>{
        return customer.name.toLowerCase().match(input.toLowerCase())
        })
    }
    
    return (
        <div>
            <hr />
            <h2>Customers List</h2>
            {customers.length === 0 ? (
                <div>
                    <input  
                       style={{width: '30%', marginBottom : '25px'}}
                       type = "text" 
                       placeholder = "Search by name..." 
                       onChange = {handleSearchChange} 
                       value = {input}
                    />
                    <Typography>No customers found</Typography>
                </div>
                
            ) : (
                <div>
                     <input  
                       style={{width: '30%', marginBottom : '25px'}}
                       type = "text" 
                       placeholder = "Search by name..." 
                       onChange = {handleSearchChange} 
                       value = {input}
                />
                    <Grid container spacing={2} style={{overflowY : 'scroll', maxHeight : '400px'}} >
                         {customers.map((customer) => {
                            return (
                                <Grid item xs={6}>
                                    <CustomersItem key={customer._id} {...customer} />
                                </Grid>
                            )
                         })}
                    </Grid>
                </div>
            )}
            
        </div>
    )
}

export default CustomersList