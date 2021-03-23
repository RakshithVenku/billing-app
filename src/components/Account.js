import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startUserAccount} from '../actions/usersAction'

const Account = (props) => {
    const user = useSelector((state) => {
        return state.account
    })
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startUserAccount())
    }, [])
    return (
        <div>
            <hr />
            <h2>User Account</h2>
            <p> <b>Username</b> -  {user.username} </p>
            <p> <b>Email</b> - {user.email} </p>
            <p> <b>BusinessName</b> - {user.businessName}</p>
            <p> <b>Address</b> - {user.address}</p>
        </div>
    )
}

export default Account