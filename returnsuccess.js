import "./issuesuccess.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function ReturnSuccess() {
  return (
    <div>
        <Nav />
        <div class="circle"></div>
        <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247959/checkmark_yz4c3u.png" id="checkmark" alt="check"></img>
        <p class="successful">RETURN SUCCESSFUL!</p>
        <p class="text">xyz books have been issued</p>
        <NavLink to='/studentfaculty2'>
        <button class="ok">OK</button>
        </NavLink>

    </div>
  );
}
export default ReturnSuccess;