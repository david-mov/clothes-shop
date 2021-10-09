import { useState } from "react";
import "./UserOptionsLog.css"

function UserOptionsLog({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Register", "Login"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
      <img className="imagen" src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"></img>
       
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserOptionsLog;