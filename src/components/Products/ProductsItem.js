import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {startDeleteProduct} from '../../actions/usersAction'
import swal from 'sweetalert'
import EditProduct from './EditProduct'
import {Card, CardActionArea,  CardActions, CardContent, Button, Typography} from '@material-ui/core';



const ProductsItem = (props) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const {_id, name, price} = props

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }

    const handleRemove = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(startDeleteProduct(id))
            } 
          })

    }

    // const handleModal = (id) => {
    //     startNoteModal(id)
    // }

    return (
        <div>
            { toggle ? (
                <div>
                    <EditProduct 
                        id={_id}
                        name={name}
                        price={price}
                        handleToggle={handleToggle}
                    />
                    <Button  onClick={handleToggle}> cancel </Button>
                </div>
            ) : (
                <Card >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Price: ₹{price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button  onClick={handleToggle} size="small" color="primary">
                          edit
                        </Button>
                        <Button size="small" color="secondary" onClick={() => {
                                        handleRemove(_id)
                                    }}>
                          delete
                        </Button>
                      </CardActions>
                </Card>
            )}
        </div>
    )
}

export default ProductsItem


 