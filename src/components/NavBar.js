import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
// import {removeUser, resetNote, removeAccount} from '../actions/usersAction'
// import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import DashBoard from './DashBoard'
import ProductsContainer from './Products/ProductsContainer'
import CustomersContainer from './Customers/CustomersContainer'



const NavBar = (props) => {
    const {userLoggedIn, handleAuth} = props
    return (
        <div>
            <p  style={{textAlign : "center"}}>
             {userLoggedIn ? (
                 <>
                     <span><Link to="/account">My Account</Link></span> |
                     <span><Link to="/dashboard">Dashboard</Link></span> |
                     <span><Link to="/customers">Customers</Link></span> |
                     <span><Link to="/products">Products</Link></span> |
                     <span><Link to="/billing">Billing</Link></span> |
                     <span style={{color: 'blue', cursor : 'pointer'}} onClick={() => {
                         
                         swal({
                             title: "Are you sure?",
                             text: "this will logout from your page!",
                             icon: "warning",
                             buttons: true,
                             dangerMode: true,
                           })
                           .then((isLoggedOut) => {
                               if(isLoggedOut){
                                 localStorage.removeItem('token')

                                 swal("successfully logged out", {
                                     icon: "success",
                                   })
                                 handleAuth()
                                 props.history.push('/')
                               }
                           })
                      }}>Logout</span>  
                </>
             ) : ( 
                 <>
                     <span><Link to="/">Home</Link></span> | 
                     <span><Link to="/register">Register</Link></span> |
                     <span><Link to="/login">Login</Link></span>
                 </>   
             )}
            </p>
     
            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} />
            <Route path="/login" render={(props) => {
                return <Login
                          {...props}
                          handleAuth={handleAuth}
                       />
            }} />
            <Route path="/dashboard" render={(props) => {
                return <DashBoard
                          {...props}
                          handleAuth={handleAuth}
                       />
            }} />

            <Route path="/products" component={ProductsContainer} />
            <Route path="/account" component={Account} />
            <Route path="/customers" component={CustomersContainer} />
        </div>
    )
}

const WrappedComponent = withRouter(NavBar)

export default WrappedComponent