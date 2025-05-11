import "./bookstatus.css";
import { NavLink } from "react-router-dom";
import Nav from "../nav";
function BookStatus() {
  return (
    <div>
      <Nav />
      <p id="title">Book Status</p>
      <form
        action=""
        method="get"
        class="addbooks"
        onsubmit="return addBooks()"
      >
        <label id="lid">Book Name:</label>
        <input type="text" id="iid" />
        <br></br>
        <br></br>
        <label id="lname">Author:</label>
        <input type="text" id="iname" />
        <br></br>
        <br></br>
        <label id="lauthor">Edition:</label>
        <input type="text" id="iauthor" />
        <br />
        <br />
        <button class="submit">Submit</button>
      </form>
    </div>
  );
}
export default BookStatus;