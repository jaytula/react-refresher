import { Fragment, MouseEventHandler, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({ text }: { text: string }) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const deleteHandler: MouseEventHandler<HTMLButtonElement> = function (event) {
    setModalIsOpen(true);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
