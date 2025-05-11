import "./studentfaculty.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function StudentFaculty() {
  return (
    <div>
    <Nav/>
    <NavLink to="/studentdetails">
    <button class="student"></button>
    </NavLink>
    <NavLink to="/facultydetails">
    <button class="faculty"></button>
    </NavLink>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719249271/icons8-graduation-30_zdujch.png" id="studentimg"></img>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719248426/teacher_icon_dl4a5y.png" id="facultyimg"></img>
    <div class="stutext">
    <p>STUDENT</p>
    </div>
    <div class="factext">
        <p>FACULTY</p>
    </div>
    </div>
  );
}
export default StudentFaculty;