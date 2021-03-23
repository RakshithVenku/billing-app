import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { Grid, Typography, TextField } from '@material-ui/core'
import BillsItem from './BillsItem'


const BillsList = (props) => {
    // const [input, setInput] = useState('')

    let bills = useSelector((state) => {
        return state.bills
    })

    //search functionality
    // const handleSearchChange = (e) => {
    //     setInput(e.target.value)
    // }

    // if(input.length>0){
    //     bills = bills.filter((bill)=>{
    //     return bill.name.toLowerCase().match(input.toLowerCase())
    //     })
    // }
    
    return (
        <div>
            <hr />
            <h2>Bills List</h2>
            {bills.length === 0 ? (
                <div>
                    {/* <TextField  
                       style={{width: '30%', marginBottom : '25px'}}
                       variant="outlined"
                       size="small"
                       type = "text" 
                       placeholder = "Search by name..." 
                       onChange = {handleSearchChange} 
                       value = {input}
                    /> */}
                    <Typography>No bills found</Typography>
                </div>
                
            ) : (
                <div>
                     {/* <TextField  
                       style={{width: '30%', marginBottom : '25px'}}
                       variant="outlined"
                       size="small"
                       type = "text" 
                       placeholder = "Search by name..." 
                       onChange = {handleSearchChange} 
                       value = {input}
                /> */}
                    <Grid container spacing={2} style={{overflowY : 'scroll', maxHeight : '400px'}} >
                         {bills.map((bill) => {
                            return (
                                <Grid item xs={12}>
                                    <BillsItem key={bill._id} {...bill} />
                                </Grid>
                            )
                         })}
                    </Grid>
                </div>
            )}
            
        </div>
    )
}

export default BillsList