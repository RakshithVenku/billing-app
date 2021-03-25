import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';

const Home = (props) => {

    return (
        <div style={{textAlign : "center"}}>
            
            <Grid container spacing={2}>
                <Grid item xs={6} style={{textAlign : 'left'}} >
                    <h1>Hello User<EmojiPeopleSharpIcon />...</h1>
                    <h2>If you are new to this App, follow the steps bellow: </h2>
                    <br/>
                    <Typography variant="p">
                        <li>Register your account.</li>
                        <li>Login with your credentials.</li>
                        <li>After login, a dashboard page will appear.</li>
                        <li>Add new customers and products in the respective links.</li>
                        <li>Create bill for the customers visited.</li>
                        <li>Click "bill" link from the bills list to see a particular bill.</li>
                        <li>Click "Print Bill" to print/save the bill.</li> 
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                   <img src="https://via.placeholder.com/250" alt=""></img>
                </Grid>
            </Grid>
            <Typography variant="h5" component="h3">
                @Created by Rakshith
            </Typography>
        </div>
    )
}

export default Home