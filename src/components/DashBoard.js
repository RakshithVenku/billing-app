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
        <Container style={{textAlign : 'center'}}>
            <Typography variant="b" component="h2" style={{ textAlign : 'center', color : 'teal'}}>User DashBoard</Typography>
            <Grid container spacing={2} justify="center" >
                <Grid item xs={3}>
                    <Card elevation={8}>
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
                    <Card elevation={8}>
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
                    <Card elevation={8}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Number of Billings
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {bills.length}
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4} justify="center" alignItems="center">
                    <Card elevation={8}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Last 5 Bills
                                </Typography>
                                   <Chart
                                     width={'400px'}
                                     height={'200px'}
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

        </Container>
    )
}

export default DashBoard