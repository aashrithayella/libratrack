import "./facultyhistory.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function FacultyHistory() {
  return (
    <div>
    <Nav/>
    <form id="myform" onsubmit="return val()">
        <label for="name">Name:</label>
        <input type="text" id="name"></input><br></br><br></br>
        <label for="rno">ID:</label>
        <input type="text" id="id"></input><br></br><br></br>
        <input type="submit" id="submit"></input>
    </form>
    </div>
  );
}
export default FacultyHistory;