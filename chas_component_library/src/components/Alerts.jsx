function Alert({ color, icon, onDismiss }) {
  return (
    <div className="Alert" style={{backgrondColor: color}}>
      <span>You have {icon}d this image</span>
      <span onClick={() => onDismiss()} style={{ cursor: "pointer" }}>
        x
      </span>
    </div>
  );
}

export default Alert;
