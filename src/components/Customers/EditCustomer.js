import React from 'react'
import {useDispatch} from 'react-redux'
import CustomersForm from './CustomersForm'
import {startEditCustomer} from '../../actions/usersAction'


const EditCustomer = (props) => {
    const dispatch = useDispatch()
    const {id, name, mobile, email, handleToggle} = props

    const onSuccess = () => {
        handleToggle()
    }

    const formSubmit = (customer) => {
        dispatch(startEditCustomer(customer, id, onSuccess))
    }

    return (
        <div>
            <h3>Edit Customer</h3>
            <CustomersForm id={id} name={name} mobile={mobile} email={email} formSubmit={formSubmit} />
        </div>
    )
}

export default EditCustomer