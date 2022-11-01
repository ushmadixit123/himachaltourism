import React, { useState } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";
import "./Signup.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Signup() {
  const [eusername, setusername] = useState("");
  const [eemail, setemail] = useState("");
  const [ephonenumber, setphonenumber] = useState("");
  const [epassword, setpassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeusername = (e) => setusername(e.target.value);
  const onChangeemail = (e) => setemail(e.target.value);
  const onChangephonenumber = (e) => setphonenumber(e.target.value);
  const onChangepassword = (e) => setpassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${eusername}`);
    console.log(`EMAIL: ${eemail}`);

    const userinfo = {
      username: eusername,
      email: eemail,
      phonenumber: ephonenumber,
      password: epassword,
    };

    axios.post("http://localhost:5000/user/signup", userinfo).then((res) => {
      console.log(res.data);
     // setMessage(res.data.message) ;
      //setMessage("SIGNUP SUCCESSFUL");
      console.log("--------------"+res.data.message);
        if(res.data.success!= -1)
        {
          setMessage("SIGNUP SUCCESSFUL");
        }
       else
        {
        setMessage(res.data.message);
       }
        // setMessage(res.data.message);
        // setMessage("SIGNUP SUCCESSFUL");
    });
    //setMessage("SIGNUP SUCCESSFUL");

    setusername("");
    setemail("");
    setphonenumber("");
    setpassword("");
  };

  return (
    <div>
      <NavbarHead />
      <div className="signupbox">
        <div align="center">
          <h2>Sign Up</h2>
          <h4 style={{ color: "brown" }}>{msg}</h4>
          <form onSubmit={handleSubmit}>
            <div className="userbox2">
              <input
                type="text"
                value={eusername}
                onChange={onChangeusername}
                required
              />
              <label>Username</label>
              <div className="userbox2">
                <input
                  type="email"
                  value={eemail}
                  onChange={onChangeemail}
                  required
                />
                <label>Email</label>
                <div className="userbox2">
                  <input
                    type="tel"
                    value={ephonenumber}
                    onChange={onChangephonenumber}
                    required
                  />
                  <label>Phone Number</label>
                  <div className="userbox2">
                    <input
                      type="password"
                      value={epassword}
                      onChange={onChangepassword}
                      required
                    />
                    <label>Password</label>
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" value="SIGN UP" className="btn btn-success" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
