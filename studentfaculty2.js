import "./studentfaculty.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function StudentFaculty2() {
  return (
    <div>
    <Nav/>
    <NavLink to="/studentdetails2">
    <button class="student"></button>
    </NavLink>
    <NavLink to="/facultydetails2">
    <button class="faculty"></button>
    </NavLink>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719248426/student_icon_dubrta.png" id="studentimg"></img>
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
export default StudentFaculty2;