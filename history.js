import "./history.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function History() {
  return (
    <div>
    <Nav/>
    <div id="container">
        <NavLink to="/studenthistory">
        <button  className="but" id="student">STUDENT</button>
        </NavLink>
        <NavLink to="/facultyhistory">
        <button className="but"id="faculty">FACULTY</button>
        </NavLink>
        <NavLink to="/bookhistory">
        <button className="but"id="books">BOOKS</button>
        </NavLink>
    </div>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719248426/student_icon_dubrta.png" alt="student" class="icons" id="sicon"></img>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719248426/teacher_icon_dl4a5y.png" alt="faculty" class="icons" id="ficon"></img>
    <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1716897820/books_icon_kfyjur.png" alt="books" class="icons" id="bicon"    ></img>
    </div>
  );
}
export default History;