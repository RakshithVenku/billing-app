import React from 'react'
import {useSelector} from 'react-redux'
import { Container,  Grid, Typography,Card, CardActionArea,  CardActions, CardContent, Button, Typograph} from '@material-ui/core'

const DashBoard = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    return (
        <div >
            <Typography variant="h4" component="h2" style={{textAlign : 'center'}}>User DashBoard</Typography>
            <Grid container spacing={2} justify="center" alignItems="center">
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
                                0
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
                                <Typography variant="h3" component="h2">
                                0
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default DashBoard