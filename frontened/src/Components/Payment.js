import React from "react";
import NavbarHead from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <NavbarHead />
      <bR></bR>
      <bR></bR>
      <bR></bR>
      <h2>BOOKING SUCCESSFUL!!</h2>
      <h3>Thanks for choosing Himachal Tourism.</h3>
      <bR></bR>
      <bR></bR>
      <bR></bR>
      <bR></bR>
      <bR></bR>
      <Link to="/" style={{ textDecoration: "none" }}>
        Back to Home Page
      </Link>
    </div>
  );
};

export default Payment;
