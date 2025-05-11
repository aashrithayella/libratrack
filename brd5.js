import "./bid1.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function Brd5() {
  return (
    <div>
        <Nav />
        <p class="studentdeet">Book Return Details</p>
    <form action="" method="get" class="studentform" onsubmit="return bookIssueDetails()">
        <label id="lid">Book ID:</label>
        <input type="text" id="iid" ></input><br></br><br></br>
        <label id="lname">Book Name:</label>
        <input type="text" id="iname"></input><br></br><br></br>
        <label id="lauthor">Author:</label>
        <input type="text" id="iauthor" ></input><br></br><br></br>
        <NavLink to="/returnsuccess">
        <button class="submit">Submit</button>
        </NavLink>
        <NavLink to="/brd4">
        <button class="next">Previous</button>
        </NavLink>
        
      </form>
    </div>
  );
}
export default Brd5;