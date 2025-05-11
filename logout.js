import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./logout.css";
function Logout() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <button onClick={showPopup}>Logout</button>

      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-box">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>
            <p className="text">Are you sure you want to logout?</p>
            <NavLink to="/">
              <button className="bt1">Yes</button>
            </NavLink>
            <button className="bt2" onClick={closePopup}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logout;