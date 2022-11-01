import React, { useState } from "react";
import NavBarHead from "./Navbar";
import "./Adminsignup.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if (adminuserid == "admin" && adminpassword == "admin") {
      localStorage.setItem("Key_Veriable", "ADMIN");
      setMessage("WELCOME ADMIN");
      props.history.push("/adminafterlogin");
    } else setMessage("INVALID ADMIN ID OR PASSWORD");

    setAdminUserId("");
    setAdminPassword("");
  };

  return (
    <div>
      <NavBarHead />
      <div className="login-box1">
        <h2>Admin Login</h2>
        <i style={{ color: "red" }}>{msg}</i>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="user-box1">
            <input
              type="text"
              value={adminuserid}
              onChange={onChangeAdminUserId}
              required
            ></input>
            <label>Admin User ID</label>
            <div className="user-box1">
              <input
                type="password"
                value={adminpassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              ></input>
              <label>Admin Password</label>
            </div>
          </div>

          {/* <Link
              to="/adminafterlogin"
              style={{
                textDecoration: "none",
                height: "50px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                letterSpacing: "4px",
              }}
            >
              LOGIN
            </Link> */}
          <input type="submit" value="LOGIN" className="btn btn-success" />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </form>
      </div>
    </div>
  );
}
export default AdminLoginHooks;
