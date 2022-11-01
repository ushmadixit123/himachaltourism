import React from 'react'
import { Redirect } from "react-router-dom";
import NavbarHead from './Navbar';

function Userafterlogin() {
    let authuser = localStorage.getItem('Key_Veriable')
    console.log(authuser)
    if (authuser == null) {
      return (<Redirect to="/login" />)
    }
    else {
      let name = localStorage.getItem('username')
      console.log(name)
      return (
        <div>
          <NavbarHead />
          <br />
          <h3>WELCOME {name}</h3>
          <h3>THIS IS USER DASH BOARD</h3>
        </div>
      )
    }
  }
  
  export default Userafterlogin
