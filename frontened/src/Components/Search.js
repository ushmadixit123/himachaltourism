import React, { useState } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";

function Search() {
  const [emplist, setEmpList] = useState([]);
  const [eemail, setEmpEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(""); //REMOVE ERROE MSG
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .get("http://localhost:5000/emp/search/" + eemail)
      .then((res) => {
        console.log(res.data);
        setEmpList(res.data);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage("INVALID EMAIL ID");
      });

    setEmpEmail("");
  };

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>
        </tr>
      );
    });
  }

  if (status === false) {
    return (
      <div>
        <NavbarHead />
        <br />
        <h3>ENTER EMAIL ID FOR SEARCH</h3>
        <b style={{ color: "red" }}>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={eemail}
            onChange={onChangeEmpEmail}
            placeholder="EMAIL ID"
            required
          />
          <br />
          <br />
          <input
            type="submit"
            value="SEARCH EMPLOYEE"
            className="btn btn-success"
          />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarHead />
        <br />
        <h3>ENTER EMAIL ID FOR SEARCH</h3>
        <b>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={eemail}
            onChange={onChangeEmpEmail}
            placeholder="EMAIL ID"
            required
          />
          <br />
          <br />
          <input
            type="submit"
            value="SEARCH EMPLOYEE"
            className="btn btn-success"
          />
        </form>
        <br />
        <br />

        <h3>EMPLOYEE DETAILS</h3>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>{viewEmpList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Search;
