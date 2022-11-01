import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Userafterlogin from "./Components/Userafterlogin";
import Stay from "./Components/Stay";
// import Otp from "./Components/Otp";
import TopDestination from "./Components/TopDestination";
import Himalayas from "./Components/Himalayas";
import Floraandfauna from "./Components/Floraandfauna";
import Cuisine from "./Components/Cuisine";
import Adventure from "./Components/Adventure";
import Cultureandheritage from "./Components/Cultureandheritage";
import Unexplored from "./Components/Unexplored";
import Admin from "./Components/Admin";
import Adminafterlogin from "./Components/Adminafterlogin";
import Delete from "./Components/Delete";
import Displayall from "./Components/Displayall";
import Search from "./Components/Search";
import Manageuser from "./Components/Manageuser";
import Logout from "./Components/Logout";
import Updateprofile from "./Components/Updateprofile";
import Payment from "./Components/Payment";
// import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/himalayas" component={Himalayas} />
          <Route path="/flora&fauna" component={Floraandfauna} />
          <Route path="/cuisine" component={Cuisine} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/culture&heritage" component={Cultureandheritage} />
          <Route path="/unexplored" component={Unexplored} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/userafterlogin" component={Userafterlogin} />
          <Route exact path="/stay" component={Stay} />
          <Route path="/manageuser" component={Manageuser} />
          {/* <Route path="/otp" component={Otp} /> */}
          <Route path="/admin" component={Admin} />
          <Route path="/delete" component={Delete} />
          <Route path="/displayall" component={Displayall} />
          <Route path="/search" component={Search} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route path="/payment" component={Payment} />
          <Route path="/updateprofile" component={Updateprofile} />
          <Route path="/adminafterlogin" component={Adminafterlogin} />
          <Route path="/topdestination" component={TopDestination} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
