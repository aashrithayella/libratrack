import "./bid2.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function Bid4() {
  return (
    <div>
        <Nav />
        <p class="studentdeet">Book Issue Details</p>
    <form action="" method="get" class="studentform" onsubmit="return bookIssueDetails()">
        <label id="lid">Book ID:</label>
        <input type="text" id="iid" ></input><br></br><br></br>
        <label id="lname">Book Name:</label>
        <input type="text" id="iname"></input><br></br><br></br>
        <label id="lauthor">Author:</label>
        <input type="text" id="iauthor" ></input><br></br><br></br>
        <NavLink to="/issuesuccess">
        <button class="submit">Submit</button>
        </NavLink>
        <NavLink to="/bid5">
        <button class="next">Next</button>
        </NavLink>
        <NavLink to="/bid3">
        <button class="previous">Previous</button>
        </NavLink>
      </form>
    </div>
  );
}
export default Bid4;