import React, { useState } from "react";
import axios from "axios";
import "./Usersignup.css";
import NavbarHead from "./Navbar";

function Login(props) {
  const [eemail, setemail] = useState("");
  const [epassword, setpassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeemail = (e) => setemail(e.target.value);
  const onChangepassword = (e) => setpassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASSWORD: ${epassword}`);

    const userlogininfo = {
      email: eemail,
      password: epassword,
    };

    axios
      .post("http://localhost:5000/user/login", userlogininfo)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Key_Veriable", "USER");
        localStorage.setItem("email", res.data[0].email);
        localStorage.setItem("username", res.data[0].user);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setMessage("INVALID UID OR PASSWORD");
      });

    setemail("");
    setpassword("");
  };
  return (
    <div>
      <NavbarHead />
      <div className="login-box">
      <b style={{ color: "red" }}> {msg} </b>
        <h2>Login</h2>
        <form  onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="email" value={eemail}  onChange={onChangeemail} required></input>
            <label>Email</label>
            <div className="user-box">
              <input type="password"  value={epassword} onChange={onChangepassword} required></input>
              <label>Password</label>
            </div>
          </div>
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

export default Login;
