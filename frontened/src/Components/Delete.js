import React, { useState } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";

function Delete() {
  const [eemail, setemail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeemail = (e) => {
    setemail(e.target.value);
    setMessage(""); //REMOVE ERROE MSG
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios
      .delete("http://localhost:5000/admin/remove/" + eemail)
      .then((res) => {
        console.log(res.data);
        setMessage("SUCCESSFULLY DELETED");
      })
      .catch((err) => {
        console.log(err);
        setMessage("INVALID EMAIL ID");
      });

    setemail("");
  };

  return (
    <div>
      <NavbarHead />
      <br />
      <h3>ENTER EMAIL ID FOR DELETE</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={eemail}
          onChange={onChangeemail}
          placeholder="EMAIL ID"
          required
        />
        <br />
        <br />
        <input
          type="submit"
          value="DELETE EMPLOYEE"
          className="btn btn-danger"
        />
      </form>
    </div>
  );
}

export default Delete;
