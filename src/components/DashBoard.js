import React from 'react'
import {useSelector} from 'react-redux'
import Chart from "react-google-charts"
import { Container,  Grid, Typography,Card, CardActionArea,  CardActions, CardContent, Button, Typograph} from '@material-ui/core'

const DashBoard = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const bills = useSelector((state) => {
        return state.bills
    })

    // Only Last 5 Bills
    const chartData = [
        ['Customer Name', 'Total Price']
      ]
    let last5BillsTotal = 0

    for(const bill of bills){
        if(chartData.length <= 5){
            last5BillsTotal += bill.total
            const cusName = customers.find(cus => cus._id === bill.customer)
            chartData.push([(cusName && cusName.name), bill.total])
        }else{
            break
        }
    }

    return (
        <div style={{textAlign : 'center'}}>
            <Typography variant="h4" component="h2" style={{textAlign : 'center'}}>User DashBoard</Typography>
            <Grid container spacing={2} justify="center" >
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            Number of Customers
                            </Typography>
                            <Typography variant="h3" component="h2">
                            {customers.length}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Number of Products
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {products.length}
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Number of Billings today
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {bills.length}
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4} justify="center" alignItems="center">
                    <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Last 5 Bills
                                </Typography>
                                   <Chart
                                     width={'500px'}
                                     height={'400px'}
                                     chartType="PieChart"
                                     loader={<div>Loading Chart</div>}
                                     data={chartData}
                                     options={{
                                       title: `Total : ₹${last5BillsTotal}`,
                                     }}
                                     rootProps={{ 'data-testid': '1' }}
                                   />
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default DashBoard