import "./bookhistory.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function BookHistory() {
  return (
    <div>
    <Nav/>
    <form id="myform" onsubmit="return val()">
        <label for="name">Book Id:</label>
        <input type="text" id="bookid"></input><br></br><br></br>
        <label for="id">Book Name:</label>
        <input type="text" id="bookname"></input><br></br><br></br>
        <input type="submit" id="submit"></input>
    </form>
    </div>
  );
}
export default BookHistory;