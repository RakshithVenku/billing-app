import React from 'react'
import {useDispatch} from 'react-redux'
import {startAddBill} from '../../actions/billsAction'
import BillsForm from './BillsForm'

const AddBill = (props) => {
    const dispatch = useDispatch()
   
    const formSubmit = (bill) => {
        dispatch(startAddBill(bill))
    }

    return (
        <div>
            <hr />
            <h2>Add a Bill</h2>
            <BillsForm
              formSubmit={formSubmit}
            />
        </div>
    )
}

export default AddBill