// import React, { useState } from "react";

// function Otp(props) {
//   const [otpno, setOTPNo] = useState("");
//   const [msg, setMessage] = useState("");

//   const onChangeOTPNo = (e) => setOTPNo(e.target.value);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     if (otpno === "123") {
//       //props.generatedotp) {
//       // sessionStorage.setItem("Key_Veriable", 'USER')
//       //sessionStorage.setItem("useremail", props.empemail)
//       //sessionStorage.setItem("username", props.empname)
//       props.history.push("/home");
//     } else {
//       setMessage("INVALID OTP");
//     }

//     setOTPNo("");
//   };

//   return (
//     <div>
//       <br />
//       <h3>ENTER OTP</h3>
//       <b style={{ color: "red" }}> {msg} </b>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={otpno}
//           onChange={onChangeOTPNo}
//           placeholder="Enter OTP"
//           required
//         />
//         <br />
//         <br />

//         <input type="submit" value="CHECK OTP" className="btn btn-success" />
//       </form>
//     </div>
//   );
// }

// export default Otp;
