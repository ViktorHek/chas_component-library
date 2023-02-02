import Alert from "./components/Alerts";
import Modal from "./components/Modal";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);
  function handleClose() {
    setOpenModal(false)
  }
  function handleDismiss() {
    console.log("dissmissing");
  }
  function handleClick() {
    setOpenModal(true);
  }

  return (
    <div className="App">
      <Alert color={"green"} icon={"success"} onDismiss={handleDismiss} />
      <Button
        size={"big"}
        color={"blue"}
        disabled={false}
        handleClick={handleClick}
      />
      {openModal && <Modal show={openModal} onClose={handleClose} size={"big"} />}
    </div>
  );
}

export default App;
