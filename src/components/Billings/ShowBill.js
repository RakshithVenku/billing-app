import React from 'react' 
import {Link} from 'react-router-dom'
import {Card, CardActionArea, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

const ShowBill = (props) => {
    const {handleShowBill, productsBought, customerObj, total} = props

    const handleBtn = () => {
        handleShowBill()
    }

    return (
        <div>
           <h2>Show Bill</h2>
          
           <Card >
           <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                           <b>Name :</b> {customerObj && customerObj.name}        
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Phn.No : +91 {customerObj && customerObj.mobile}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Products Bought : 
                            </Typography>
                            <Table border="2" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price(in ₹)</TableCell>
                                        <TableCell>Total price(in ₹)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productsBought && productsBought.map((product) => {
                                        return (
                                            <TableRow key={product._id}>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                                <TableCell>{product.subTotal}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            
                         
                          <Typography variant="body2" color="textSecondary" component="p">
                            <b>Total: ₹{total}</b>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
           </Card>


            <button onClick={handleBtn}>
            <Link to="/billing" >back</Link>
            </button>
        </div>
    )     
}

export default ShowBill