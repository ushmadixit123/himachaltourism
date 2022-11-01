import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";
import Updateprofile from "./Updateprofile";

function Manageuser() {
  const [userlist, setuserlist] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [emailid, setemailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/")
      .then((response) => {
        console.log(response.data);
        setuserlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function viewUserList() {
    return userlist.map((currentrow, index) => {
      console.log(index);
      return (
        <tr key={index}>
          <td>{currentrow.firstname}</td>
          <td>{currentrow.lastname}</td>
          <td>{currentrow.address}</td>
          <td>{currentrow.city}</td>
          <td>{currentrow.state}</td>
          <td>{currentrow.pincode}</td>
          <td>{currentrow.phonenumber}</td>
          <td>{currentrow.email}</td>
          <td>{currentrow.checkindate}</td>
          <td>{currentrow.numberofdays}</td>
          <td>
            <button onClick={() => removeRow(index)} className="btn btn-danger">
              Delete
            </button>
          </td>
          {/* <td>
            <button
              onClick={() => updateRow(index)}
              className="btn btn-primary"
            >
              Update
            </button>
          </td> */}
        </tr>
      );
    });
  }

  function removeRow(index) {
    var tempuserlist = [...userlist]; // make a new copy of array instead of mutating the same array directly.
    let removerow = tempuserlist.splice(index, 1);
    console.log(removerow[0].email);
    axios
      .delete("http://localhost:5000/admin/remove/" + removerow[0].email)
      .then((res) => {
        console.log(res.data);
        setMessage("SUCCESSFULLY DELETED");
        setuserlist(tempuserlist);
      })
      .catch((err) => {
        console.log(err);
        setMessage("INVALID EMAIL ID");
      });
  }

  function updateRow(index) {
    var tempuserlist = [...userlist]; // make a new copy of array instead of mutating the same array directly.
    let removerow = tempuserlist.splice(index, 1);
    console.log(removerow[0].email);
    setStatus(false);
    setemailId(removerow[0].email);
  }

  if (status === true) {
    return (
      <div>
        <NavbarHead />
        <br />
        <div class="text-secondary bg-dark" >
        <h3  class="display-5">USER BOOKING DETAILS</h3>
        </div>
        <br></br>
        {/* <b style={{ color: "red" }}>{msg}</b> */}
        <table  align="center" class="table table-striped text-secondary" width="100%">
          <thead>
            <tr>
          <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>ADDRESS</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>PINCODE</th>
              <th>PHONENUMBER</th>
              <th>EMAIL</th>
              <th>Check In Date</th>
              <th>STAY DAYS</th>
              <th>  </th>
              </tr>
          </thead>

          <tbody>{viewUserList()}</tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <Updateprofile email={emailid} />
      </div>
    );
  }
}

export default Manageuser;
