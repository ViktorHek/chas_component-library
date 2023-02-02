import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);
  function handleClose() {
    setOpenModal(false);
  }
  function handleClick() {
    setOpenModal(true);
  }
  return (
    <div className="App center">
      <h1>images of greeatings</h1>

      <div style={{ margin: "20px 0px" }}>
        <Button
          size={"big"}
          color={"blue"}
          disabled={false}
          handleClick={handleClick}
        />
      </div>

      {openModal && (
        <Modal show={openModal} onClose={handleClose} size={"big"} />
      )}
    </div>
  );
}

export default App;
