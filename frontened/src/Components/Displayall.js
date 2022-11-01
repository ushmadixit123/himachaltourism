import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";

function Displayall() {
  const [userlist, setUserList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/")
      .then((response) => {
        console.log(response.data);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function viewUserList() {
    return userlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.username}</td>
          <td>{currentrow.email}</td>
          <td>{currentrow.phonenumber}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <NavbarHead />
      <br />
      <h3>All User Details</h3>
      <table border-collapse= "collapse" align="center" padding = "15px" >
        <thead>
          <tr>
            <th padding = "15px" >Name </th>
            <th padding = "15px">Email </th>
            <th padding = "15px">Phone Number</th>
          </tr>
        </thead>

        <tbody>{viewUserList()}</tbody>
      </table>
    </div>
  );
}

export default Displayall;
