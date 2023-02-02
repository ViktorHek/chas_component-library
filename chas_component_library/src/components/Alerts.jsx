import { useState } from "react";
function Alert(color, icon, onDismiss) {
  const [showAlert, setShowAlert] = useState(false);

  const alertElementLike = document.getElementById("alert_button_like");
  const alertElementLove = document.getElementById("alert_button_love");
  if (alertElementLike) {
console.log('tjofff')
    alertElementLike.addEventListener("click", handleClickLike);
  }

  if (alertElementLove) {
    alertElementLove.addEventListener("click", handleClickLove);
  }

  function handleClickLike() {
    console.log("hej");
    setTimeout(console.log("då"), 2000);
  }
  function handleClickLove() {
    console.log("hej");
    setTimeout(console.log("då"), 2000);
  }

  return (
    <div className="Alert">
      <span></span>
    </div>
  );
}

export default Alert;
