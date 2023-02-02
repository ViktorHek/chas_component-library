
function Button({ size, color, disabled, handleClick }) {

  let height = 70;
  let width = 100;
  if (size === "big") {
    height = 120;
    width = 200;
  }

  return (
    <div className="Button">
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
