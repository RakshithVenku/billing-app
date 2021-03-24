import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Home = (props) => {

    return (
        <div style={{textAlign : "center"}}>
            
            <Grid container spacing={2}>
                <Grid item xs={6} style={{textAlign : 'left'}} >
                    <h1>Hello User...</h1>
                    <p >
                        Velit do occaecat sint incididunt ex in consectetur aute sint sunt. Ex culpa officia incididunt aliquip nulla minim. Aliqua magna sit dolore eu veniam commodo tempor veniam eu irure deserunt dolor tempor amet.Velit do occaecat sint incididunt ex in consectetur aute sint sunt. Ex culpa officia incididunt aliquip nulla minim. Aliqua magna sit dolore eu veniam commodo tempor veniam eu irure deserunt dolor tempor amet.Velit do occaecat sint incididunt ex in consectetur aute sint sunt. Ex culpa officia incididunt aliquip nulla minim. Aliqua magna sit dolore eu veniam commodo tempor veniam eu irure deserunt dolor tempor amet.Velit do occaecat sint incididunt ex in consectetur aute sint sunt. Ex culpa officia incididunt aliquip nulla minim. Aliqua magna sit dolore eu veniam commodo tempor veniam eu irure deserunt dolor tempor amet.</p>
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