import React from 'react'
import {useDispatch} from 'react-redux'
import {startAddCustomer} from '../../actions/usersAction'
import CustomersForm from './CustomersForm'

const AddCustomer = (props) => {
    const dispatch = useDispatch()
   
    const formSubmit = (Customer) => {
        dispatch(startAddCustomer(Customer))
    }

    return (
        <div>
            <hr />
            <h2>Add a Customer</h2>
            <CustomersForm
              formSubmit={formSubmit}
            />
        </div>
    )
}

export default AddCustomer