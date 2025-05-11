import "./studentdetails.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function StudentDetails() {
  return (
    <div>
    <Nav/>
    <p class="studentdeet">Student Details</p>
    <form action="" method="get" onsubmit="return studentDetails()"  class="studentform" id="studentform">
        <label id="lname1">Name:</label>
        <input type="text" id="iname1" ></input><br></br><br></br>
        <label id="lrollno">Roll No:</label>
        <input type="text" id="irollno"></input><br></br><br></br>
        <label id="lissuedate">Issue Date:</label>
        <input type="text" id="iissuedate" ></input><br></br><br></br>
        <NavLink to="/bid1">
        <button class="next">Next</button>
        </NavLink>
      </form>
    </div>
  );
}
export default StudentDetails;