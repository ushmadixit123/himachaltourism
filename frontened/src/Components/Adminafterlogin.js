import React from "react";
import { Redirect } from "react-router-dom";
// import NavigationBar from "./Navbar";
import NavbarHead from "./Navbar";

function Adminafterlogin() {
  let authuser = localStorage.getItem("Key_Veriable");
  console.log(authuser);
  if (authuser == null) {
    return <Redirect to="/admin" />;
  } else {
    return (
      <div>
        <NavbarHead />
        <br />
        <br />
        <br />
        <div class="card text-center">
  <div class="card-header">
    ADMIN
  </div>
  <div class="card-body">
    <h1 class="card-title" class="display-3">WELCOME ADMIN</h1>
    <h3 class="card-title">THIS IS ADMIN DASHBOARD</h3>
    <p class="card-text">This is admin pannel.</p>
   
  </div>
  <div class="card-footer text-muted">
    <br/>
  </div>
</div>
      </div>
    );
  }
}

export default Adminafterlogin;
