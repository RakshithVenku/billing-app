import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startUserAccount} from '../actions/usersAction'
import { Container, Typography, Paper} from '@material-ui/core'

const Account = (props) => {
    const user = useSelector((state) => {
        return state.account
    })
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startUserAccount())
    }, [])

    return (
        <Container align="center">
            <hr />
            <Paper elevation={12} style={{width : '400px', height : '200px'}}>
                    <Typography variant="b" component="h2">User Account</Typography>
                    <div style={{textAlign :'left', position :'absolute', marginLeft : '100px', marginTop : '30px'}}>
                    <Typography> <b>Username</b> -  {user.username} </Typography>
                    <Typography> <b>Email</b> - {user.email} </Typography>
                    <Typography> <b>BusinessName</b> - {user.businessName}</Typography>
                    <Typography> <b>Address</b> - {user.address}</Typography>
                </div>
            </Paper>
        </Container>
    )
}

export default Account