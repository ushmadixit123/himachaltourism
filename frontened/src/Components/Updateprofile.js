import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Updateprofile(props) {
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

    axios
      .put("http://localhost:5000/user/update", userinfo)
      .then((res) => {
        console.log(res.data);
        setMessage("PROFILE UPDATED!!");
      })
      .catch((err) => console.log(err));

    setusername("");
    setemail("");
    setphonenumber("");
    setpassword("");
  };

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    let emailid = localStorage.getItem("useremail");
    if (emailid == null) emailid = props.email;
    axios
      .get("http://localhost:5000/user/search/" + emailid)
      .then((response) => {
        console.log(response.data);
        const { username, email, phonenumber, password } =
          response.data[0];
        setusername(username);
        setemail(email);
        setphonenumber(phonenumber);
        setpassword(password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <br />
      <div className="signupbox">
      <div align="center">
      <h3 class="text-white-50 ">PROFILE UPDATE</h3>
      <b style={{ color: "red" }}> {msg}</b>
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
                    type="number"
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
            <input type="submit" value="UPDATE PROFILE" className="btn btn-success" />
          </form>
          </div>
          </div>
    </div>
  );
}

export default Updateprofile;
