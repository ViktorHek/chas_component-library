import { useState } from "react";
import Alert from "./Alerts";

function Badges({ color, size, icon }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertObj, setAlertObj] = useState({ color: "green", icon: "heart" });

  let img = "https://cdn-icons-png.flaticon.com/128/9573/9573533.png";
  let width = "40px";

  if (size === "big") {
    width = "60px";
  }
  if (icon === "like") {
    img = "https://cdn-icons-png.flaticon.com/128/739/739231.png";
  }

  function handleClick(type) {
    if (type === "like") {
      setAlertObj({ color: "#2dae2d", icon: type });
    } else {
      setAlertObj({ color: "#d85858", icon: type });
    }
    setShowAlert(!showAlert);
    setTimeout(closeAlert, 5000);
  }

  function closeAlert() {
    setShowAlert(false);
  }
  return (
    <div
      style={{
        display: "flex",
        backgrondColor: color,
        width: width,
        cursor: "pointer",
      }}
      onClick={() => handleClick(icon)}>
      {showAlert === true && (
        <Alert
          color={alertObj.color}
          icon={alertObj.icon}
          onDismiss={closeAlert}
        />
      )}
      <div className="icon-container">
        <img src={img} alt="icon" />
      </div>
      <span>{icon}</span>
    </div>
  );
}

export default Badges;
