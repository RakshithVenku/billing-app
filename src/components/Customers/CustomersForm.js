import React, {useState} from 'react'
import {TextField,  Button, Grid} from '@material-ui/core'

const CustomersForm = (props) => {
    const {formSubmit, name : customerName, mobile : customerMobile, email : customerEmail} = props
    const [name, setName] = useState(customerName ? customerName : '')
    const [mobile, setMobile] = useState(customerMobile ? customerMobile : '')
    const [email, setEmail] = useState(customerEmail ? customerEmail : '')

    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            "name" : name,
            "mobile" : mobile,
            "email" : email
        }

        formSubmit(formData)
        setName('')
        setMobile('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                <TextField variant="outlined"  type="text" placeholder="name" value={name} onChange={handleNameChange} /><br/>
                </Grid>

                <Grid item xs={12}> 
                <TextField variant="outlined" type="text" placeholder="mobile" value={mobile} onChange={handleMobileChange} /><br/>
                </Grid>

                <Grid item xs={12}> 
                <TextField variant="outlined"  type="email" placeholder="email" value={email} onChange={handleEmailChange} /><br/>
                </Grid>
                
                <Grid item xs={12}> 
                <Button type="submit" variant="contained" color="primary"> add </Button>
                </Grid>
            </Grid>
               
            </form>
        </div>
    )
}

export default CustomersForm