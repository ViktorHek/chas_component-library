function Button({ size, color, disabled, handleClick }) {
  let height = 70;
  let width = 100;
  if (size === "big") {
    height = 120;
    width = 200;
  }
  function checkIfDisabled() {
    if (disabled) {
      console.log("button is disabled");
      return;
    } else {
      return handleClick();
    }
  }
  return (
    <div className="Button">
      <button
        style={{ backgrondColor: color, height: height, width: width }}
        className={`${disabled ? "isDisabled" : "not-disabled"}`}
        onClick={() => checkIfDisabled()}>
        click
      </button>
    </div>
  );
}

export default Button;
