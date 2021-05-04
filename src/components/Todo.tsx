import { MouseEventHandler, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({ text }: { text: string }) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const deleteHandler: MouseEventHandler<HTMLButtonElement> = function (event) {
    setModalIsOpen(true);
  };

  const closeModalHandler = function () {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
