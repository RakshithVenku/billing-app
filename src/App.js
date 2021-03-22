import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Container from '@material-ui/core/Container';

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  }, [])

  return (
    <Container component="main">
       <div>
           <h1 style={{textAlign : "center"}}>Billing App</h1>
           <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
       </div>
    </Container>
  )
}

export default App
