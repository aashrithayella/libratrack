import "./nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div>
      <div id="nav">
        <img src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247883/grietnamelogo_yqvrki.png" alt="logo" id="logo" />
        <NavLink to="/logout">
        <button id="logout">Logout</button>
        </NavLink>
      </div>
      <div id="color"></div>
      <div class="sidepanel">
        <img class="sideimg" src="https://res.cloudinary.com/ddvytho8r/image/upload/v1716897820/books_icon_kfyjur.png" alt="bookstat" />
        <NavLink to="/bookstatus">
        <button class="sidebuttons" id="status">
          Book Status
        </button>
        </NavLink>
        <img class="sideimg" src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247964/issue_icon_dhzggt.png" alt="bookstatus" />
        <NavLink to="/studentfaculty">
        <button class="sidebuttons" id="issue">
          Issue Books
        </button>
        </NavLink>
        <img class="sideimg" src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247976/return_icon_ihtfr5.png" alt="bookstatus" />
        <NavLink to="/studentfaculty2">
        <button class="sidebuttons" id="return">
          Return Books
        </button>
        </NavLink>
        <img class="sideimg" src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247230/addbooks_icon_kpyddy.png" alt="bookstatus" />
        <NavLink to="/addbooks">
        <button class="sidebuttons" id="add">
          Add Books
        </button>
        </NavLink>
        <img class="sideimg" src="https://res.cloudinary.com/ddvytho8r/image/upload/v1719247961/history_icon_lvy0jp.png" alt="bookstatus" />
        <NavLink to="/history">
        <button class="sidebuttons" id="history">
          History
        </button>
        </NavLink>
      </div>
    </div>
  );
}
export default Nav;