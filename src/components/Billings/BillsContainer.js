import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startBillsList} from '../../actions/billsAction'
import {Grid} from '@material-ui/core'
import BillsList from './BillsList'
import AddBill from './AddBill'

const BillsContainer = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startBillsList())   // api call - get all Bills
    }, [])


    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <BillsList/>
                </Grid>

                <Grid item xs={6}>
                    <AddBill />
                </Grid>
            </Grid>
        </div>
    )
}

export default BillsContainer