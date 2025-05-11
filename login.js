import "./login.css";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <div id="body">
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247883/grietnamelogo_yqvrki.png" id="griet"></img>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247744/library_image_psdlnf.png" id="libimg"></img>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719242320/accrediation_logos_czpi0o.png" id="acc"></img>
    <div class="login">
        <p1 class="text">Login</p1>
    </div>
    <div class="container-1">
        <form class="form1" onsubmit="return validateForm()">
            <h3 id="label-1">Username :</h3><br></br>
            <input type="text" id="text1"></input>
            <h3 id="label-2">Password :</h3><br></br>
            <input type="password" id="text2"></input>
            <NavLink to="/bookstatus">
            <button id="submit1" type="submit">Submit</button>
            </NavLink>
        </form>
    </div>
    </div>
  );
}
export default Login;