function Button({ size, color, disabled, handleClick }) {
  let height = 100;
  let width = 70;
  if (size === "big") {
    height = 200;
    width = 120;
  }

  return (
    <div className="Button alert_button">
      <button
        style={{ backgrondColor: color, height: height, width: width }}
        className={`${disabled ? "isDisabled" : "not-disabled"}`}
        onClick={() => handleClick()}>
        click
      </button>
    </div>
  );
}

export default Button;
